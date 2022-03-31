// SWAGGER API DOCUMENTATION: https://app.swaggerhub.com/apis/gomarag/Diary/1.0.2-oas3

const API_HOST = 'http://ec2-3-38-168-114.ap-northeast-2.compute.amazonaws.com';

module.exports = {
  //------------- 1. main -------------
  // GET /
  LOAD_LANDING: `${API_HOST}/api/v1/`,

  //----------- 2. essay -------------
  // POST /essays
  WRITE_ESSAY: `${API_HOST}/api/v1/essays`,

  // GET /essays
  READ_ESSAY_LIST: `${API_HOST}/api/v1/essays`,

  // GET /essays/:filter
  READ_ESSAY_LIST_BY_WORD: `${API_HOST}/api/v1/essays/:filter`,

  // PATCH /essays/:essayId
  DELETE_ESSAY_BY_ID: `${API_HOST}/api/v1/essays/:essayId`,

  // PUT /essays/:essayId
  UPDATE_ESSAY_BY_ID: `${API_HOST}/api/v1/essays/:essayId`,

  //---------- 3. user --------------
  // POST /signup
  SIGN_UP: `${API_HOST}/api/v1/signup`,

  // POST /signin
  SIGN_I: `${API_HOST}/api/v1/signin`,

  // DELETE /signout
  SIGN_OUT: `${API_HOST}/api/v1/signout`,

  // PATCH /userinfo
  UPDATE_USER_INFO: `${API_HOST}/api/v1/userinfo`,

  // DELTE /userinfo
  DELETE_ACCOUNT: `${API_HOST}/api/v1/userinfo`,

  //------------ 4. trash --------------
  // GET /trashes
  READ_TRASH_LIST: `${API_HOST}/api/v1/trashes`,

  // PATCH /trashes/:essayId
  RESTORE_ESSAY_BY_ID: `${API_HOST}/api/v1/trashes/:essayId`,

  // DELET
  DELETE_TRASH_BY_ID: `${API_HOST}/api/v1/trashes/:essayId`,
};
