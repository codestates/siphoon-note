const { createAccessToken } = require('./createAccessToken');
const { createRefreshToken } = require('./createRefreshToken');
const { decodeToken } = require('./decodeToken');
const { destroyToken } = require('./destroyToken');
const { getRefreshToken } = require('./getRefreshToken');
const { tokenValidator } = require('./tokenValidator');

module.exports = {
  createAccessToken,
  createRefreshToken,
  decodeToken,
  destroyToken,
  getRefreshToken,
  tokenValidator,
};
