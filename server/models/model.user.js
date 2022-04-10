const connection = require('../database');
const logger = require('../middlewares/logger');

const useSchema = connection.query('USE essay');
logger.info('useSchema', useSchema);

connection.query(
  'SELECT * FROM users WHERE email = "avie@stanford.edu"',
  (err, result) => {
    if (err) throw err;
    logger.info('result', result);
  }
);

logger.info('called model.users');

// const callback = (error, result) => {
//   if (error) {
//     logger.error(
//       `Failed to Excute Query:\n code: ${error.code} \n message: ${error.message}`
//     );
//     throw error;
//   }
//   logger.debug(`Success Query Result: ${result}`);
//   return result;
// };

module.exports = {
  //--- 1. create new user
  createAccouont: (
    email = '',
    username = '',
    profileImage = 0,
    refreshToken = '',
    password = '',
    gender = '',
    birthday = '',
    region = ''
  ) => {
    const sql = `
      INSERT INTO ??
        (
          refresh_token,
          email,
          name,
          password,
          gender,
          birthday,
          region,
          profile_image
        )
      VALUES
        ( ?, ?, ?, ?, ?, ?, ?, ? )
    `;

    const values = [
      'users',
      email,
      username,
      profileImage,
      refreshToken,
      password,
      gender,
      birthday,
      region,
    ];

    connection.query(sql, values, callback);
  },

  //--- 2. find email exist
  findEmail: (email = '') => {
    const sql = `SELECT ? FROM ?? WHERE ?? = ?`;
    const value = ['email', 'users', 'email', email];

    connection.query(sql, value, callback);
  },

  //--- 3. find all userinfo by email
  findAllUserInfoByEmail: (email = '') => {
    logger.debug('✔ findAllUserInfoByEmail by', email);
    const sql = `SELECT * FROM essays.users WHERE email = ?`;
    logger.debug(sql, email);
    const value = email;
    logger.debug('value', value);

    logger.info('called model.users.findAllUserInfoByEmail');
    connection.query(sql, value, (error, result) => {
      logger.debug(`err:${error} res:${result}`);
      if (error) {
        logger.error(
          `Failed to Excute Query:\n code: ${error.code} \n message: ${error.message}`
        );
        throw error;
      }
      logger.debug(`Success Query Result: ${result}`);
      return result;
    });
  },
};
