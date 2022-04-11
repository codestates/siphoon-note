const connection = require('../database');

module.exports = {
  //--- 1. create new user
  // createAccouont: (
  //   email = '',
  //   username = '',
  //   profileImage = 0,
  //   refreshToken = '',
  //   password = '',
  //   gender = '',
  //   birthday = '',
  //   region = ''
  // ) => {
  //   const sql = `
  //     INSERT INTO ??
  //       (
  //         refresh_token,
  //         email,
  //         name,
  //         password,
  //         gender,
  //         birthday,
  //         region,
  //         profile_image
  //       )
  //     VALUES
  //       ( ?, ?, ?, ?, ?, ?, ?, ? )
  //   `;

  //   const values = [
  //     'users',
  //     email,
  //     username,
  //     profileImage,
  //     refreshToken,
  //     password,
  //     gender,
  //     birthday,
  //     region,
  //   ];

  //   connection.query(sql, values, callback);
  // },

  // //--- 2. find email exist
  // findEmail: (email = '') => {
  //   const sql = `SELECT ? FROM ?? WHERE ?? = ?`;
  //   const value = ['email', 'users', 'email', email];

  //   connection.query(sql, value, callback);
  // },

  //--- 3. find all userinfo by email
  findAllUserInfoByEmail: (email = '', callback) => {
    const sql = `SELECT * FROM ?? WHERE ?? = ?`;
    const values = ['users', 'email', email];

    connection.query(sql, values, (err, result) => {
      callback(err, result);
    });
  },
};
