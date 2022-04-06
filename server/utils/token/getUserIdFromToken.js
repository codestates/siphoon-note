// arguments: token을 해독해서 사용자의 uuid 반환
const jwt = require('jsonwebtoken');
const { decrypt } = require('../db');

const getUserIdFromToken = async (token = '') => {
  const decodeUser = jwt.verify(decrypt(token), process.env.TOKEN_SECRET);
  return decodeUser.uuid;
};

module.exports = { getUserIdFromToken };
