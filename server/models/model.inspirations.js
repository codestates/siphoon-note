const connection = require('../database');

module.exports = {
  // 1. get today's word
  getInspiration: cb => {
    const sql = `SELECT ?? FROM ?? WHERE id = ?`;
    const values = ['word', 'inspirations', 'day(current_date())'];

    connection.query(sql, values, (err, word) => {
      callback(err, word);
    });
  },
};
