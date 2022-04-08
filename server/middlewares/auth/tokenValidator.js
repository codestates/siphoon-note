const jwt = require('jsonwebtoken');

const tokenValidator = token => {
  const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

  if (decodedToken.exp < Date.now() / 1000) {
    return false;
  }

  return true;
};

module.exports = tokenValidator;
