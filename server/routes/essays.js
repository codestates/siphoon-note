const express = require('express');
const router = express.Router();

const {
  createEssay,
  updateEssay,
  getEssayListByfilter,
} = require('../controllers/essays');
const spaceCtrl = require('../controllers/space');

router.get('/', spaceCtrl.getMySpace);

router.post('/', createEssay);
router.get('/:filter', getEssayListByfilter);
router.patch('/:essayId', updateEssay);

module.exports = router;
