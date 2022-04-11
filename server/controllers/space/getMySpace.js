const { getEssayListByPagination } = require('../../models/model.essays');
const { findAllCreatedAt } = require('../../models/model.essays');
const { getInspiration } = require('../../models/model.inspirations');
const { getUserRecordById } = require('../../models/model.records');
const { tokenValidator } = require('../../middlewares/auth');
const {
  successResponse,
  errorResponse,
} = require('../../middlewares/responses/responseHandler');
const logger = require('../../middlewares/logger');

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

  // 3. 마이스페이스 로딩을 위한 사용자 데이터 조회 시작
  const userInfos = tokenValidator(accessToken);

  logger.debug('userInfos is', userInfos);

  if (!userInfos) {
    errorResponse({
      res,
      status: 500,
      message: 'Internal Server Error! Cannot get user email from token',
    });
  }

  const {
    id,
    email,
    name,
    profileImage,
    gender,
    birthday,
    region,
    created_at,
  } = userInfos;

  const getTodaysWord = async callback => {
    getInspiration((err, word) => {
      if (err) {
        logger.error('getTodaysWord error is', err);
        return callback(err);
      }
      return callback(null, word);
    });
  };
  logger.debug('todaysWord is', getTodaysWord);

  const getMarkList = async (id, callback) => {
    findAllCreatedAt(id, (err, markList) => {
      if (err) {
        logger.error('getMarkList error is', err);
        return callback(err);
      }
      return callback(null, markList);
    });
  };
  logger.debug('markList is', getMarkList);

  // 사용자 기록 정보 가져오기
  const getRecord = async (id, callback) => {
    getUserRecordById(id, (err, record) => {
      if (err) {
        logger.error('getRecord error is', err);
        return callback(err);
      }
      return callback(null, record);
    });
  };
  logger.debug('record is', getRecord);

  const getEssayList = async (id, limit, offset, callback) => {
    getEssayListByPagination(id, limit, offset, (err, essayList) => {
      if (err) {
        logger.error('essayIdList error is', err);
        return callback(err);
      }
      return callback(null, essayList);
    });
  };
  logger.debug('essayList is', getEssayList);

  // getEssayIdList => get each TagList
  // essay: {
  // tagList: [ 1, 2, 3]
  // }

  // const essayList = await getEssayList(id, limit, offset, cb);
  // logger.debug('essayList is', essayList);

  const { todaysWord, markList, record, essayList } = await Promise.all([
    getTodaysWord(new Date().getDate()), //
    getMarkList(id), //
    getRecord(id), //
    getEssayList(id, limit, offset), //
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
      data: {
        userInfo: {
          id,
          email,
          name,
          profileImage,
          gender,
          birthday,
          region,
          created_at,
        },
        essayList,
        todaysWord,
        record,
        markList,
      },
      status: 200,
      message: "Successfully get User's Essay Page!",
    });
  }
};

module.exports = { getMySpace };
