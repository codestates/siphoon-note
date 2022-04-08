// essay 테이블에서 is_public:true인 랜덤한 글 16개 추출
// "publicEssayList": [
//   {
//     "id": 0,
//     "content": "string",
//     "writer": "작성자의 username",
//     "isPublic": true,
//     "createdAt": "2022-04-01"
//   }
// ]

const getPublicEssayList = async () => {
  const findAllPublicEssays = await Essay.findAll({
    where: {
      isPublic: true,
    },
    limit: 16,
    order: [['createdAt', 'DESC']],
  });

  return findAllPublicEssays;
};

module.exports = getPublicEssayList;
