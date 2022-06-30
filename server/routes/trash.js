const router = require('express').Router();
const { updateEssay, deleteEssay } = require('../controllers/essays');
const { getTrashList } = require('../controllers/space');

router.get('/', getTrashList);
router.patch('/:essayId', updateEssay);
router.delete('/:essayId', deleteEssay);

module.exports = router;
