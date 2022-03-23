import { Container, Image, Main, Span, Button } from './Landing.style';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function Landing({ isLogin }) {
  //---------- 서버와 연결 확인용 코드 ----------
  axios
    .get('http://ec2-3-38-168-114.ap-northeast-2.compute.amazonaws.com')
    .then(res => {
      console.log('Connection success', res);
    })
    .catch(err => {
      console.log('Connection failed', err);
    });
  //---------- 서버와 연결 확인용 코드 ----------
  return (
    <>
      <Container>
        <Image imgUrl="img/test5.svg"></Image>
        <Main>
          <Span>글쓰기 습관을 기르는 10분</Span>
          {isLogin ? (
            <>
              <NavLink to={'/diary'}>
                <Button>Lets Get Started!</Button>
              </NavLink>
              <Span>see more?</Span>
            </>
          ) : (
            <>
              <NavLink to={'/trial'}>
                <Button>Lets Get Started!</Button>
              </NavLink>
              <Span>see more?</Span>
            </>
          )}
        </Main>
      </Container>
    </>
  );
}
