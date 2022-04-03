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
  Image4,
  Main,
  Span,
  Button,
  Icon,
  Icon2,
} from './Landing.style';
import { NavLink } from 'react-router-dom';
import { TiArrowDownOutline } from 'react-icons/ti';
import { HiArrowUp, HiArrowDown } from 'react-icons/hi';
import { Footer } from '../../components';
import Description from '../../components/Description';
import Ranking from '../../components/Ranking';
import PublicEssays from '../../components/PublicEssays';

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
        <Image imgUrl="img/avatar/tree.svg"></Image>
        <NavLink to="/diary">
          <Image2 src="img/clock.svg" top="2" left="1" height="20"></Image2>
        </NavLink>
        <Image3 src="img/rhombus.svg" right="8" top="29" height="4"></Image3>
        <Image4 src="img/rhombus.svg" right="5.5" top="31" height="6"></Image4>
        <Image3 src="img/rhombus.svg" left="5" top="50" height="5"></Image3>
        <Image4 src="img/rhombus.svg" right="49" top="90" height="4"></Image4>
        <Main>
          <Span>하루에 십분만 코딩을 해요?ㅎㅎㅎ</Span>
          {isLogin ? (
            <>
              <NavLink to={'/diary'}>
                <Button>
                  click<br></br>logoooo!
                </Button>
              </NavLink>
              <Icon>
                <a href="#section2">
                  <HiArrowDown></HiArrowDown>
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
                  <HiArrowDown></HiArrowDown>
                </a>
              </Icon>
            </>
          )}
        </Main>
      </Container>
      {hasBtn ? (
        <Icon2>
          <HiArrowUp onClick={handleTop}></HiArrowUp>
        </Icon2>
      ) : null}
      <Container2 id="section2">
        <br></br>
        <h1>
          안녕하세요, <br></br>10bun diary의 기능들 블라블라!
        </h1>
      </Container2>
      <Container3>
        {/* <h2>서비스 기능</h2> */}
        <Description></Description>
      </Container3>
      <Container4>
        <h1>유저랭킹과 글보기</h1>
      </Container4>

      <Container5>
        <h1>랭킹 구상</h1>
      </Container5>
      <Container6>
        <h2>다른 유저의 공개글 보기</h2>
        <PublicEssays></PublicEssays>
      </Container6>
      <Footer></Footer>
    </>
  );
}
