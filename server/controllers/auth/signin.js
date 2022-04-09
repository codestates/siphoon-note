const { findAccountBymailPw } = require('../../middlewares/user');
const {
  getRefreshToken,
  decodeToken,
  createAccessToken,
  tokenValidator,
} = require('../../middlewares/auth');

const { users } = require('../../models');
const {
  successResponseWithToken,
  errorResponse,
} = require('../../middlewares/responses/responseHandler');

const signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    errorResponse({
      res,
      status: 400,
      message:
        'Please, check your request! Missing or Invalid Operation Parameters',
    });
  }

  const isValidAccount = findAccountBymailPw(email, password);

  if (!isValidAccount) {
    errorResponse({
      res,
      status: 404,
      message: 'Email or Password is incorrect!',
    });
  }

  const refreshToken = isValidAccount.refreshToken;

  const isValidRefreshToken = tokenValidator(refreshToken);

  if (!isValidRefreshToken) {
    errorResponse({
      res,
      status: 401,
      message: 'Refresh Token is invalid!',
    });
  }

  const decodedUserInfo = decodeToken(refreshToken);

  if (!decodedUserInfo) {
    errorResponse({
      res,
      status: 500,
      message: 'Failed to decode user info!',
    });
  }

  const accessToken = createAccessToken(decodedUserInfo);

  successResponseWithToken({
    res,
    token: accessToken,
    status: 200,
    message: 'Successfully signed in!',
  });
};

//여기에서 res.redirect('/essays')로 넘어감

module.exports = { signin };
