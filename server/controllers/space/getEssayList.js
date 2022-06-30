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

const { findAllUserInfoByEmail } = require('../../models/model.users');
const { findAllEssaysByEssayId } = require('../../models/model.essays');
const { findAllTagsByEssayId } = require('../../models/model.tags');
const logger = require('../../middlewares/logger');

const getEssayList = async (userId = 0, limit = 20, offset = 0) => {
  const essayIdList = findAllUserInfoByEmail(
    userId,
    limit,
    offset,
    (err, result) => {
      if (err) {
        return err;
      } else {
        return result;
      }
    }
  );

  logger.debug('essayIdList is', essayIdList);

  const essayList = await Promise.all([
    ...essayIdList.map(essayId => findAllEssaysByEssayId(essayId, callback)),
    ...essayIdList.map(essayId => findAllTagsByEssayId(essayId, callback)),
  ]);
  return essayList;
};

module.exports = { getEssayList };
