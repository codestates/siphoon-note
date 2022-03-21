import axios from 'axios';

export default function Landing() {
  //---------- 서버와 연결 확인용 코드 ----------
  // BASE_URL은 aws codeBuild에 환경변수로 등록된 서버의 엔드포인트
  axios
    .get(BASE_URL)
    .then(result => {
      console.log('😃 Server-Client Connection Success!', result);
    })
    .catch(error => {
      console.log('🤢 Server-Client Connection Failed!', error);
    });
  //---------- 서버와 연결 확인용 코드 ----------
  return <h1> Landing 페이지 입니다.</h1>;
}
