// signup
// 회원가입 폼에서 받은 정보로 user 객체 생성
// 이미 존재하는 이메일이면 에러 반환
// email, username, profileImage /*uuid,*/으로 토큰 생성
// pw는 encrypt
// 나머지 정보는 그대로 db에 저장
// accessToken은 응답 쿠키에 담아서 반환

// GET /essays -> spaceCtrl.getSpace
const {
  checkEmailUnique,
  setRandomImageToUser,
} = require('../../middlewares/user');

const {
  createAccessToken,
  createRefreshToken,
} = require('../../middlewares/auth');

const { encrypt } = require('../../middlewares/utils');

const signup = async (req, res) => {
  const { email, username, password, gender, birthday, region /* ,uuid */ } =
    req.body;
  // req.body의 데이터 검증 -> 에러: 400

  const isValidEmail = checkEmailUnique(email);

  // 409
  if (!isValidEmail) {
    return res.status(409).json({
      status: 409,
      message: 'Email already Exists! Please enter another address!',
    });
  }

  const accountInfoForToken = {
    email,
    username,
    profileImage: setRandomImageToUser(),
  };

  const accessToken = createAccessToken(accountInfoForToken);
  const refreshToken = createRefreshToken(accountInfoForToken);
  const encryptedPasswd = encrypt(password);

  // ! insert into db
  const newUser = await User.create({
    email,
    // uuid,
    username,
    profileImage: accountInfoForToken.profileImage,
    refreshToken,
    password: encryptedPasswd,
    gender,
    birthday,
    region,
  });
  // 여기서 에러 -> 500

  res.cookie('Bearer', accessToken, {
    httpOnly: true,
    secure: true,
  });

  res.status(201).json({
    status: 201,
    message: 'Susscessfully Created New User!',
  });
};

//여기에서 res.redirect('/essays')로 넘어감

module.exports = signup;
