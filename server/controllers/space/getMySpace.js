// 회원 가입 || 로그인 성공 후 들어옴
// require로 불러오는 모든 모듈이 token에서 해독한 unique email이 필요
const { getEssayList } = require('./getEssayList');
const { getMarkList } = require('./getMarkList');
const { getTodaysWord } = require('./getTodaysWord');
const { getUserRecord } = require('./getUserRecord');
const { decodeToken } = require('../../middlewares/auth');
const {
  successResponse,
  errorResponse,
} = require('../../middlewares/responses/responseHandler');

const getMySpace = async (req, res) => {
  const accessToken = req.cookies.Bearer;
  const decodedUserInfo = decodeToken(accessToken);

  const { email, username, profileImage } = decodedUserInfo;
  const userInfo = { email, username, profileImage };

  const { essayList, todaysWord, record, markList } = await Promise.all([
    getEssayList(email, req.query.limit, req.query.offset), // 반복적으로 어떻게 수행?
    getTodaysWord(new Date().getDate()),
    getUserRecord(email),
    getMarkList(email),
  ]);

  if (!essayList || !todaysWord || !record || !markList) {
    errorResponse({
      req,
      res,
      status: 500,
      error,
      message: 'Internal Server Error',
    });
  } else {
    successResponse({
      req,
      res,
      data: { userInfo, essayList, todaysWord, record, markList },
      status: 200,
      message: "Successfully get User's Essay Page!",
    });
  }
};

module.exports = getMySpace;
