// 회원정보 수정하는 mypage
// req.cookies.Bearer

const {
  successResponse,
  errorResponse,
} = require('../../middlewares/responses/responseHandler');

let sampleResponse = {
  status: 200,
  message: 'Successfully read User Information!',
  data: {
    email: 'string',
    username: 'string',
    profileImage: 0,
    gender: '여성',
    birthday: '2000-01-01',
    region: 'Jeju',
  },
};
