// arguments: token을 해독해서 사용자의 uuid 반환
const jwt = require('jsonwebtoken');
const { decrypt } = require('../utils');

const getUserIdFromToken = async (token = '') => {
  const decodeUser = jwt.verify(decrypt(token), process.env.TOKEN_SECRET);
  return decodeUser.email;
};

module.exports = { getUserEmailFromToken };
