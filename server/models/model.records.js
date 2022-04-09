const connection = require('../database');

const callback = (error, result) => {
  if (error) {
    console.error(error);
    throw error;
  }
  return result;
};

module.exports = {
  // 1. 🏆 top 4 users of totalEssay => for landing page
  // record 테이블에서 essayTotal 4명 뽑고 해당 유저 id 목록 반환
  getRankedUserList: async (/* 요청을 보낸 날짜 */) => {},

  // 2. totalEssay
  countEssayTotal: async (userId = 0) => {
    const sql = `
      SELECT COUNT(*) AS totalEssay
      FROM ??
      WHERE ?? = ?
    `;
    const values = ['essays', 'user_id', userId];
    connection.query(sql, values, callback);
  },

  // 3. currentStreaks
  // 현재 일자 기준 연속작성일자
  // 일단은 고정된 일자 보내기
  getCurrentStreaks: async (userId = 0) => {
    return 3;
  },

  // 4. longestStreaks
  // 사용자의 일자 기준 최대연속작성일자
  // 일단은 고정된 일자 보내기
  getLongestStreaks: async (userId = 0) => {
    return 10;
  },

  // 5. usageDate
  // 특정 유저 1명의 서비스 사용일자
  countUsageDate: async (userId = 0, createdAt = '') => {
    // select datediff(now(), created_at) as usageDate from users where id = 1;
    const sql = `
      SELECT DATEDIFF(NOW(), ??) AS usageDate
      FROM ??
      WHERE ?? = ?
    `;
    const values = ['created_at', 'users', 'id', userId];

    connection.query(sql, values, callback);
  },
};
