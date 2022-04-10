const jwt = require('jsonwebtoken');
const logger = require('../../middlewares/logger');

const tokenValidator = token => {
  logger.debug('tokenValidator', token);
  const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

  if (!decodedToken) {
    logger.error('tokenValidator', 'token is not valid');
    return false;
  }

  return true;
};

module.exports = { tokenValidator };
