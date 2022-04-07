const { handleSuccess200 } = require('./handleSuccess200');
const { handleSuccess201 } = require('./handleSuccess201');
const { handleError400 } = require('./handleError400');
const { handleError401 } = require('./handleError401');
const { handleError404 } = require('./handleError404');
const { handleError500 } = require('./handleError500');

module.exports = {
  handleSuccess200,
  handleSuccess201,
  handleError400,
  handleError401,
  handleError404,
  handleError500,
};
