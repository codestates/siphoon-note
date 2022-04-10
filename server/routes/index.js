const express = require('express');
const router = express.Router();
const logger = require('../middlewares/logger');

const authRouter = require('./auth');
const essayRouter = require('./essays');

// const essayCtrl = require('../controllers/essays');
// const userCtrl = require('../controllers/users');

router.get('/', (req, res) => {
  logger.info(`Index Router called ${req.method} ${req.url}`);
  res.status(200).send('Hello From SSL Server!😀');
});

// apiTotal: 16

// main: 1
// router.use(BASE_URI, require('./landing'));

// essay: 5
router.use(`/essays`, essayRouter);

//user: 6

router.post(`/signup`, authRouter.signup);
router.post(`/signin`, authRouter.signin);
// router.delete(`/signout`, authRouter.signout);
// router.post(`/signup`, authCtrl.signup);
// router.post(`/signin`, authCtrl.signin);
// router.delete(`/signout`, authCtrl.signout);
// router.get(`/userinfo`, userCtrl.getUserInfo);
// router.delete(`/userinfo`, userCtrl.deleteUserAccount);
// router.patch(`/userinfo`, userCtrl.updateUserInfo);

// trash: 3
// router.get(`/trashes`, essayCtrl.getTrashList);
// router.patch(`/trashes/:essayId`, essayCtrl.updateEssay);
// router.delete(`/trashes/:essayId`, essayCtrl.deleteEssay);

// tag: 1
// router.get(`/tags`, essayCtrl.getTagList);

// 랜딩페이지 접속 에러 시 서버에서 처리
router.use((req, res, next) => {
  const err = new Error(`😈 ${req.method} ${req.url} Router Not Found 😈`);
  logger.error(err);
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

module.exports = router;
