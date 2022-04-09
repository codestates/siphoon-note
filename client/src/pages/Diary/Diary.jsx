import dummy from '../../static/dummyData';
import pageDummy from '../../static/pageDummyData';
import colorTheme from '../../colorTheme';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RiGift2Line, RiPencilLine, RiDeleteBin6Line } from 'react-icons/ri';
import { GrCircleInformation } from 'react-icons/gr';
import Analysis from '../../components/Analysis';
import Tag from '../../components/Tag';
import Keyword from '../../components/Keyword';
import Searchbar from '../../components/Searchbar';
import TagToggle from '../../components/TagToggle';
import Trash from '../../components/Trash';
import Timer from '../../components/Timer';
import EntireEssay from '../../components/EntireEssay';
import Loading from '../../components/Loading';
import { useState, useEffect, useRef } from 'react';
import Editor from '../../components/Editor';
import { useNavigate } from 'react-router-dom';
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
  Button2,
  Button3,
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
  LoadingWrapper,
  Divs,
  Backs,
  Hashtag,
  Icon,
} from './Diary.style';
import axios from 'axios';
import apiUris from '../../config/config';

export default function Diary() {
  //* 자신의 정보 조회하기 (무한 스크롤(에세이리스트), 달력마크/기록분석, 유저정보(닉네임, 사진))

  // 유저정보 업데이트

  // 다이어리 전체 리스트
  const [diaryList, setDiaryList] = useState(dummy);

  //! 달력 마크 & 기록 분석 (서버에서 데이터 받아와서 갱신만 하면 되는 상태)
  const [markList, setMarkList] = useState([
    '2022-04-11',
    '2022-04-03',
    '2022-04-02',
    '2022-04-01',
    '2022-03-31',
    '2022-03-30',
    '2022-03-28',
  ]);

  const [recordList, setRecordList] = useState({
    totalEssay: 128,
    currentStreaks: 12,
    longestStreaks: 25,
    usageDate: 30,
  });

  // 오늘의 영감
  const [keyword, setKeyword] = useState('윤슬');

  // 태그
  const [tags, setTags] = useState([keyword]);

  // 사용자 에세이 인풋
  const [input, setInput] = useState('');
  const handleInput = e => {
    setInput(e.target.value);
    setTimerOn(true);
  };

  // 공개 설정
  const [isPublic, setIsPublic] = useState(false);
  const handlePublic = () => {
    setIsPublic(!isPublic);
  };

  // 타이머
  const [timerOn, setTimerOn] = useState(false);
  const [minute, setMinute] = useState(1);

  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [lastElement, setLastElement] = useState(null);

  // 키워드 모달
  const [isKeywordModal, setIsKeywordModal] = useState(false);
  const handleKeyword = () => {
    setIsKeywordModal(!isKeywordModal);
  };

  // 휴지통, 태그 드롭다운
  const [isTrashDropdown, setIsTrashDropdown] = useState(false);
  const [isTagsDropdown, setIsTagsDropdown] = useState(false);
  const handleDropdown = () => {
    setIsTrashDropdown(false);
    setIsTagsDropdown(false);
  };

  // 페이지 전환
  const [pageNum, setPageNum] = useState(0);

  // 테마 인덱스
  const [themeIndex, setThemeIndex] = useState(0);
  const handleColorTheme = index => {
    setThemeIndex(index);
  };

  //! 서버에 글 작성 요청 보내기 (토큰필요, 1차 작업)
  const handleSubmit = () => {
    if (input !== '') {
      setInput('');
      setTimerOn(false);
      setTags([keyword]);

      axios
        .post(
          apiUris.WRITE_ESSAY,
          {
            content: input,
            isPublic,
            tags,
          },
          { headers: { authorization: { 'Content-Type': 'application/json' } } }
        )
        .then(res => {
          if (res.status === 201) {
            // 성공적으로 글이 작성되면 다시 메세지를 조회한다. readHandler?
          }
        })
        .catch(error => console.log(error));
    }
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
    if (pageNumber !== 0 && pageDummy[pageNumber] !== undefined) {
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
          <Keyword
            keyword={keyword}
            themeIndex={themeIndex}
            handleKeyword={handleKeyword}
          />
        ) : null}
        <Image imgUrl={colorTheme[themeIndex].picture} />
        <SideBar>
          <TimerWrapper>
            <Timer
              minute={minute}
              timerOn={timerOn}
              handleSubmit={handleSubmit}
            />
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
              <Tag tags={tags} setTags={setTags} />
              {isPublic ? (
                <Button2 className="public" onClick={handlePublic}>
                  공개
                </Button2>
              ) : (
                <Button3 className="private" onClick={handlePublic}>
                  공개
                </Button3>
              )}
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
        {pageNum === 0 ? (
          <>
            <Main>
              <Wrapper1>
                {diaryList.map((diary, index) => {
                  return index % 3 === 0 ? (
                    <Card
                      key={index}
                      diary={diary}
                      index={index}
                      length={diaryList.length}
                      isPublic={isPublic}
                      handlePublic={handlePublic}
                    ></Card>
                  ) : null;
                })}
              </Wrapper1>
              <Wrapper2>
                {diaryList.map((diary, index) => {
                  return index % 3 === 1 ? (
                    <Card
                      key={index}
                      diary={diary}
                      index={index}
                      length={diaryList.length}
                      isPublic={isPublic}
                      handlePublic={handlePublic}
                    ></Card>
                  ) : null;
                })}
              </Wrapper2>
              <Wrapper3>
                {diaryList.map((diary, index) => {
                  return index % 3 === 2 ? (
                    <Card
                      key={index}
                      diary={diary}
                      index={index}
                      length={diaryList.length}
                      isPublic={isPublic}
                      handlePublic={handlePublic}
                    ></Card>
                  ) : null;
                })}
                <div ref={setLastElement} style={{ position: 'hidden' }}></div>
              </Wrapper3>

              <div />
              <LoadingWrapper>
                {/* {loading && <Loading />} */}
                <Loading />
              </LoadingWrapper>
            </Main>
          </>
        ) : (
          <Analysis
            markList={markList}
            recordList={recordList}
            setPageNum={setPageNum}
          />
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
      </Container>
    </>
  );
}

export const Card = ({ length, diary, index, isPublic, handlePublic }) => {
  const [isFlipIcon, setIsFlipIcon] = useState(false);
  const navigator = useNavigate();
  const [hover, setHover] = useState(true);

  // 에디터 모달
  const [isEditor, SetIsEditor] = useState(false);
  const handleEditor = () => {
    SetIsEditor(!isEditor);
  };

  // 전체 메세지 모달
  const [isEntireEssay, SetIsEntireEssay] = useState(false);
  const handleEntireEssay = () => {
    SetIsEntireEssay(!isEntireEssay);
  };

  const number = length - index;

  const deletehandle = () => {
    axios
      .patch(apiUris.UPDATE_ESSAY_BY_ID, {
        headers: {
          'Content-Type': 'application/json',
          withCredentials: true,
        },
      })
      .then(respond => {
        if (respond.status === 200) {
          navigator('/diary');
        }
      })
      .catch(error => {
        if (error.status === 400) {
          alert(error.message);
        } else if (error.status === 401) {
          alert(error.message);
        } else if (error.status === 500) {
          alert(error.message);
        }
      });
  };

  return (
    <Divs>
      {isEntireEssay && (
        <EntireEssay
          handleEntireEssay={handleEntireEssay}
          isPublic={isPublic}
          diary={diary}
          number={number}
        ></EntireEssay>
      )}
      {isEditor && (
        <Editor
          handleEditor={handleEditor}
          isPublic={isPublic}
          handlePublic={handlePublic}
          diary={diary}
          number={number}
        ></Editor>
      )}
      {hover ? (
        <div>
          <CardContainer
            onClick={handleEntireEssay}
            onMouseOver={() => setIsFlipIcon(true)}
            onMouseOut={() => setIsFlipIcon(false)}
            className="front"
          >
            <Title>{number}번째 글쓰기</Title>
            <Content>{diary.content}</Content>
            {isFlipIcon && (
              <GrCircleInformation
                className="flip-icon"
                onMouseEnter={() => setHover(false)}
              />
            )}
          </CardContainer>
          <Backs className="back" transition="0s" />
        </div>
      ) : (
        <div>
          <CardContainer
            className="front"
            rotate="rotateY(-180deg)"
            position="absolute"
          >
            <Title>{diary.id}번째 글쓰기</Title>
            <Content>{diary.content}</Content>
            <GrCircleInformation className="flip-icon" />
          </CardContainer>
          <Backs
            className="back"
            rotate="rotateY(0deg)"
            onMouseLeave={() => setHover(true)}
          >
            <Icon>
              <RiPencilLine onClick={handleEditor} className="back" />
              <RiDeleteBin6Line className="back" onClick={deletehandle} />
            </Icon>
            <span className="createdat">{diary.createdAt}</span>
            <div className="tags">
              {diary.tag.map((tag, index) => {
                return <Hashtag key={index}># {tag}</Hashtag>;
              })}
            </div>
          </Backs>
        </div>
      )}
    </Divs>
  );
};
