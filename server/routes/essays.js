const express = require('express');
const router = express.Router();

const {
  createEssay,
  deleteEssay,
  updateEssay,
  getEssayListByfilter,
} = require('../controllers/essays');

const { spaceCtrl } = require('../controllers/space');

router.get('/', spaceCtrl.getSpace);

router.post('/', createEssay);
router.get('/:filter', getEssayListByfilter);
router.patch('/:essayId', updateEssay);

module.exports = router;
