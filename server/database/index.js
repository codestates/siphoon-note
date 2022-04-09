require('dotenv').config();
const mysql = require('mysql2');
const config = require('../config/config');
const env = process.env.NODE_ENV;

console.log(`🚀 Running in ${env} mode`);

const connection = mysql.createConnection(config[env]);

connection.connect(err => {
  if (err) {
    console.error('🚨 Mysql connection failed: ' + err.stack);
    throw err;
  }
  console.log('🌞 Connected!');
});

module.exports = connection;
