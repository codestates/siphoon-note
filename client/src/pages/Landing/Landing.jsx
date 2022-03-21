import axios from 'axios';
const config = require(__dirname + '/config.js');

export default function Landing() {
  //---------- 서버와 연결 확인용 코드 ----------
  axios
    .get(config.API_HOST)
    .then(result => {
      console.log('😃 Server-Client Connection Success!', result);
    })
    .catch(error => {
      console.log('🤢 Server-Client Connection Failed!', error);
    });
  //---------- 서버와 연결 확인용 코드 ----------
  return <h1> Landing 페이지 입니다.</h1>;
}
