import axios from 'axios';

export default function Landing() {
  //---------- 서버와 연결 확인용 코드 ----------
  axios
    .get('http://ec2-3-38-168-114.ap-northeast-2.compute.amazonaws.com')
    .then(result => {
      console.log('😃 Server-Client Connection Success!', result);
    })
    .catch(error => {
      console.log('🤢 Server-Client Connection Failed!', error);
    });
  //---------- 서버와 연결 확인용 코드 ----------
  return <h1> Landing 페이지 입니다.</h1>;
}
