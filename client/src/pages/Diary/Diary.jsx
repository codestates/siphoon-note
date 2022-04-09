import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RiGift2Line, RiPencilLine, RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineInfoCircle, AiTwotoneAlert } from 'react-icons/ai';
import dummy from '../../static/dummyData';
import pageDummy from '../../static/pageDummyData';
import colorTheme from '../../colorTheme';
import Analysis from '../../components/Analysis';
import Tag from '../../components/Tag';
import Keyword from '../../components/Keyword';
import Searchbar from '../../components/Searchbar';
import TagToggle from '../../components/TagToggle';
import Trash from '../../components/Trash';
import Timer from '../../components/Timer';
import EntireEssay from '../../components/EntireEssay';
import Loading from '../../components/Loading';
import Editor from '../../components/Editor';
import { useState, useEffect, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
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
import apiUris from '../../config/config.js';

export default function Diary({ accessToken, keyword }) {
  // 다이어리 전체 리스트
  const [diaryList, setDiaryList] = useState(dummy);
  const [markList, setMarkList] = useState([
    '2022-04-11',
    '2022-04-03',
    '2022-04-02',
    '2022-04-01',
    '2022-03-31',
    '2022-03-30',
    '2022-03-28',
  ]);
  const [record, setRecord] = useState({
    totalEssay: 128,
    currentStreaks: 12,
    longestStreaks: 25,
    usageDate: 30,
  });

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

  //! get 요청해서 에세이 리스트만 갱신하는 핸들러
  // 휴지통, 태그, 검색어 컴포넌트에서 전체 에세이 리스트를 다시 받아올 때 적용 (고민)
  const readHandler = () => {
    axios
      .get(apiUris.READ_ESSAY_LIST)
      .then(res => {
        if (res.status === 200) {
          //* 에세이 리스트 받아오는 코드
        }
      })
      .catch(err => {
        console.log(err);
        if (err.status === 401) {
          alert('로그인이 필요합니다.');
          return navigator('/signin', { replace: true });
        }
        if (err.status === 500) {
          return alert(err.message);
        }
      });
  };

  //! get 요청 : 글 리스트, 분석데이터, 유저정보, 키워드(토큰필요)
  axios
    .get(apiUris.READ_ESSAY_LIST)
    .then(res => {
      if (res.status === 200) {
        const { todaysWord, record, markList } = res.data;
        //* 에세이 리스트
        // 코드작성 (종열)
        //* 유저정보
        // 코드작성 (준형)
        //* 분석, 달력
        setRecord(record);
        setMarkList(markList);
      }
    })
    .catch(err => {
      console.log(err);
      if (err.status === 401) {
        alert('로그인이 필요합니다.');
        return navigator('/signin', { replace: true });
      }
      if (err.status === 500) {
        return alert(err.message);
      }
    });

  //! 서버에 글 작성 요청 보내기 (토큰필요)
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
            // case1. 전체글을 다시 조회한다. (get 요청)
            readHandler();
            // case2. 클라사이드에서 임시로 보여준다. (클라사이드)
            // setDiaryList(prev => [res.data, ...prev]);
          }
        })
        .catch(err => {
          console.log(err);
          if (err.status === 401) {
            return alert(err.message);
          }
          if (err.status === 500) {
            return alert(err.message);
          }
        });
    }
  };

  //! 무한 스크롤 부분

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
            <Timer timerOn={timerOn} handleSubmit={handleSubmit} />
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
              <Button onClick={handleSubmit}>전송</Button>
            </ButtonWrapper2>
          </InputWrapper>
          <TagToggle
            accessToken={accessToken}
            isTagsDropdown={isTagsDropdown}
            readHandler={readHandler}
            setIsTagsDropdown={setIsTagsDropdown}
            setIsTrashDropdown={setIsTrashDropdown}
          />
          <Trash
            accessToken={accessToken}
            readHandler={readHandler}
            isTrashDropdown={isTrashDropdown}
            setIsTrashDropdown={setIsTrashDropdown}
            setIsTagsDropdown={setIsTagsDropdown}
          />

          <Searchbar readHandler={readHandler} />
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
                      length={record.totalEssay}
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
                      length={record.totalEssay}
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
                      length={record.totalEssay}
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
            record={record}
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
      .patch(apiUris.DELETE_ESSAY_BY_ID, {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then(respond => {
        if (respond.status === 200) {
          navigator('/diary');
        } else if (respond.status === 400) {
          alert('삭제 안됨');
        }
      })
      .catch(error => console.log(error));
    navigator('/diary');
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
          readHandler={readHandler}
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
              <AiOutlineInfoCircle
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
            <AiOutlineInfoCircle className="flip-icon" />
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
