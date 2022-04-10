const connection = require('../database');
const logger = require('../middlewares/logger');

const findUserByEmail = email => {
  connection.query(
    `SELECT * FROM users WHERE email = ${email}`,
    (err, result) => {
      if (err) {
        logger.error('userInfo1', err);
        throw err;
      } else {
        logger.info('result1', result);
        return result;
      }
    }
  );
};

const userInfo2 = email => {
  connection.query(
    `SELECT * FROM users WHERE email = ${email}`,
    (err, result) => {
      if (err) {
        logger.error('userInfo2', err);
        return null;
      } else {
        logger.info('result2', result);
        return result;
      }
    }
  );
};

module.exports = {
  findUserByEmail,
  userInfo2,
};

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

// module.exports = {
//   //--- 1. create new user
//   createAccouont: (
//     email = '',
//     username = '',
//     profileImage = 0,
//     refreshToken = '',
//     password = '',
//     gender = '',
//     birthday = '',
//     region = ''
//   ) => {
//     const sql = `
//       INSERT INTO ??
//         (
//           refresh_token,
//           email,
//           name,
//           password,
//           gender,
//           birthday,
//           region,
//           profile_image
//         )
//       VALUES
//         ( ?, ?, ?, ?, ?, ?, ?, ? )
//     `;

//     const values = [
//       'users',
//       email,
//       username,
//       profileImage,
//       refreshToken,
//       password,
//       gender,
//       birthday,
//       region,
//     ];

//     connection.query(sql, values, callback);
//   },

//   //--- 2. find email exist
//   findEmail: (email = '') => {
//     const sql = `SELECT ? FROM ?? WHERE ?? = ?`;
//     const value = ['email', 'users', 'email', email];

//     connection.query(sql, value, callback);
//   },

//   //--- 3. find all userinfo by email
//   findAllUserInfoByEmail: email => {
//     const sql = `SELECT * FROM users WHERE email = ?`;
//     const values = [email];

//     connection.query(sql, value, (error, result) => {
//       if (error) {
//         throw error;
//       }
//       return result;
//     });
//   },
// };
