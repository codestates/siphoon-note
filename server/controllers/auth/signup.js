const {
  checkEmailUnique,
  setRandomImageToUser,
} = require('../../middlewares/user');
const {
  createAccessToken,
  createRefreshToken,
} = require('../../middlewares/auth');
const { encrypt } = require('../../middlewares/utils');
const { users } = require('../../models');
const {
  successResponseWithToken,
  errorResponse,
} = require('../../middlewares/responses/responseHandler');

const signup = async (req, res) => {
  const { email, username, password, gender, birthday, region } = req.body;

  if (!email || !username || !password) {
    errorResponse({
      res,
      status: 400,
      message:
        'Please, check your request! Missing or Invalid Operation Parameters',
    });
  }

  // isExist: null -> 가입 가능
  // isExist: '__' -> 가입 불가
  const isExist = checkEmailUnique(email);

  if (isExist) {
    errorResponse({
      res,
      status: 409,
      message: 'Email already Exists! Please enter another address!',
    });
  }

  const accountInfoForToken = {
    email,
    username,
    profileImage: setRandomImageToUser(),
  };

  const accessToken = createAccessToken(accountInfoForToken);
  const refreshToken = createRefreshToken(accountInfoForToken);
  const encryptedPasswd = encrypt(password);

  try {
    const newUser = await users.createAccouont(
      email,
      username,
      accountInfoForToken.profileImage,
      refreshToken,
      encryptedPasswd,
      gender,
      birthday,
      region
    );
    successResponseWithToken({
      res,
      data: newUser,
      token: accessToken,
      status: 201,
      message: 'Susscessfully Created New User!',
    });
  } catch (error) {
    errorResponse({
      res,
      status: 500,
      message: 'Internal Server Error!',
    });
  }
};

//여기에서 res.redirect('/essays')로 넘어감

module.exports = { signup };
