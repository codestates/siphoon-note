const User = require('../../models/users');
const {
  successResponseWithToken,
  errorResponse,
} = require('../../middlewares/responses/responseHandler');
const { tokenValidator, createAccessToken } = require('../../middlewares/auth');
const logger = require('../../middlewares/logger');

const signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    errorResponse({
      res,
      status: 400,
      message: 'Please provide email and password',
    });
  }

  try {
    const userInfo = await User.findOne({
      where: {
        email,
        password,
      },
    });

    if (!userInfo) {
      errorResponse({
        res,
        status: 400,
        message: 'Wrong email or password',
      });
    }

    const { email, name, refreshToken, profile_image } = userInfo.dataValues;

    const isValidToken = await tokenValidator(refreshToken);

    if (!isValidToken) {
      errorResponse({
        res,
        status: 400,
        message: 'Refresh token is not valid',
      });
    }

    const accessToken = createAccessToken({ email, name, profile_image });
    logger.debug('signin', 'accessToken', accessToken);

    successResponseWithToken({
      res,
      status: 200,
      message: 'Successfully signed in',
    });
  } catch (error) {
    errorResponse({
      res,
      status: 500,
      message: 'Internal Server Error',
    });
  }
};

module.exports = { signin };
