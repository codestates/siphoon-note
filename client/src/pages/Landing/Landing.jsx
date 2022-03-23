import { Container, Image, Main, Span, Button } from './Landing.style';
import { NavLink } from 'react-router-dom';

export default function Landing({ isLogin }) {
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
