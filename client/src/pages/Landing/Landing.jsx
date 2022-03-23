import { Container, Image, Main, Span, Button, Icon } from './Landing.style';
import { NavLink } from 'react-router-dom';
import { BsArrowDown } from 'react-icons/bs';

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
              <Icon>
                <a href="#section2">
                  <BsArrowDown></BsArrowDown>
                </a>
              </Icon>
            </>
          )}
        </Main>
      </Container>
      <Container id="section2">
        <Image imgUrl="img/연필.svg"></Image>
      </Container>
      <Container>
        <Image imgUrl="img/pattern1.svg"></Image>
      </Container>
    </>
  );
}
