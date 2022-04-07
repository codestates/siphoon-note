const express = require('express');
const router = express.Router();
//------- 기존 코드 -> router.get의 인자로 컨트롤러 2개를 매치하면 문제가 있나?
// const { getWeeklyUserList } = require('../controllers/users');
// const { getPublicEssayList } = require('../controllers/essays');
// router.get('/', getWeeklyUserList, getPublicEssayList);
//------- 기존 코드
const getDataForLanding = require('../controllers/landing/getDataForLanding');

router.get('/', getDataForLanding);

module.exports = router;
