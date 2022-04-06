const express = require('express');
const router = express.Router();

const {
  createUserAccount,
  deleteUserAccount,
  getUserUserInfo,
  updateUserInfo,
} = require('../controllers/users');

// ! /routes/index.js에서 user.CRUD 경로가 설정되어 있어서
// 이대로 사용하면 경로 중복 예외가 생김
// 수정 예정
router.post('/signup', createUserAccount);
router.get('/userinfo', getUserUserInfo);
router.patch('/userinfo', updateUserInfo);
router.delete('/userinfo', deleteUserAccount);

module.exports = router;
