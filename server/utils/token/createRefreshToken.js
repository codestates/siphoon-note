const jwt = require('jsonwebtoken');
const { REFRESH_SECRET } = require('../../config');

const refreshToken = (user = {}) => {
  const { email, profileImage, uuid, createdAt } = user;
  const payload = {
    email,
    profileImage,
    uuid,
    createdAt,
  };
  return jwt.sign(payload, REFRESH_SECRET, { expiresIn: '30d' });
};

module.exports = { refreshToken };
