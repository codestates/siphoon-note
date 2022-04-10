const router = require('express').Router();
const {
  getTrashList,
  updateEssay,
  deleteEssay,
} = require('../controllers/essays');

router.get('/', getTrashList);
router.patch('/:essayId', updateEssay); // 삭제 글 복구: 휴지통 => 출력 카드
router.delete('/:essayId', deleteEssay);

module.exports = router;
