const jwt = require('jsonwebtoken');
const logger = require('../../middlewares/logger');

logger.info('Auth:Signin called');

const decodedToken = token => {
  logger.debug('Auth:Signin decodedToken got ', token);
  const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

  if (!decodedToken) {
    return null;
  } else {
    return decodedToken;
  }
};

module.exports = decodedToken;
