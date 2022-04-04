const jwt = require('jsonwebtoken');
const { ACCESS_SECRET } = require('../../config');

const accessToken = (user = {}) => {
  const { email, profileImage, uuid, createdAt } = user;
  const payload = {
    email,
    profileImage,
    uuid,
    createdAt,
  };
  return jwt.sign(payload, ACCESS_SECRET, { expiresIn: '1d' });
};

module.exports = { accessToken };
