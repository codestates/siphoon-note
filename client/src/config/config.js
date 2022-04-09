// SWAGGER API DOCUMENTATION: https://app.swaggerhub.com/apis/gomarag/Diary/1.0.2-oas3
/**
 *  해당 컨피그 파일은 익명의 객체를 export 하고 있습니다.
 *  객체는 아래의 변수 목록을 '키-값'의 형태로 갖습니다.
 *  따라서 클라이언트 컴포넌트에서 서버에 요청을 보내야 하는 경우,
 *  객체의 키를 이용해서 서버에 요청을 보내면 됩니다.
 *
 *  예) 랜딩페이지 로딩 시 서버에 '랭킹 유저 목록'과 '퍼블리한 글 목록'을 받아야 하는 경우
 *  해당 요청이 필요한 컴포넌트 상단에서 '사용할 변수'만 import 해옴.
 *
 *  import { LOAD_LANDING } from '[config를 사용하는 경로]/config.js';
 *  ...
 *  axios.get(LOAD_LANDING)
 *  ...
 *
 *  예) 작성한 글 내용의 수정을 위한 요청
 *  import { UPDATE_ESSAY_BY_ID } from '[config를 사용하는 경로]/config.js';
 *  ...
 *  axios.put(
 *    `UPDATE_ESSAY_BY_ID/${수정할 글의 id}`,
 *    { 요청 본문 }
 *  )
 *  ...
 */

const SERVER_HOST =
  'https://ec2-13-231-136-118.ap-northeast-1.compute.amazonaws.com';

const apiUris = {
  // //------------- 1. main -------------
  // // GET /
  // LOAD_LANDING: `${SERVER_HOST}`,

  // //----------- 2. essay -------------
  // // POST /essays
  // WRITE_ESSAY: `${SERVER_HOST}/essays`,

  // // GET /essays
  // READ_ESSAY_LIST: `${SERVER_HOST}/essays`,

  // // GET /essays/:filter    ! query params로 필터링할 키워드 전달 필요
  // READ_ESSAY_LIST_BY_WORD: `${SERVER_HOST}/essays`,

  // // PATCH /essays/:essayId   ! query params로 essayId 전달 필요
  // DELETE_ESSAY_BY_ID: `${SERVER_HOST}/essays`,

  // // PUT /essays/:essayId   ! query params로 essayId 전달 필요
  // UPDATE_ESSAY_BY_ID: `${SERVER_HOST}/essays`,

  // //---------- 3. user --------------
  // // POST /signup
  // SIGN_UP: `${SERVER_HOST}/signup`,

  // // POST /signin
  // SIGN_IN: `${SERVER_HOST}/signin`,

  // // DELETE /signout
  // SIGN_OUT: `${SERVER_HOST}/signout`,

  // // GET /userinfo
  // READ_USER_INFO: `${SERVER_HOST}/userinfo`,

  // // PATCH /userinfo
  // UPDATE_USER_INFO: `${SERVER_HOST}/userinfo`,

  // // DELTE /userinfo
  // DELETE_ACCOUNT: `${SERVER_HOST}/userinfo`,

  // //------------ 4. trash --------------
  // // GET /trashes
  // READ_TRASH_LIST: `${SERVER_HOST}/trashes`,

  // // PATCH /trashes/:essayId  ! query params로 essayId 전달 필요
  // RESTORE_ESSAY_BY_ID: `${SERVER_HOST}/trashes`,

  // // DELETE /trashes/:essayId ! query params로 essayId 전달 필요
  // DELETE_TRASH_BY_ID: `${SERVER_HOST}/trashes`,

  // //------------ 5. tag --------------
  // // GET /tags
  // READ_TAG_LIST: `${SERVER_HOST}/tags`,
  //------------- 1. main -------------
  // GET /
  LOAD_LANDING: `${SERVER_HOST}/api/v1`,

  //----------- 2. essay -------------
  // POST /essays
  WRITE_ESSAY: `${SERVER_HOST}/api/v1/essays`,

  // GET /essays
  READ_ESSAY_LIST: `${SERVER_HOST}/api/v1/essays`,

  // GET /essays/:filter    ! query params로 필터링할 키워드 전달 필요
  READ_ESSAY_LIST_BY_WORD: `${SERVER_HOST}/api/v1/essays`,

  // PATCH /essays/:essayId   ! query params로 essayId 전달 필요
  DELETE_ESSAY_BY_ID: `${SERVER_HOST}/api/v1/essays`,

  // PUT /essays/:essayId   ! query params로 essayId 전달 필요
  UPDATE_ESSAY_BY_ID: `${SERVER_HOST}/api/v1/essays`,

  //---------- 3. user --------------
  // POST /signup
  SIGN_UP: `${SERVER_HOST}/api/v1/signup`,

  // POST /signin
  SIGN_IN: `${SERVER_HOST}/api/v1/signin`,

  // DELETE /signout
  SIGN_OUT: `${SERVER_HOST}/api/v1/signout`,

  // GET /userinfo
  READ_USER_INFO: `${SERVER_HOST}/api/v1/userinfo`,

  // PATCH /userinfo
  UPDATE_USER_INFO: `${SERVER_HOST}/api/v1/userinfo`,

  // DELTE /userinfo
  DELETE_ACCOUNT: `${SERVER_HOST}/api/v1/userinfo`,

  //------------ 4. trash --------------
  // GET /trashes
  READ_TRASH_LIST: `${SERVER_HOST}/api/v1/trashes`,

  // PATCH /trashes/:essayId  ! query params로 essayId 전달 필요
  RESTORE_ESSAY_BY_ID: `${SERVER_HOST}/api/v1/trashes`,

  // DELETE /trashes/:essayId ! query params로 essayId 전달 필요
  DELETE_TRASH_BY_ID: `${SERVER_HOST}/api/v1/trashes`,

  //------------ 5. tag --------------
  // GET /tags
  READ_TAG_LIST: `${SERVER_HOST}/api/v1/tags`,
};

export default apiUris;
