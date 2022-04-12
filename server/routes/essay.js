const router = require('express').Router();
const { getMySpace, getEssayListByfilter } = require('../controllers/space');
const { createEssay, updateEssay } = require('../controllers/essays');

router.get('/', getMySpace);
router.post('/', createEssay);
router.patch('/:essayId', updateEssay);
router.get('/:filter', getEssayListByfilter);

module.exports = router;
