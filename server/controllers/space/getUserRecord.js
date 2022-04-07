const {
  getCurrentStreaks,
  getLongestStreaks,
  getUsageDate,
  getTotalEssay,
} = require('../record');

const getUserRecord = async (email = '') => {
  const [currentStreaks, longestStreaks, usageDate, totalEssay] =
    await Promise.all([
      getCurrentStreaks(email),
      getLongestStreaks(email),
      getUsageDate(email),
      getTotalEssay(email),
    ]);

  return {
    currentStreaks,
    longestStreaks,
    usageDate,
    totalEssay,
  };
};

module.exports = getUserRecord;
