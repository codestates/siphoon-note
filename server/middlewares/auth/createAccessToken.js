const jwt = require('jsonwebtoken');
const secretKey = process.env.TOKEN_SECRET;
const expiresIn = process.env.ACC_EXPIRED_IN;

const accessToken = (accountInfoForToken = {}) => {
  const { email, username, profileImage /*uuid,*/ } = accountInfoForToken;
  const payload = {
    email,
    username,
    profileImage,
  };
  return jwt.sign(payload, secretKey, { expiresIn });
};

module.exports = { accessToken };
