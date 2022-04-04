const express = require('express');
const router = express.Router();

const {
  createEssay,
  getEssayList,
  getEssayListByfilter,
  updateEssay,
  deleteEssay,
} = require('../controllers/essays');

// 로그인 후 /essays는 token 필요

router.post('/', createEssay);
router.get('/', getEssayList);
router.get('/:filter', getEssayListByfilter);
router.put('/:essyId', updateEssay);
router.patch('/:essayId', deleteEssay);

// ! PATCH trashes/:essayId
// ! DELETE trashes/:essayId

module.exports = router;
