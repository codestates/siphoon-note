const express = require('express');
const router = express.Router();
const logger = require('../middlewares/logger');

// # routes 폴더 내의 각 라우터 로딩
// const landingRouter = require('./landing');
const authRouter = require('./auth');
// const essayRouter = require('./essay');
// const userRouter = require('./user');
// const trashRouter = require('./trash');
// const tagRouter = require('./tag');

// 1. landing
// router.get('/', landingRouter);

// 2. auth: signin, signup, signout
router.use(`/signup`, authRouter.signup);
router.use(`/signin`, authRouter.signin);
// // router.use(`/signout`, authRouter.signout);

// 3. essay
// router.use(`/essays`, essayRouter);

// // 4. trash
// router.use(`/trashes`, trashRouter);

// // 5. user
// router.use(`/usersinfo`, userRouter);

// // 6. tag
// router.use(`/tags`, tagRouter);

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
