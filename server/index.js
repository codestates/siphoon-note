require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 80;

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Hello From Server!😀');
});

// 랜딩페이지 접속 에러 시 서버에서 처리
app.use((req, res, next) => {
  const err = new Error(`${req.method} ${req.url} Router Not Found`);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});
// 랜딩페이지 접속 에러 시 서버에서 처리

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`서버가 ${port}에서 실행 중!`);
});

module.exports = server;
