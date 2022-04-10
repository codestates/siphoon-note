const { findUserByEmail } = require('../../models/model.user');
const logger = require('../../middlewares/logger');
const { createAccessToken } = require('../../middlewares/auth');
const {
  successResponseWithToken,
  errorResponse,
} = require('../../middlewares/responses/responseHandler');

const signin = async (req, res) => {
  logger.info(`${req.method} ${req.url}`, req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    logger.debug(`email: ${email} || password: ${password}`);
    errorResponse({
      res,
      status: 400,
      message:
        'Please, check your request! Missing or Invalid Operation Parameters',
    });
  }
  const result = findUserByEmail(email);

  logger.info('result', result);

  if (!result) {
    errorResponse({
      res,
      status: 400,
      message: 'email is not exist',
    });
  } else {
    const { id, email, name, profileImage } = result;
    const accessToken = createAccessToken(id, email, name, profileImage);

    successResponseWithToken({
      res,
      accessToken,
      status: 200,
      message: 'Successfully Signin',
    });
  }
};
//여기에서 res.redirect('/essays')로 넘어감

module.exports = { signin };
