// 회원가입 폼에서 받은 정보로 user 객체 생성
// 이미 존재하는 이메일이면 에러 반환
// email, uuid, username, createAt으로 토큰 생성
// refreshToken, pw는 encrypt
// 나머지 정보는 그대로 db에 저장
// accessToken은 응답 쿠키에 담아서 반환

// 본인의 /essay 페이지로 리디렉션
