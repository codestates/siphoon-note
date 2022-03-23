/*
  [사용법]

  1)  API URL이 필요한 파일의 상단에 하단의 변수 `config` 선언
      const config = require(__dirname + /'config.js');

  2)  axios로 서버에 요청할 때 `config.[사용할 API_URL]` 로 사용 가능
      예) 1. 일기장 보기 요청 시 -> axios.get(config.API_GET_DIARIES)

*/
const API_VER = '1.0,0';
const API_HOST = 'http://ec2-3-38-168-114.ap-northeast-2.compute.amazonaws.com';

module.exports = {
  // 랜딩페이지
  GET_LANDING: `${API_HOST}/`,

  // 📝 Diaries
  // 1. 유저의 일기장 페이지 (GET)
  READ_ALL_DIARIES: `${API_HOST}/diaries/:uuid?offset=:offset&limit=:limit`,

  // 2. 개별 일기 카드 클릭 시 전체 일기 보기 (GET)
  READ_DIARY: `${API_HOST}/diaries/:uuid/:did`,

  // 2. 새 일기 쓰기 (POST)
  WRITE_DIARIES: `${API_HOST}/diaries/:uuid`,

  // 3. 일기 수정 (PUT): uuid를 제외한 모든 필드 replace
  UPDATE_DIARIES: `${API_HOST}/diaries/:uuid/:did`,

  // 4. 일기 휴지통으로 보내기 (PATCH): is_deleted 컬럼만 수정
  DIARY_TO_TRASH: `${API_HOST}/diaries/:uuid/:did`,

  // 4. 휴지통 확인 (GET)
  READ_ALL_TRASHES: `${API_HOST}/trash/:uuid?offset=:offset&limit=:limit`,

  // 5. 휴지통의 일기 복원 (PATCH): is_deleted 컬럼만 수정
  RESTORE_TRASH: `${API_HOST}/trash/:did`,

  // 6. 휴지통의 일기 영구 삭제  (DELETE)
  PERMANENT_DELETE: `${API_HOST}/trash/:did`,

  // 😎 Users
  // 1. 회원가입 (POST)
  SIGNUP: `${API_HOST}/users/signup`,

  // 2. 로그인 (POST)
  SIGNIN: `${API_HOST}/users/signin`,

  // 3. 로그아웃 (DELETE accessToken)
  SIGNOUT: `${API_HOST}/users/signout`,

  // 4. 회원 정보 수정(비밀번호, 유저 이름) (PATCH)
  UPDATE_USER: `${API_HOST}/users/:uuid`,

  // 5. 회원 탈퇴 (DELETE)
  DELETE_ACCOUNT: `${API_HOST}/users/:uuid`,

  // 💬 OAuth 2.0
  // 1. 인증 요청 (GET)
  OAUTH_REQUEST: `${API_HOST}/oauth/request`,

  // 2. 인증 확인 (POST)
  OAUTH_CONFIRM: `${API_HOST}/oauth/confirm`,

  // 3. 인증 취소 (DELETE)
  OAUTH_CANCEL: `${API_HOST}/oauth/cancel`,

  // 4. 인증 정보 삭제 (DELETE)
  OAUTH_DELETE: `${API_HOST}/oauth/delete`,

  // 5. 인증 정보 조회 (GET)
  OAUTH_INFO: `${API_HOST}/oauth/info`,

  // 6. 인증 정보 업데이트 (PATCH)
  OAUTH_UPDATE: `${API_HOST}/oauth/update`,
};
