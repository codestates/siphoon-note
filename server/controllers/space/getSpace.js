// const { getEssayList } = require('../controllers/essays');
// 1. userInfo
// 2. EssayList
// 3. todaysWord
// 4. record
// 5. markList
const getSpace = async (req, res) => {
  console.log('===', '스페이스 컨트롤러 호출 성공');
  res.send('😀');
};

module.exports = getSpace;
