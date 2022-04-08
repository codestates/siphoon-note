const { getEssayList } = require('./getEssayList');
const { getMarkList } = require('./getMarkList');
const { getTodaysWord } = require('./getTodaysWord');
const { getUserRecord } = require('./getUserRecord');
const { tokenValidator } = require('../../middlewares/auth');
const { getUserEmailFromToken } = require('../../middlewares/user');
const { findAllUserInfoByEmail } = require('../../models');
const {
  successResponse,
  errorResponse,
} = require('../../middlewares/responses/responseHandler');

const getMySpace = async (req, res) => {
  // 0. 페이지네이션을 위한 limit, offset 확인
  const { limit, offset } = req.query; // req.query => { limit: 20, offset: 0 }

  if (!limit || !offset) {
    errorResponse({
      res,
      status: 400,
      message:
        'Please, check your request! Missing or Invalid Operation  Parameters',
    });
  }

  // 1. 쿠키의 토큰 포함 유무 확인
  const accessToken = req.cookies.Bearer;

  if (!accessToken) {
    errorResponse({
      res,
      status: 401,
      message: 'Unauthorized Request! AccessToken is missing',
    });
  }

  // 2. 토큰의 유효성 검사
  const isValidateToken = await tokenValidator(accessToken);

  if (!isValidateToken) {
    errorResponse({
      res,
      status: 401,
      message: 'Unauthorized Request! AccessToken is invalid',
    });
  }

  // 3. 마이스페이스 로딩을 위한 사용자 데이터 조회 시작
  const userEmail = await getUserEmailFromToken(accessToken);

  if (!userEmail) {
    errorResponse({
      res,
      status: 500,
      message: 'Internal Server Error! Cannot get user email from token',
    });
  }

  const userInfo = await findAllUserInfoByEmail(userEmail);
  // id int AI PK
  // refresh_token varchar(255)
  // email varchar(255)
  // name varchar(45)
  // password varchar(255)
  // created_at timestamp
  // updated_at timestamp
  // gender varchar(55)
  // birthday datetime
  // region varchar(45)
  // profile_image int

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

module.exports = { getMySpace };
