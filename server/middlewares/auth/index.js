const { createAccessToken } = require('./createAccessToken');
const { createRefreshToken } = require('./createRefreshToken');
const { destroyToken } = require('./destroyToken');
const { isTokenInCookies } = require('./hasTokenInCookies');
const { setTokenToCookies } = require('./setTokenToCookies');
const { tokenValidator } = require('./tokenValidator');

module.exports = {
  createAccessToken,
  createRefreshToken,
  destroyToken,
  isTokenInCookies,
  setTokenToCookies,
  tokenValidator,
};
