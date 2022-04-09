const jwt = require('jsonwebtoken');

const decodedToken = token => {
  const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

  if (!decodedToken) {
    return null;
  } else {
    return decodedToken;
  }
};

module.exports = decodedToken;
