import { useState, useEffect } from 'react';
import {
  Container,
  Container2,
  Container3,
  Container4,
  Container5,
  Container6,
  Image,
  Image2,
  Image3,
  Main,
  Span,
  Button,
  Icon,
  Icon2,
} from './Landing.style';
import { NavLink } from 'react-router-dom';
import { BsArrowDownCircleFill, BsArrowUpSquare } from 'react-icons/bs';
import { FaArrowCircleDown } from 'react-icons/fa';
import { Footer } from '../../components';

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
        <Image imgUrl="img/memo.svg"></Image>
        <NavLink to="/diary">
          <Image2 src="img/clock.svg" top="2" left="1" height="20"></Image2>
        </NavLink>
        <Image3 src="img/asterisk2.svg" right="30" top="10" height="3"></Image3>
        {/* <Image4 src="img/asterisk2.svg" right="5" top="20" height="2"></Image4> */}
        <Image3 src="img/asterisk2.svg" left="3" top="60" height="3"></Image3>
        <Image3 src="img/asterisk2.svg" right="45" top="75" height="3"></Image3>
        <Image3 src="img/asterisk2.svg" right="2" top="93" height="3"></Image3>
        {/* <Image4 src="img/asterisk2.svg" right="46" top="32" height="2"></Image4> */}
        <Main>
          <Span>하루에 단 10분만 글을 쓸 수 있다면? 가낟라마</Span>
          {isLogin ? (
            <>
              <NavLink to={'/diary'}>
                <Button>
                  click<br></br>logoooo!
                </Button>
              </NavLink>
              <Icon>
                <a href="#section2">
                  <BsArrowDownCircleFill></BsArrowDownCircleFill>
                </a>
              </Icon>
            </>
          ) : (
            <>
              <NavLink to={'/trial'}>
                <Button>
                  click<br></br>logoooo!
                </Button>
              </NavLink>
              <Icon>
                <a href="#section2">
                  <FaArrowCircleDown></FaArrowCircleDown>
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
      <Container2 id="section2"></Container2>
      <Container3></Container3>
      <Container4></Container4>
      <Container5></Container5>
      <Container6></Container6>
      <Footer></Footer>
    </>
  );
}
