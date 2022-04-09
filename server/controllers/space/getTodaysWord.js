const { findWord } = require('../../models');

const getTodaysWord = async (today = 0) => {
  const todaysWord = await findWord(today);

  if (!todaysWord) {
    return 'Happy';
  } else {
    return todaysWord;
  }
};

module.exports = getTodaysWord;
