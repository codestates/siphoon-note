const express = require('express');
const router = express.Router();

const {
  createUser,
  getUser,
  deleteUser,
  updateUser,
} = require('../controllers/users');

router.post('/signup', createUser);
// !회원정보 조회 요청이 따로 있었는지 확인
router.get('/userinfo', getUser);
router.patch('/userinfo', updateUser);
router.delete('/userinfo', deleteUser);

module.exports = router;
