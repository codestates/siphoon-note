const express = require('express');
const router = express.Router();

const {
  createEssay,
  deleteEssay,
  updateEssay,
  getEssayListByfilter,
} = require('../controllers/essays');

const getSpace = require('../controllers/space/getSpace');

router.get('/', getSpace);

router.post('/', createEssay);
router.get('/:filter', getEssayListByfilter);
router.put('/:essayId', updateEssay);
router.patch('/:essayId', deleteEssay);

module.exports = router;
