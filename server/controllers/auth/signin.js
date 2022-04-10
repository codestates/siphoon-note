const { findAccountBymailPw } = require('../../middlewares/user');
const {
  getRefreshToken,
  decodeToken,
  createAccessToken,
  tokenValidator,
} = require('../../middlewares/auth');
const logger = require('../../middlewares/logger');

const {
  successResponseWithToken,
  errorResponse,
} = require('../../middlewares/responses/responseHandler');

const signin = async (req, res) => {
  logger.info(
    `AuthController called SIGNIN ${req.method} ${req.url}`,
    req.body
  );

  const { email, password } = req.body;

  if (!email || !password) {
    logger.error('email or password is empty');
    errorResponse({
      res,
      status: 400,
      message:
        'Please, check your request! Missing or Invalid Operation Parameters',
    });
  }

  try {
    const isValidAccount = findAccountBymailPw(email, password);

    if (isValidAccount === null) {
      logger.error('email or password is invalid');
      errorResponse({
        res,
        status: 401,
        message: 'email or password is invalid',
      });
    }

    logger.debug(isValidAccount);

    if (!isValidAccount.refreshToken) {
      logger.debug(`refreshToken is empty!\n Result is...`);
      logger.debug(isValidAccount);
      errorResponse({
        res,
        status: 401,
        message: 'refreshToken is empty',
      });
    }

    const isValidRefreshToken = tokenValidator(refreshToken);

    if (!isValidRefreshToken) {
      logger.error('refreshToken is invalid');
      errorResponse({
        res,
        status: 401,
        message: 'refreshToken is invalid',
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

    if (!accessToken) {
      errorResponse({
        res,
        status: 500,
        message: 'Failed to create access token!',
      });
    }
    successResponseWithToken({
      res,
      token: accessToken,
      status: 200,
      message: 'Successfully signed in!',
    });
  } catch (error) {
    logger.error('signin', error);
    errorResponse({
      res,
      status: 500,
      message: 'Internal Server Error',
    });
  }
};

//여기에서 res.redirect('/essays')로 넘어감

module.exports = { signin };
