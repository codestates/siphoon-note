// record 테이블에서 essayTotal 4명 뽑고 해당 유저 id 목록 반환
const getHighestTotalUserList = async limit => {
  const findAllEssayTotal = await Record.findAll({
    attributes: ['userId'],
    group: ['userId'],
    order: [['essayTotal', 'DESC']],
    limit,
  });

  const userIdList = findAllEssayTotal.map(({ userId }) => userId);

  return userIdList;
};

module.exports = getHighestTotalUserList;
