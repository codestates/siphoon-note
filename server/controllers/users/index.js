//모듈 다시 내보내기: 패키지 안의 파일 내용은 되도록 노출되지 않도록

const { createUser } = require('./createUser');
const { getUser } = require('./getUser');
const { updateUser } = require('./updateUser');
const { deleteUser } = require('./deleteUser');
const { getWeeklyUserList } = require('./getWeeklyUserList');

module.exports = {
  // 사용자 계정 생성
  createUser,

  // 토큰 정보로 사용자 정보 조회: userInfo, essayList, recordList
  getUser,

  // 사용자 정보 수정
  updateUser,

  // 사용자 계정 삭제
  deleteUser,

  // 랜딩페이지의 사용자 목록 조회
  getWeeklyUserList,
};
