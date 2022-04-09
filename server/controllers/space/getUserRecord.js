const {
  countEssayTotal,
  getCurrentStreaks,
  getLongestStreaks,
  countUsageDate,
} = require('../../models');

const getUserRecord = async (userId = 0, createdAt = '') => {
  const [currentStreaks, longestStreaks, usageDate, totalEssay] =
    await Promise.all([
      //-- sql 아닌 애플리케이션 코드가 필요할 것 같음
      getCurrentStreaks(userId),
      getLongestStreaks(userId),
      //--
      countUsageDate(userId, createdAt),
      countEssayTotal(userId),
    ]);

  return {
    currentStreaks,
    longestStreaks,
    usageDate,
    totalEssay,
  };
};

module.exports = getUserRecord;
