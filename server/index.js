require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const https = require('https');
const http = require('http');
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
    origin: process.env.ORIGIN_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'OPTIONS', 'DELETE'],
  })
);

app.use(require('./routes'));

const key = fs.readFileSync(path.join(__dirname, 'cert', 'key.pem'));
const cert = fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'));

let server;

if (key && cert) {
  const credentials = { key, cert };

  server = https.createServer(credentials, app);

  server.listen(port, () => {
    console.log(`HTTPS Server running on port ${port}`);
  });
} else {
  server = http.createServer(app);

  server.listen(port, () => {
    console.log(`HTTP Server running on port ${port}`);
  });
}

module.exports = server;
