require('dotenv').config();
const mysql = require('mysql2');
const config = require('../config/config');
const logger = require('../middlewares/logger');
const env = process.env.NODE_ENV;

logger.info(`Database:index called in ${env}`);

const connection = mysql.createConnection(config[env]);

connection.connect(err => {
  if (err) {
    logger.error(
      `Database: Error connecting to database 🤢 ${err.stack} ${err.message}`
    );
    throw err;
  }
  logger.info(`Database: ${config[env].database} Connected to database 😃`);
});

module.exports = connection;
