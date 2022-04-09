const { decrypt } = require('../../middlewares/utils');
const { findAllUserInfoByEmail } = require('../../models');

const findAccountBymailPw = async (email, password) => {
  try {
    // 1. email validation
    const account = await findAllUserInfoByEmail(email);
    if (!account) {
      return null;
    }

    // 2. password validation
    const decryptedPasswd = decrypt(account.password);

    if (decryptedPasswd !== password) {
      return null;
    }

    // 3. return account
    return account;
  } catch (error) {
    error.status = 500;
    console.error(error);
    throw error;
  }
};

module.exports = findAccountBymailPw;
