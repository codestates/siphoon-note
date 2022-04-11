const connection = require('../database');

module.exports = {
  // 1. 사용자 아이디로 작성한 모든 태그 리스트를 가져온다
  findAllTagsByUserId: (userId = 0, callback) => {
    const sql = `
      SELECT t.tag_name
      FROM tags t
      JOIN essay_tag et ON t.id = et.tag_id
      WHERE et.essay_id = ?
    `;
    const values = [essayId];

    connection.query(sql, values, (err, result) => {
      callback(err, result);
    });
  },

  getTagListBelongToEssay: (essayId = 0, callback) => {
    const sql = `
      SELECT t.tag_name
      FROM tags t
      JOIN essay_tag et ON t.id = et.tag_id
      WHERE et.essay_id = ?
    `;
    const values = [essayId];

    connection.query(sql, values, (err, result) => {
      callback(err, result);
    });
  },
};
