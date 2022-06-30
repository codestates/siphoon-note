const connection = require('../database');

module.exports = {
  // 1. 🏆 top 4 users of totalEssay => for landing page
  // record 테이블에서 essayTotal 4명 뽑고 해당 유저 id 목록 반환
  getRankedUserList: async (/* 요청을 보낸 날짜 */) => {},

  getUserRecordById: async (userId = 0, callback) => {
    const sql = `SELECT * FROM ?? WHERE ?? = ?`;
    const values = ['records', 'user_id', userId];

    connection.query(sql, values, (err, result) => {
      callback(err, result);
    });
  },
};
