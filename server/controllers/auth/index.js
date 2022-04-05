const { hasAuthorization } = require('./hasAuthorization');
const { isValidateAuth } = require('./isValidateAuth');
const { getRefreshToken } = require('./getRefreshToken');

// 인증, 인가에 필요한 비지니스 로직
// 토큰 관련 모듈을 utils로 분리하는 것으로 고려한다면, controller에서는 어떤 내용이 필요할지
module.exports = {
  hasAuthorization,
  isValidateAuth,
  getRefreshToken,
};
