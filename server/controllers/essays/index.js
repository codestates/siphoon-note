const { createEssay } = require('./createEssay');
const { updateEssay } = require('./updateEssay');
const { deleteEssay } = require('./deleteEssay');
const { getEssayList } = require('./getEssayList');
const { getEssayListByFilter } = require('./getEssayListByFilter');
const { getPublicEssayList } = require('./getPublicEssayList');

module.exports = {
  createEssay,
  getEssayList,
  // 글 수정: 공개여부, 내용 수정, 휴지통으로 보낼지 여부
  updateEssay,
  // 글 삭제: 휴지통의 글 삭제
  deleteEssay,
  getEssayListByFilter,
  getPublicEssayList,
};
