const User = require('../../models/users');
const {
  successResponseWithToken,
  errorResponse,
} = require('../../middlewares/responses');

const signin = (req, res) => {
  const { email, password } = req.body;

  // 1. 이메일과 비밀번호로 db 조회

  const userInfo = User.findOne({
    where: {
      email,
      password,
    },
  });

  // 1) 에러: 계정 없음

  // 2) 성공: 계정 정보의refreshToken 추출

  // 2. accessToken 발급 후 쿠키에 저장

  // 3. 응답 성공 메시지 전송
};

module.exports = { signin };
