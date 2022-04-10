const express = require('express');
const router = express.Router();
const logger = require('../middlewares/logger');

logger.info('Essay Router called');

// const {
//   createEssay,
//   updateEssay,
//   getEssayListByfilter,
// } = require('../controllers/essays');
const spaceCtrl = require('../controllers/space');

router.get('/', spaceCtrl.getMySpace);

// router.post('/', createEssay);
// router.get('/:filter', getEssayListByfilter);
// router.patch('/:essayId', updateEssay);

module.exports = router;
