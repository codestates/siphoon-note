const jwt = require('jsonwebtoken');
const secretKey = process.env.TOKEN_SECRET;
const expiresIn = process.env.ACC_EXPIRED_IN;
const logger = require('../../middlewares/logger');

const createAccessToken = (accountInfoForToken = {}) => {
  logger.debug(
    'Auth-Signin called createAccessToken with',
    accountInfoForToken
  );

  const { email, username, profileImage /*uuid,*/ } = accountInfoForToken;

  if (!email || !username || !profileImage) {
    logger.error('Auth-Signin', 'Something is missing accountInfoForToken');
    return null;
  }

  const payload = {
    email,
    username,
    profileImage,
  };

  return jwt.sign(payload, secretKey, { expiresIn });
};

module.exports = { createAccessToken };
