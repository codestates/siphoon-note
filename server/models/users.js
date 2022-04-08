const connection = require('../database');

const callback = (error, result) => {
  if (error) {
    console.error(error);
    throw error;
  }
  return result;
};

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

  //--- 2. find email
  findEmail: (email = '') => {
    const sql = `SELECT ? FROM ?? WHERE ?? = ?`;
    const value = ['email', 'users', 'email', email];

    connection.query(sql, value, callback);
  },
};
