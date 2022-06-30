const router = require('express').Router();
const {
  deleteUserAccount,
  getUserUserInfo,
  updateUserInfo,
} = require('../controllers/users');

router.get('/userinfo', getUserUserInfo);
router.patch('/userinfo', updateUserInfo);
router.delete('/userinfo', deleteUserAccount);

module.exports = router;
