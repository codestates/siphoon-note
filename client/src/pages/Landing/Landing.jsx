import { useState, useEffect } from 'react';
import {
  Container,
  Image,
  Main,
  Span,
  Button,
  Icon,
  Icon2,
} from './Landing.style';
import { NavLink } from 'react-router-dom';
import { BsArrowDown, BsArrowUpSquare } from 'react-icons/bs';

export default function Landing({ isLogin }) {
  // 상단으로 올라가기 버튼 구현
  const [ScrollY, setScrollY] = useState(0);
  const [hasBtn, setHasBtn] = useState(false); // 버튼 상태

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 300) {
      setHasBtn(true);
    } else {
      setHasBtn(false);
    }
  };

  const handleTop = () => {
    console.log('hi');
    window.scrollTo({
      top: 0,
    });
    setScrollY(0);
    setHasBtn(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleScroll);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

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
      {hasBtn ? (
        <Icon2>
          <BsArrowUpSquare onClick={handleTop}></BsArrowUpSquare>
        </Icon2>
      ) : null}
      <Container id="section2">
        <Image></Image>
      </Container>
      <Container>
        <Image imgUrl="img/pattern1.svg"></Image>
      </Container>
    </>
  );
}
