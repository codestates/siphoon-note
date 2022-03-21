/*
  [사용법]

  1)  API URL이 필요한 파일의 상단에 하단의 변수 `config` 선언
      const config = require(__dirname + /'config.js');

  2)  axios로 서버에 요청할 때 `config.[사용할 API_URL]` 로 사용 가능
      예) 1. 일기장 보기 요청 시 -> axios.get(config.API_GET_DIARIES)

*/
const API_VER = 'v1';
const API_HOST = 'https://ec2-3-36-87-95.ap-northeast-2.compute.amazonaws.com';

module.exports = {
  // 📝 Diaries
  // 1. 일기장 보기 (GET) + 마지막에 ${userId} 붙여서 사용
  API_GET_DIARIES: `${API_HOST}/api/${API_VER}/diaries/`,
  // 2. 새 일기 쓰기 (POST)
  API_WRITE_DIARIES: `${API_HOST}/api/${API_VER}/diaries`,
  // 3. 일기 삭제 (PATCH)
  API_DELETE_DIARIES: `${API_HOST}/api/${API_VER}/diaries`,
  // 4. 휴지통 확인 (GET) + 마지막에 ${userId} 붙여서 사용
  API_GET_TRASH: `${API_HOST}/api/${API_VER}/trash/`,
  // 5. 휴지통의 일기 복원 (PATCH)
  API_RESTORE_TRASH: `${API_HOST}/api/${API_VER}/trash`,
  // 6. 휴지통의 일기 영구 삭제  (DELETE)
  API_DELETE_TRASH: `${API_HOST}/api/${API_VER}/trash`,

  // 😎 Users
  // 1. 회원가입 (POST)
  API_USER_SIGNUP: `${API_HOST}/api/${API_VER}/users/signup`,
  // 2. 로그인 (POST)
  API_USER_SIGNIN: `${API_HOST}/api/${API_VER}/users/signin`,
  // 3. 로그아웃 (DELETE)
  API_USER_SIGNOUT: `${API_HOST}/api/${API_VER}/users/signout`,
  // 4. 회원 정보 수정(비밀번호, 유저 이름) (PATCH)
  API_USER_UPDATE: `${API_HOST}/api/${API_VER}/users/mypage`,
  // 5. 회원 탈퇴 (DELETE)
  API_DELETE_ACCOUNT: `${API_HOST}/api/${API_VER}/users/destroy`,
};
