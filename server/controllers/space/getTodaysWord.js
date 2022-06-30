const { findWord } = require('../../models/model.inspirations');
const logger = require('../../middlewares/logger');

const getTodaysWord = async cb => {
  findWord((err, word) => {
    if (err) {
      logger.error('getTodaysWord error is', err);
      return cb(err);
    }
    return cb(null, word);
  });
};

module.exports = { getTodaysWord };
