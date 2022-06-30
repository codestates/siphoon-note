const { findAllUserInfoByEmail } = require('../../models/model.users');
const {
  successResponseWithToken,
  errorResponse,
} = require('../../middlewares/responses/responseHandler');
const { createAccessToken } = require('../../middlewares/auth');
const logger = require('../../middlewares/logger');

const signin = (req, res) => {
  const { email, password } = req.body;

  findAllUserInfoByEmail(email, (err, result) => {
    if (err) {
      errorResponse({ res, status: err.status, message: err.message });
    } else {
      logger.debug('Result is', result[0]);

      if (result[0].length === 0) {
        errorResponse({
          res,
          status: 400,
          message: '등록되지 않은 이메일입니다.',
        });
      }

      if (result[0].password !== password) {
        errorResponse({
          res,
          status: 400,
          message: '비밀번호가 일치하지 않습니다.',
        });
      }

      const accessToken = createAccessToken({
        email: result[0].email,
        username: result[0].name,
        profileImage: result[0].profile_image,
      });

      logger.debug('accessToken is', accessToken);

      if (accessToken) {
        successResponseWithToken({
          res,
          token: accessToken,
          status: 200,
          message: 'Successfully Signin',
        });
      } else {
        errorResponse({
          res,
          status: 500,
          message: 'Internal Server Error',
        });
      }
    }
  });
};

module.exports = { signin };
