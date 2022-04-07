const express = require('express');
const router = express.Router();

const authCtrl = require('../controllers/auth');
const essayCtrl = require('../controllers/essays');
const userCtrl = require('../controllers/users');

router.get('/', (req, res) => {
  res.status(200).send('Hello From SSL Server!😀');
});

// 랜딩페이지 접속 에러 시 서버에서 처리
router.use((req, res, next) => {
  const err = new Error(`😈 ${req.method} ${req.url} Router Not Found`);
  err.status = 404;
  next(err);
});

router.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});

// apiTotal: 16
const BASE_URI = '/api/v1';

// main: 1
router.use(BASE_URI, require('./main'));

// essay: 5
router.use(`${BASE_URI}/essays`, require('./essays'));

//user: 6
router.post(`${BASE_URI}/signup`, authCtrl.signup);
router.post(`${BASE_URI}/signin`, authCtrl.signin);
router.delete(`${BASE_URI}/signout`, authCtrl.signout);
router.get(`${BASE_URI}/userinfo`, userCtrl.getUserInfo);
router.delete(`${BASE_URI}/userinfo`, userCtrl.deleteUserAccount);
router.patch(`${BASE_URI}/userinfo`, userCtrl.updateUserInfo);

// trash: 3
router.get(`${BASE_URI}/trashes`, essayCtrl.getTrashList);
router.patch(`${BASE_URI}/trashes/:essayId`, essayCtrl.updateEssay); // 휴지통의 글 복구
router.delete(`${BASE_URI}/trashes/:essayId`, essayCtrl.deleteEssay); // 휴지통의 글 영구 삭제

// tag: 1
router.get(`${BASE_URI}/tags`, essayCtrl.getTagList);

module.exports = router;
