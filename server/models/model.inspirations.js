const connection = require('../database');

const callback = (error, result) => {
  if (error) {
    console.error(error);
    throw error;
  }
  return result;
};

module.exports = {
  // 1. get today's word
  findWord: (today = 0) => {
    const sql = `SELECT word FROM ?? WHERE id = ?`;
    const values = ['inspirations', today];

    connection.query(sql, values, callback);
  },
};
