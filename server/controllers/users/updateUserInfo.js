const {
  successResponse,
  errorResponse,
} = require('../../middlewares/responses/responseHandler');

// req.cookies.Bearer
const { getUserEmailFromToken } = require('../../middlewares/user');
const { decodeToken } = require('../../middlewares/auth');
const { decrypt } = require('../../middlewares/utils');

let sampleResponse = {
  password: 'newpassword',
  username: 'marag',
  gender: 'prefer not to say',
  region: 'Jeju',
  birthday: '2022-04-01',
};
