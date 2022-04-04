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
import { HiArrowUp, HiArrowDown } from 'react-icons/hi';
import { Footer } from '../../components';
import Description from '../../components/Description';
import Ranking from '../../components/Ranking';
import PublicEssays from '../../components/PublicEssays';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.introduction-title', {
    scrollTrigger: {
      trigger: '.introduction-title',
      start: 'top center',
      end: 'bottom bottom',
      // markers: true,
      toggleActions: 'play pause reverse restart',
      scrub: true,

      // pin: true,
    },
    duration: 12,
    y: 320,
    ease: Power3.easeOut,
  });

  gsap.to('.community-title', {
    scrollTrigger: {
      trigger: '.community-title',
      start: 'top bottom',
      // end: '80% bottom',
      toggleActions: 'play none none restart',
      scrub: true,
      // markers: true,
    },
    duration: 1,
    rotate: 360,
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
          <>
            {isLogin ? (
              <NavLink to="/diary">
                <Button>
                  click<br></br>logoooo!
                </Button>
              </NavLink>
            ) : (
              <NavLink to="/trial">
                <Button>
                  click<br></br>logoooo!
                </Button>
              </NavLink>
            )}
            <Icon>
              <a href="#introduction">
                <HiArrowDown></HiArrowDown>
              </a>
            </Icon>
          </>
        </Main>
      </Container>
      {hasBtn ? (
        <Icon2>
          <HiArrowUp onClick={handleTop}></HiArrowUp>
        </Icon2>
      ) : null}
      <Container2 className="container" id="introduction">
        <h1 className="introduction-title">
          Hello, This is 10bun diary :) 📝️
        </h1>
      </Container2>
      <Container3 className="description" id="container">
        <Description></Description>
      </Container3>
      <Container4 className="community" id="container">
        <h1 className="community-title">
          10bun <br></br> Community
        </h1>
      </Container4>
      <Container5 id="ranking">
        <Ranking></Ranking>
      </Container5>
      <Container6 id="public">
        <h2>공개된 글 가나다라 마바사</h2>
        <PublicEssays></PublicEssays>
      </Container6>
      <Footer></Footer>
    </>
  );
}
