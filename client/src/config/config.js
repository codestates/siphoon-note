// SWAGGER API DOCUMENTATION: https://app.swaggerhub.com/apis/gomarag/Diary/1.0.2-oas3

const SERVER_HOST =
  'https://ec2-13-231-136-118.ap-northeast-1.compute.amazonaws.com';

const apiUris = {
  //------------- 1. main -------------
  // GET /
  LOAD_LANDING: `${SERVER_HOST}`,

  //----------- 2. essay -------------
  // POST /essays
  WRITE_ESSAY: `${SERVER_HOST}/essays`,

  // GET /essays
  READ_ESSAY_LIST: `${SERVER_HOST}/essays`,

  // GET /essays/:filter    ! query params로 필터링할 키워드 전달 필요
  READ_ESSAY_LIST_BY_WORD: `${SERVER_HOST}/essays`,

  // PATCH /essays/:essayId   ! query params로 essayId 전달 필요
  DELETE_ESSAY_BY_ID: `${SERVER_HOST}/essays`,

  // PUT /essays/:essayId   ! query params로 essayId 전달 필요
  UPDATE_ESSAY_BY_ID: `${SERVER_HOST}/essays`,

  //---------- 3. user --------------
  // POST /signup
  SIGN_UP: `${SERVER_HOST}/signup`,

  // POST /signin
  SIGN_IN: `${SERVER_HOST}/signin`,

  // DELETE /signout
  SIGN_OUT: `${SERVER_HOST}/signout`,

  // GET /userinfo
  READ_USER_INFO: `${SERVER_HOST}/userinfo`,

  // PATCH /userinfo
  UPDATE_USER_INFO: `${SERVER_HOST}/userinfo`,

  // DELTE /userinfo
  DELETE_ACCOUNT: `${SERVER_HOST}/userinfo`,

  //------------ 4. trash --------------
  // GET /trashes
  READ_TRASH_LIST: `${SERVER_HOST}/trashes`,

  // PATCH /trashes/:essayId  ! query params로 essayId 전달 필요
  RESTORE_ESSAY_BY_ID: `${SERVER_HOST}/trashes`,

  // DELETE /trashes/:essayId ! query params로 essayId 전달 필요
  DELETE_TRASH_BY_ID: `${SERVER_HOST}/trashes`,

  //------------ 5. tag --------------
  // GET /tags
  READ_TAG_LIST: `${SERVER_HOST}/tags`,
};

export default apiUris;
