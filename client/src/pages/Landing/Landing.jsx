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
import axios from 'axios';

export default function Landing({ isLogin }) {
  // 서버에서 유저 랭킹과 공개글 리스트 받기
  const [topUser, setTopUser] = useState(null);
  const [publicEssay, setPublicEssay] = useState(null);

  const API_HOST =
    'http://ec2-3-38-168-114.ap-northeast-2.compute.amazonaws.com';

  axios
    .get(`${API_HOST}/api/v1/`, {
      headers: {
        authorization: { 'Content-Type': 'application/json' },
      },
    })
    .then(res => {
      if (res.status === 200) {
        setTopUser(res.data.userList);
        setPublicEssay(res.data.publicEssayList);
      }
    })
    .catch(err => console.log(err));

  // 상단으로 올라가기 버튼 구현
  const [ScrollY, setScrollY] = useState(0);
  const [hasBtn, setHasBtn] = useState(false);

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

  // 스크롤 트리거 구현
  gsap.registerPlugin(ScrollTrigger);
  gsap.to('.introduction-title', {
    scrollTrigger: {
      trigger: '.introduction-title',
      start: 'top center',
      end: 'bottom bottom',
      // markers: true,
      // pin: true,
      toggleActions: 'play pause reverse restart',
      scrub: true,
    },
    duration: 12,
    y: 320,
    ease: Power3.easeOut,
  });

  gsap.to('.community-title', {
    scrollTrigger: {
      trigger: '.community-title',
      start: 'top bottom',
      toggleActions: 'play none none restart',
      scrub: true,
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
                  clickkk<br></br>logoooo!
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
      <Container2 id="introduction">
        <h1 className="introduction-title">
          Hello, This is 10bun diary :) 📝️
        </h1>
      </Container2>
      <Container3>
        <Description></Description>
      </Container3>
      <Container4>
        <h2 className="community-title">
          10bun <br></br> Community
        </h2>
      </Container4>
      <Container5 id="ranking">
        <Ranking topUser={topUser}></Ranking>
      </Container5>
      <Container6 id="public">
        <h2>공개된 글 가나다라 마바사</h2>
        <PublicEssays publicEssay={publicEssay}></PublicEssays>
      </Container6>
      <Footer></Footer>
    </>
  );
}
