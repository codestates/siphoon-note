const User = require('../../models/users');
const {
  successResponseWithToken,
  errorResponse,
} = require('../../middlewares/responses/responseHandler');
const {
  createAccessToken,
  createRefreshToken,
} = require('../../middlewares/auth');
const { encrypt } = require('../../middlewares/utils');
const logger = require('../../middlewares/logger');

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
  try {
    const isExist = await User.findOne({
      where: { email },
    });

    if (isExist) {
      errorResponse({
        res,
        status: 409,
        message: 'Email already Exists! Please enter another address!',
      });
    }

    const getRandomIdx = () => {
      return Math.floor(Math.random() * 16);
    };

    const accountInfoForToken = {
      email,
      username,
      profileImage: getRandomIdx(),
    };

    const accessToken = createAccessToken(accountInfoForToken);
    const refreshToken = createRefreshToken(accountInfoForToken);
    const encryptedPasswd = encrypt(password);

    const newUser = await User.create({
      refreshToken,
      email,
      name: username,
      password: encryptedPasswd,
      gender,
      birthday,
      region,
      profile_image: accountInfoForToken.profileImage,
    });

    logger.debug('Created UserInfo is', newUser);

    successResponseWithToken({
      res,
      accessToken,
      status: 201,
      message: 'Successfully signed up',
    });
  } catch (error) {
    errorResponse({
      res,
      status: 500,
      message: 'Sorry, Cannot Create New User Account! Internal Server Error',
    });
  }
};
//여기에서 res.redirect('/essays')로 넘어감

module.exports = { signup };
