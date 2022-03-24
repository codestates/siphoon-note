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
          <Span>가나다 라마바 사아자 차타카</Span>
          {isLogin ? (
            <>
              <NavLink to={'/diary'}>
                <Button>
                  Helllllllllo<br></br>Whoa!
                </Button>
              </NavLink>
              <Icon>
                <a href="#section2">
                  <BsArrowDown></BsArrowDown>
                </a>
              </Icon>
            </>
          ) : (
            <>
              <NavLink to={'/trial'}>
                <Button>
                  Helllllllllo<br></br>Whoa!
                </Button>
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
