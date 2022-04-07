// const { getWeeklyUserList } = require('../controllers/users');
// const { getPublicEssayList } = require('../controllers/essays');

const getDataForLanding = async (req, res) => {
  console.log('===', '랜딩컨트롤러 호출 성공');
  res.send('😀');
};

module.exports = getDataForLanding;
