const {
  getEssayListByPagination,
  findAllCreatedAt,
} = require('../../models/model.essays');
const { getInspiration } = require('../../models/model.inspirations');
const { getUserRecordById } = require('../../models/model.records');
const { getTagListByEssayId } = require('../../models/model.tags');
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

  const getMarkList = async (id, callback) => {
    findAllCreatedAt(id, (err, markList) => {
      if (err) {
        logger.error('getMarkList error is', err);
        return callback(err);
      }
      return callback(null, markList);
    });
  };

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

  const getEssayList = async (id, limit, offset, callback) => {
    getEssayListByPagination(id, limit, offset, (err, essayList) => {
      if (err) {
        logger.error('essayIdList error is', err);
        return callback(err);
      }
      return callback(null, essayList);
    });
  };

  const { todaysWord, markList, record, essayList } = await Promise.all([
    getTodaysWord(),
    getMarkList(id),
    getRecord(id),
    getEssayList(id, limit, offset),
  ]);

  // const addTagListToEssay = async (onLyEssayList, callback) => {
  //   onLyEssayList.map(essay => {
  //     getTagListByEssayId(essay.id, (err, tagList) => {
  //       if (err) {
  //         logger.error('addTagListToEssay error is', err);
  //         return callback(err);
  //       }
  //       essay.tagList = tagList;
  //       return callback(null, onLyEssayList);
  //     });
  //   });
  // };

  // const essayList = await addTagListToEssay(onLyEssayList);
  // logger.debug('essayWithTagList is', essayWithTagList);

  if (!essayList || !todaysWord || !record || !markList) {
    errorResponse({
      req,
      res,
      status: 500,
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
        essayList: ['아침', '운동', '즐거움'],
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
