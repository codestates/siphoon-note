import dummy from '../../static/landingDummy';
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
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { Footer } from '../../components';
import Description from '../../components/Description';
import Ranking from '../../components/Ranking';
import PublicEssays from '../../components/PublicEssays';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';
import apiUris from '../../config/config';

export default function Landing({ isLogin }) {
  const dummyData = [
    {
      profileImage: { imageUrls: '0' },
      username: '안가람',
      usageDates: '1284',
    },
    {
      profileImage: { imageUrls: '1' },
      username: '이종열',
      usageDates: '99',
    },
    { profileImage: { imageUrls: '2' }, username: '전준형', usageDates: '98' },
    { profileImage: { imageUrls: '3' }, username: '이수리', usageDates: '75' },
  ];
  const [topUser, setTopUser] = useState(dummyData);
  const [publicEssay, setPublicEssay] = useState(dummy);

  //! 랜딩 페이지 서버 요청
  axios
    .get(apiUris.LOAD_LANDING, {
      headers: {
        authorization: { 'Content-Type': 'application/json' },
      },
    })
    .then(res => {
      if (res.status === 200) {
        const { userList, publicEssayList } = res.data;
        setTopUser(userList);
        setPublicEssay(publicEssayList);
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

  gsap.registerPlugin(ScrollTrigger);
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

  console.log(apiUris.LOAD_LANDING);

  return (
    <>
      <Container>
        <Image imgUrl="img/background/tree.svg"></Image>
        {isLogin ? (
          <NavLink to="/diary">
            <Image2 src="img/clock.svg" top="2" left="1" height="20"></Image2>
          </NavLink>
        ) : (
          <NavLink to="/trial">
            <Image2 src="img/clock.svg" top="2" left="1" height="20"></Image2>
          </NavLink>
        )}
        <Image3 src="img/rhombus.svg" right="8" top="29" height="4"></Image3>
        <Image4 src="img/rhombus.svg" right="5.5" top="31" height="6"></Image4>
        <Image3 src="img/rhombus.svg" left="5" top="50" height="5"></Image3>
        <Image4 src="img/rhombus.svg" right="49" top="90" height="4"></Image4>
        <Main>
          <Span>글 쓰기 습관을 기르는 10분 노트</Span>
          <>
            {isLogin ? (
              <NavLink to="/diary">
                <Button>
                  SIPHOON<br></br>NOTE
                </Button>
              </NavLink>
            ) : (
              <NavLink to="/trial">
                <Button>
                  SIPHOON<br></br>NOTE
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
          안녕하세요, Siphoon Note 입니다. 📝️
        </h1>
      </Container2>
      <Container3>
        <Description></Description>
      </Container3>
      <Container4>
        <h3 className="community-title">
          Siphoon 게시판<br></br>
          <BsFillArrowDownCircleFill className="community-icon"></BsFillArrowDownCircleFill>
        </h3>
      </Container4>
      <Container5 id="ranking">
        <Ranking topUser={topUser}></Ranking>
      </Container5>
      <Container6 id="public">
        <h2>다른 유저들은 Siphoon Note를 이렇게 작성했어요!</h2>
        <PublicEssays publicEssay={publicEssay}></PublicEssays>
      </Container6>
      <Footer></Footer>
    </>
  );
}
