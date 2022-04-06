const express = require('express');
const router = express.Router();

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

// ! user 관련 경로가 /users로 시작되지 않는데 하나씩 설정해야 하는지?

const BASE_URI = '/api/v1';

router.use(BASE_URI, require('./main'));

router.use(`${BASE_URI}/signup`, require('./users'));
router.use(`${BASE_URI}/signin`, require('./users'));
router.use(`${BASE_URI}/signout`, require('./users'));
router.use(`${BASE_URI}/userinfo`, require('./users'));

router.use(`${BASE_URI}/essays`, require('./essays'));
router.use(`${BASE_URI}/trashes`, require('./essays'));
router.use(`${BASE_URI}/tags`, require('./essays'));

module.exports = router;
