const { createAccessToken } = require('./createAccessToken');
const { createRefreshToken } = require('./createRefreshToken');
const { verifyToken } = require('./verifyToken');
const { getRefreshToken } = require('./getRefreshToken');

module.exports = {
  // 토큰 발급에 필요한 불변 정보: email, profileImage, uuid(signup에서 uuid 생성 로직, db 컬럼 속성 수정 필요), createdAt, (username 들어가면 수정 시 토큰도 수정?)
  createAccessToken,
  createRefreshToken,
  // 토큰 해독으로 유저 정보 얻기, 토큰 검증
  verifyToken,
  // accessToken 만료시 db에서 재발급을 위한 refreshToken 얻기
  getRefreshToken,
};
