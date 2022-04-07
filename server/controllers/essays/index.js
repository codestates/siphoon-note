const { createEssay } = require('./createEssay');
const { deleteEssay } = require('./deleteEssay');
const { getEssayList } = require('./getEssayList');
const { getEssayListByFilter } = require('./getEssayListByFilter');
const { getPublicEssayList } = require('./getPublicEssayList');
const { getTagList } = require('./getTagList');
const { getTrashList } = require('./getTrashList');
const { updateEssay } = require('./updateEssay');

module.exports = {
  createEssay,
  deleteEssay,
  getEssayList,
  getEssayListByFilter,
  getPublicEssayList,
  getTagList,
  getTrashList,
  updateEssay,
};
