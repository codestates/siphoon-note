const jwt = require('jsonwebtoken');
const secretKey = process.env.TOKEN_SECRET;
const expiresIn = process.env.REF_EXPIRED_IN;

// user는 객체로 회원의 정보를 담는 객체
// ! user의 유효성 검사가 필요함
const refreshToken = (user = {}) => {
  const { email, username, profileImage /*uuid,*/ } = user;
  const payload = {
    email,
    username,
    profileImage,
  };
  return jwt.sign(payload, secretKey, { expiresIn });
};

module.exports = { refreshToken };
