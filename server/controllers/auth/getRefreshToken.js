const { getUserIdFromToken } = require('../../utils/token');
const { findUserById } = require('../../utils/db');

// accessToken 만료 시 refreshToken 얻기
const getRefreshToken = async (req, res) => {
  const encryptedToken = req.headers.authorization;
  // !Bearer Token=''에서 토큰만 추출
  const uuid = await getUserIdFromToken(encryptedToken);
  const user = await findUserById(uuid);

  if (!user) {
    return res.status(401).json({
      message: 'Invalid token',
    });
  }

  // user 객체에서 refreshToken 얻기
  const refreshToken = user.refreshToken;

  return res.status(200).json({
    message: 'Successfully get refresh token',
    refreshToken,
  });
};

module.exports = { getRefreshToken };
