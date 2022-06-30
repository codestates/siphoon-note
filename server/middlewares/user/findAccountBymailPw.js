const { decrypt } = require('../../middlewares/utils');
const { findAllUserInfoByEmail } = require('../../models');
const logger = require('../../middlewares/logger');

const findAccountBymailPw = async (email, password) => {
  try {
    // 1. email validation
    const account = findAllUserInfoByEmail(email);

    if (!account) {
      logger.error('email is not exist');
      return null;
    }

    // 2. password validation
    logger(account.password);
    const decryptedPasswd = decrypt(account.password);

    if (decryptedPasswd !== password) {
      logger.error('password is not correct');
      return null;
    }

    // 3. return account
    return account;
  } catch (error) {
    logger.error('findAccountBymailPw', error);
    error.status = 500;
    console.error(error);
    throw error;
  }
};

module.exports = { findAccountBymailPw };
