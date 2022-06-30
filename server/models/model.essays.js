const connection = require('../database');

module.exports = {
  // 1. get list of 'created_at'
  findAllCreatedAt: (userId = 0, callback) => {
    const sql = `SELECT DISTINCT ?? FROM ?? WHERE ?? = ?`;
    const values = ['created_at', 'essays', 'user_id', userId];

    connection.query(sql, values, (err, result) => {
      callback(err, result);
    });
  },

  // 2. get list of essay_id by user_id for pagination
  getEssayListByPagination: (userId = 0, limit = 20, offset = 0, callback) => {
    const sql = `
      SELECT ??
      FROM ??
      WHERE ?? = ?
      ORDER BY ?? DESC
      LIMIT ?
      OFFSET ?
    `;
    const values = [
      '*',
      'essays',
      'user_id',
      userId,
      'created_at',
      limit,
      offset,
    ];

    connection.query(sql, values, (err, result) => {
      callback(err, result);
    });
  },

  // 2.의 글 아이디 목록을 순회하면서 각 글의 데이터 조회
  // 3. get list of essays by essay_id
  findAllEssaysByEssayId: (essayId = 0, callback) => {
    const sql = `SELECT ??, ??, ??, ??, ??, ?? FROM ?? WHERE ?? = ?`;
    const values = [
      'id',
      'content',
      'is_deleted',
      'is_public',
      'created_at',
      'updated_at',
      'essays',
      'id',
      essayId,
    ];

    connection.query(sql, values, (err, result) => {
      callback(err, result);
    });
  },
};
