const { findAllCreatedAt } = require('../../models/model.essays');
const logger = require('../../middlewares/logger');

const getMarkList = async (userId = 0) => {
  findAllCreatedAt(userId, (err, result) => {
    if (err) {
      logger.error(err);
      return err;
    } else {
      logger.debug('Result is', result);
      return result;
    }
  });
};

module.exports = { getMarkList };
