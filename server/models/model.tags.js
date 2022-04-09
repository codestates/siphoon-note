const connection = require('../database');

const callback = (error, result) => {
  if (error) {
    console.error(error);
    throw error;
  }
  return result;
};

module.exports = {
  // model.essays.findAllEssayIdByUserId에서 구한
  // essayId로 각 글의 태그 목록을 반복적으로 조회
  // 1. get list of tag by essay_id
  findAllTagsByEssayId: (essayId = 0) => {
    const sql = `
      SELECT t.tag_name
      FROM tags t
      JOIN essay_tag et ON t.id = et.tag_id
      WHERE et.essay_id = ?
    `;
    const values = [essayId];

    connection.query(sql, values, callback);
  },
};
