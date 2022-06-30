const jwt = require('jsonwebtoken');

const getUserEmailFromToken = async (token = '') => {
  const decodeUser = jwt.verify(token, process.env.TOKEN_SECRET);

  if (!decodeUser) {
    return null;
  } else {
    return decodeUser.email;
  }
};

module.exports = getUserEmailFromToken;
