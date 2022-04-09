const { findAllCreatedAt } = require('../../models');

// markList: ['2023-09-06'],
const getMarkList = async (userId = 0) => {
  const markList = await findAllCreatedAt(userId);

  if (!markList) {
    return [];
  } else {
    return markList;
  }
};

module.exports = getMarkList;
