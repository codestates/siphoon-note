//모듈 다시 내보내기: 패키지 안의 파일 내용은 되도록 노출되지 않도록

const { createUserAccount } = require('./createUserAccount');
const { getUserInfo } = require('./getUserInfo');
const { updateUserInfo } = require('./updateUserInfo');
const { deleteUserAccount } = require('./deleteUserAccount');
const { getWeeklyUserList } = require('./getWeeklyUserList');

module.exports = {
  // 사용자 계정 생성
  createUserAccount,

  // 사용자 정보 조회
  getUserInfo,

  // 사용자 정보 수정
  updateUserInfo,

  // 사용자 계정 삭제
  deleteUserAccount,

  // 랜딩페이지의 사용자 목록 조회
  getWeeklyUserList,
};
