// 모든 사용자 중에서 records.essay_total 가장 큰 상위 4명을 반환
// "userList": [
//   {
//     "id": 0,
//     "username": "string",
//     "profileImage": 0,
//     "totalEssay": 38
//   }

const { getHighestRecordUserList } = require('../record');

const getWeeklyUserList = async () => {
  const topRankedUserList = await getHighestRecordUserList(4);

  return topRankedUserList;
};

module.exports = getWeeklyUserList;
