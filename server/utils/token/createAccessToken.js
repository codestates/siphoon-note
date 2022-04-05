const jwt = require('jsonwebtoken');
const secretKey = process.env.TOKEN_SECRET;
const expiresIn = process.env.ACC_EXPIRED_IN;

// user는 객체로 회원의 정보를 담는 객체
// ! user의 유효성 검사가 필요함
const accessToken = (user = {}) => {
  const { email, profileImage, uuid, createdAt } = user;
  const payload = {
    email,
    profileImage,
    uuid,
    createdAt,
  };
  return jwt.sign(payload, secretKey, { expiresIn });
};

module.exports = { accessToken };
