const { createEssay } = require('./createEssay');
const { deleteEssay } = require('./deleteEssay');
const { getEssayListByFilter } = require('./getEssayListByFilter');
const { getPublicEssayList } = require('./getPublicEssayList');
const { getTrashList } = require('./getTrashList');
const { updateEssay } = require('./updateEssay');

module.exports = {
  createEssay,
  deleteEssay,
  getEssayListByFilter,
  getPublicEssayList,
  getTrashList,
  updateEssay,
};
