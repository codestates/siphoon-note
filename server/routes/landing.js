const router = require('express').Router();
const landingCtrl = require('../controllers/landing');

router.get('/', landingCtrl.getLanding);

module.exports = router;
