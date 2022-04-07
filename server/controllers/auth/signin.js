// email, pw로 계정 유무 확인

// db에서 해당 계정의 refreshToken을 가져옴 ./getRefreshToken

// refreshToken 유효성 검사 후 유효하면 accessToken 반환

// 로그인 허가
const { findAccountBymailPw } = require('../../middlewares/user');
const {
  getRefreshToken,
  decodeToken,
  createAccessToken,
  tokenValidator,
} = require('../../middlewares/auth');

const signin = async (req, res) => {
  const { email, password } = req.body;
  // req.body의 데이터 검증 -> 에러: 400

  const isValidAccount = findAccountBymailPw(email, password);

  // 에러: 404
  if (!isValidAccount) {
    return res.status(404).json({
      status: 404,
      message: '입력하신 이메일, 비밀번호와 일치하는 계정이 존재하지 않습니다',
    });
  }

  // db에서 계정의 refreshToken을 가져옴
  const refreshToken = getRefreshToken(email);

  // 에러 -> 500

  // refreshToken 유효성 검사 후 유효하면 accessToken 반환
  const isValidRefreshToken = tokenValidator(refreshToken);

  // 401
  if (!isValidRefreshToken) {
    return res.status(401).json({
      status: 401,
      message: 'refreshToken이 유효하지 않습니다',
    });
  }

  const decodedUserInfo = decodeToken(refreshToken);
  const accessToken = createAccessToken(decodedUserInfo);

  res.cookies('Bearer', accessToken, {
    httpOnly: true,
    secure: true,
  });

  res.status(200).json({
    status: 200,
    message: 'Successfully signed in!',
    accessToken,
  });
};

//여기에서 res.redirect('/essays')로 넘어감

module.exports = signin;
