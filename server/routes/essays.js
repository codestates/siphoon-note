const express = require('express');
const router = express.Router();

const {
  createEssay,
  deleteEssay,
  updateEssay,
  getEssayList,
  getEssayListByfilter,
} = require('../controllers/essays');

router.post('/', createEssay);
router.get('/', getEssayList);
router.get('/:filter', getEssayListByfilter);
router.put('/:essayId', updateEssay);
router.patch('/:essayId', deleteEssay);

module.exports = router;
