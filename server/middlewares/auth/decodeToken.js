const jwt = require('jsonwebtoken');
const secretKey = process.env.TOKEN_SECRET;
const logger = require('../../middlewares/logger');

logger.info('Auth:Signin called');

const decodedToken = async (token = '') => {
  logger.debug('Decode Token with', token);
  const decodedToken = jwt.verify(token, secretKey);

  if (!decodedToken) {
    return null;
  }
  return decodedToken;
};

module.exports = { decodedToken };
