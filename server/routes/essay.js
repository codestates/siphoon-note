const router = require('express').Router();
const { getMySpace } = require('../controllers/space');
// const {
//   createEssay,
//   updateEssay,
//   getEssayListByfilter,
// } = require('../controllers/essays');

// router.post('/', createEssay);
router.get('/', getMySpace);
// router.get('/:filter', getEssayListByfilter);
// router.patch('/:essayId', updateEssay);

module.exports = router;
