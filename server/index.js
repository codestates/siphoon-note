require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const https = require('https');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

const port = process.env.HTTPS_PORT || 5500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: '*',
    // origin: 'http://dev-diary-bucket.s3-website.ap-northeast-2.amazonaws.com',
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'OPTIONS', 'DELETE'],
  })
);

app.use(require('./routes'));

const credentials = {
  key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
};

const secureServer = https.createServer(credentials, app);

secureServer.listen(port, () => {
  console.log(`Secure Server on ${port}!`);
});

module.exports = secureServer;
