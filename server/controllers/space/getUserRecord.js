const {
  countEssayTotal,
  getCurrentStreaks,
  getLongestStreaks,
  countUsageDate,
} = require('../../models/model.records');

const callback = (error, result) => {
  if (error) {
    logger.error(error);
    throw error;
  }
  logger.debug('Result is', result);
  return result;
};

const getUserRecord = async (userId = 0) => {
  const [currentStreaks, longestStreaks, usageDate, totalEssay] =
    await Promise.all([
      getCurrentStreaks(userId, callback),
      getLongestStreaks(userId, callback),
      countUsageDate(userId, callback),
      countEssayTotal(userId, callback),
    ]);

  return {
    currentStreaks,
    longestStreaks,
    usageDate,
    totalEssay,
  };
};

module.exports = { getUserRecord };
