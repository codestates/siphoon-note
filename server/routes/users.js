const express = require('express');
const router = express.Router();

const {
  createUserAccount,
  deleteUserAccount,
  getUserUserInfo,
  updateUserInfo,
} = require('../controllers/users');

const { login, logout } = require('../controllers/auth');

// index.js에서 컨트롤러 메소드로 바로 매칭했기 때문에 현재 이 모듈은 사용되지 않음
router.post('/signup', createUserAccount);
router.post('/signin', login);
router.post('/signout', logout);
router.get('/userinfo', getUserUserInfo);
router.patch('/userinfo', updateUserInfo);
router.delete('/userinfo', deleteUserAccount);

module.exports = router;
