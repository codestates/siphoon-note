const express = require('express');
const router = express.Router();

const { getWeeklyUserList } = require('../controllers/users');
const { getPublicEssayList } = require('../controllers/essays');

router.get('/', getWeeklyUserList, getPublicEssayList);

module.exports = router;
