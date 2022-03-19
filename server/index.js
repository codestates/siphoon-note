require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 5500);
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Hello From Server!😀');
});

const server = http.createServer(app);

server.listen(app.get('port'), () => {
  console.log(`서버가 ${app.get('port')}에서 실행 중!`);
});

module.exports = server;
