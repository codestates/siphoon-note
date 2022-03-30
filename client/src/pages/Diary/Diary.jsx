import dummy from '../../static/dummyData';
import pageDummy from '../../static/pageDummyData';
import colorTheme from '../../colorTheme';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RiGift2Line } from 'react-icons/ri';
import Analysis from '../../components/Analysis';
import Tag from '../../components/Tag';
import Keyword from '../../components/Keyword';
import Searchbar from '../../components/Searchbar';
import TagToggle from '../../components/TagToggle';
import Trash from '../../components/Trash';
import Timer from '../../components/Timer';
import { useState, useEffect, useRef } from 'react';
import {
  Container,
  Main,
  SideBar,
  TimerWrapper,
  InputWrapper,
  Input,
  ButtonWrapper,
  ButtonWrapper2,
  Button,
  CardContainer,
  Wrapper1,
  Wrapper2,
  Wrapper3,
  ColorPalette,
  Title,
  Content,
  Image,
  IconWrapper,
  IconWrapper2,
} from './Diary.style';

export default function Diary() {
  // 타이머 버튼
  const [timerOn, setTimerOn] = useState(false);
  const [minute, setMinute] = useState(10);

  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [lastElement, setLastElement] = useState(null);

  // 키워드 모달
  const [isKeywordModal, setIsKeywordModal] = useState(false);
  const handleKeyword = () => {
    setIsKeywordModal(!isKeywordModal);
  };

  // trash, tags dropdown
  const [isTrashDropdown, setIsTrashDropdown] = useState(false);
  const [isTagsDropdown, setIsTagsDropdown] = useState(false);
  const handleDropdown = () => {
    setIsTrashDropdown(false);
    setIsTagsDropdown(false);
  };

  // 서버에 보내기

  // 사용자 인풋 받기
  const [input, setInput] = useState('');
  const handleInput = e => {
    setInput(e.target.value);
    setTimerOn(true);
  };

  // 다이어리 리스트
  const [diaryList, setDiaryList] = useState(pageDummy[pageNumber]);
  const handleSubmit = () => {
    setInput('');
    setTimerOn(false);
    setDiaryList([{ id: diaryList.length, content: input }, ...diaryList]);
  };

  // 페이지 전환
  const [pageNum, setPageNum] = useState(0);

  // 테마 인덱스 (뒤로가기 버튼을 눌러도 달라지지 않으려면, 전역에서 관리가 필요하다.)
  const [themeIndex, setThemeIndex] = useState(0);
  const handleColorTheme = index => {
    setThemeIndex(index);
  };

  // const ioCallback = (entries, io) => {
  // 화면 안에 요소가 들어왔는지 체크
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  // 기존 관찰하던 요소는 더 이상 관찰하지 않음
  //       io.unobserve(entry.target);

  // TODO: 새로운 컨텐츠 추가
  // TODO: 새로운 컨텐츠의 마지막 요소를 관찰 시작

  //       loadingStart();
  //       setTimeout(() => {
  //         addNewContent();
  //         loadingFinish();
  //         observeLastItem(io, document.querySelectorAll('.card'));
  //       }, 2000);
  //     }
  //   });
  // };

  const observer = useRef(
    new IntersectionObserver(entries => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPageNumber(no => no + 1);
      }
    })
  );

  const onEvent = () => {
    setLoading(true);
    console.log('pageEnd Event');
    // console.log(typeof pageDummy[pageNumber]);
    // console.log(typeof diaryList);
    {
      pageNumber !== 0 &&
        setDiaryList([...diaryList, ...pageDummy[pageNumber]]);
    }
    setLoading(false);
    // setPageNumber(pageNumber => pageNumber + 1);
  };

  useEffect(() => {
    onEvent();
  }, [pageNumber]);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  const pageEnd = useRef(null);

  return (
    <>
      <Container color={colorTheme[themeIndex].color}>
        {isKeywordModal ? (
          <Keyword themeIndex={themeIndex} handleKeyword={handleKeyword} />
        ) : null}
        <Image imgUrl={colorTheme[themeIndex].picture} />
        <SideBar>
          <TimerWrapper>
            <Timer minute={minute} timerOn={timerOn} />
          </TimerWrapper>
          <InputWrapper onClick={handleDropdown}>
            <ButtonWrapper>
              <div>
                {colorTheme.map((theme, index) => {
                  return (
                    <ColorPalette
                      onClick={() => handleColorTheme(index)}
                      key={index}
                      color={theme.color}
                    />
                  );
                })}
              </div>
              <span onClick={handleKeyword}>
                <RiGift2Line />
              </span>
            </ButtonWrapper>
            <Input value={input} onChange={handleInput} />
            <ButtonWrapper2>
              <Tag />
              <Button onClick={() => setTimerOn(false)}>리셋</Button>
              <Button onClick={handleSubmit}>남기기</Button>
            </ButtonWrapper2>
          </InputWrapper>
          <TagToggle
            isTagsDropdown={isTagsDropdown}
            setIsTagsDropdown={setIsTagsDropdown}
            setIsTrashDropdown={setIsTrashDropdown}
          />
          <Trash
            isTrashDropdown={isTrashDropdown}
            setIsTrashDropdown={setIsTrashDropdown}
            setIsTagsDropdown={setIsTagsDropdown}
          />
          <Searchbar />
        </SideBar>
        {/* 메인 구간 */}
        <Main>
          {pageNum === 0 ? (
            <>
              <Wrapper1>
                {diaryList.map((diary, index) => {
                  return index % 3 === 0 ? (
                    <Card key={index} diary={diary}></Card>
                  ) : null;
                })}
              </Wrapper1>
              <Wrapper2>
                {diaryList.map((diary, index) => {
                  return index % 3 === 1 ? (
                    <Card key={index} diary={diary}></Card>
                  ) : null;
                })}
              </Wrapper2>
              <Wrapper3>
                {diaryList.map((diary, index) => {
                  return index % 3 === 2 ? (
                    <Card key={index} diary={diary}></Card>
                  ) : null;
                })}
                <div ref={setLastElement}>타켓지점</div>
                {loading && <p>loading...</p>}
              </Wrapper3>
              {/* <>{isLoading && <Loading />}</> */}
            </>
          ) : (
            <Analysis />
          )}
          {pageNum === 0 ? (
            <IconWrapper>
              <IoIosArrowForward onClick={() => setPageNum(1)} />
            </IconWrapper>
          ) : (
            <IconWrapper2>
              <IoIosArrowBack onClick={() => setPageNum(0)} />
            </IconWrapper2>
          )}
        </Main>
      </Container>
    </>
  );
}

export const Card = ({ diary }) => {
  return (
    <CardContainer>
      <Title>{diary.id}번째 글쓰기</Title>
      <Content>{diary.content}</Content>
    </CardContainer>
  );
};
