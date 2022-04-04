const { getRefreshToken } = require('./getRefreshToken');
const { isValidToken } = require('./isValidToken');
const { returnRegisterToken } = require('./returnRegisterToken');

module.exports = {
  getRefreshToken,
  isValidToken,
  returnRegisterToken,
};
