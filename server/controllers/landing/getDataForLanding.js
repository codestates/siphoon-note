const { getWeeklyUserList } = require('../controllers/users');
const { getPublicEssayList } = require('../controllers/essays');

const getDataForLanding = async (req, res) => {
  const [userList, publicEssayList] = await Promise.all([
    getWeeklyUserList(),
    getPublicEssayList(),
  ]);

  if (userList.length === 0 || publicEssayList.length === 0) {
    return res.status(404).json({
      status: 404,
      message: 'Cannot Find Resources',
    });
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully load landing page!',
    data: {
      userList,
      publicEssayList,
    },
  });
};

module.exports = getDataForLanding;
