// db에 저장된 refreshToken을 가져옴
const getRefreshToken = email => {
  // ! db에서 email로 해당 사용자의 refreshToken 조회

  // user 객체에서 refreshToken 얻기
  const refreshToken = user.refreshToken;

  return refreshToken;
};

module.exports = { getRefreshToken };
