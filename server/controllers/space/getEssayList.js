// essayList: [
//   {
//     essayId: 0,
//     content: 'string',
//     tags: ['string'],
//     isDeleted: false,
//     isPublic: false,
//     createdAt: '2022-04-01',
//     updatedAt: '2022-04-01',
//   },
const {
  findAllEssayIdByUserId,
  findAllEssaysByEssayId,
  findAllTagsByEssayId,
} = require('../../models');

const getEssayList = async (userId = 0, limit = 20, offset = 0) => {
  const essayIdList = findAllEssayIdByUserId(userId, limit, offset);

  const essayList = await Promise.all(
    // 글 아이디 목록을 순회하면서 각 글의 데이터 조회
    essayIdList.map(essayId => {
      const essay = findAllEssaysByEssayId(essayId);
      // findAllEssayIdByUserId에서 구한 essayId로 각 글의 태그 목록을 반복적으로 조회
      const tags = findAllTagsByEssayId(essayId);

      return { ...essay, tags };
    })
  );
  return essayList;
};

module.exports = { getEssayList };
