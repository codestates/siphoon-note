import dummy from '../../static/trialDummy';
import colorTheme from '../../colorTheme';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RiGift2Line, RiPencilLine, RiDeleteBin6Line } from 'react-icons/ri';
import { GrCircleInformation } from 'react-icons/gr';
import Analysis from '../../components/Analysis';
import Tag from '../../components/Tag';
import Keyword from '../../components/Keyword';
import TrialSearchbar from './TrialSearchbar';
import TrialTagToggle from './TrialTagToggle';
import TrialTrash from './TrialTrash';
import Timer from '../../components/Timer';
import EntireEssay from '../../components/EntireEssay';
import TrialEditor from './TrialEditor';
import { useState, useEffect } from 'react';
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
  DD,
  Backs,
  Hashtag,
  Icon,
} from './Trial.style';

export default function Trial() {
  // dummy[0].content = 'nice to meet you?';
  // console.log(dummy[0].content);
  // 오늘 날짜 구하기
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    return year + '-' + month + '-' + day;
  };

  // 다이어리 전체 리스트
  const [entireList, setEntireList] = useState(dummy);

  // 달력 스탬프 & 분석 리스트
  const markList = [];
  entireList.map(diary => {
    markList.push(diary.createdAt);
  });

  const [recordList, setRecordList] = useState({
    totalEssay: 11,
    currentStreaks: '로그인 필요',
    longestStreaks: '로그인 필요',
    usageDate: '로그인 필요',
  });

  // 태그리스트
  const tagList = [];
  entireList.map(diary => {
    if (tagList.indexOf(...diary.tag) === -1) {
      tagList.push(...diary.tag);
    }
  });

  // 출력 리스트
  const notDeletedList = entireList.filter(diary => {
    return diary.isDeleted === false;
  });

  const [diaryList, setDiaryList] = useState(notDeletedList);

  const filtered = entireList.filter(diary => {
    return diary.isDeleted === true;
  });
  // 휴지통 리스트
  const [trashList, setTrashList] = useState(filtered);

  useEffect(() => {
    setDiaryList(notDeletedList);
  }, [entireList]);

  // 키워드
  const keywordArr = [
    '윤슬',
    '아침',
    '점심',
    '친구',
    '고양이',
    '강아지',
    '눈',
    '호흡',
    '일의슬픔',
  ];

  const getRandomKeyword = () => {
    const randomNum = parseInt(Math.random() * (keywordArr.length - 1));
    return keywordArr[randomNum];
  };

  // 사용자 에세이 인풋
  const [input, setInput] = useState('');
  const handleInput = e => {
    setInput(e.target.value);
    setTimerOn(true);
  };

  useEffect(() => {
    setKeyword(getRandomKeyword());
  }, []);

  const [keyword, setKeyword] = useState('다섯자태그');

  // 태그
  const [tags, setTags] = useState([keyword]);

  // 공개 설정
  const [isPublic, setIsPublic] = useState(false);
  const handlePublic = () => {
    setIsPublic(!isPublic);
  };

  // 타이머
  const [timerOn, setTimerOn] = useState(false);
  const [minute, setMinute] = useState(1);

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

  const handleSubmit = () => {
    if (input !== '') {
      setInput('');
      setTimerOn(false);
      setTags([keyword]);

      setEntireList([
        {
          essayId: entireList.length,
          tag: tags,
          content: input,
          createdAt: getTodayDate(),
          isPublic,
          isDeleted: false,
        },
        ...entireList,
      ]);
    }
  };

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
          <TrialTagToggle
            tagList={tagList}
            isTagsDropdown={isTagsDropdown}
            setIsTagsDropdown={setIsTagsDropdown}
            setIsTrashDropdown={setIsTrashDropdown}
            setDiaryList={setDiaryList}
            entireList={entireList}
            notDeletedList={notDeletedList}
          />
          <TrialTrash
            diaryList={diaryList}
            setDiaryList={setDiaryList}
            entireList={entireList}
            setEntireList={setEntireList}
            trashList={trashList}
            isTrashDropdown={isTrashDropdown}
            setIsTrashDropdown={setIsTrashDropdown}
            setIsTagsDropdown={setIsTagsDropdown}
          />
          <TrialSearchbar
            notDeletedList={notDeletedList}
            setDiaryList={setDiaryList}
            entireList={entireList}
          />
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
                      diaryList={diaryList}
                      setEntireList={setEntireList}
                      trashList={trashList}
                      setTrashList={setTrashList}
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
                      diaryList={diaryList}
                      setEntireList={setEntireList}
                      trashList={trashList}
                      setTrashList={setTrashList}
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
                      diaryList={diaryList}
                      setEntireList={setEntireList}
                      trashList={trashList}
                      setTrashList={setTrashList}
                    ></Card>
                  ) : null;
                })}
              </Wrapper3>
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

export const Card = ({
  length,
  diary,
  index,
  isPublic,
  handlePublic,
  diaryList,
  setEntireList,
  trashList,
  setTrashList,
}) => {
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

  const deletehandle = diary => {
    diary.isDeleted = true;
    const filtered = diaryList.filter(essay => {
      return essay.essayId !== diary.essayId;
    });
    setTrashList([diary, ...trashList]);
    setEntireList(filtered);
  };

  return (
    <DD>
      {isEntireEssay && (
        <EntireEssay
          handleEntireEssay={handleEntireEssay}
          isPublic={isPublic}
          diary={diary}
          number={number}
        ></EntireEssay>
      )}
      {isEditor && (
        <TrialEditor
          handleEditor={handleEditor}
          isPublic={isPublic}
          handlePublic={handlePublic}
          diary={diary}
          number={number}
        ></TrialEditor>
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
            position="static"
            onMouseLeave={() => setHover(true)}
          >
            <Icon>
              <RiPencilLine onClick={handleEditor} className="back" />
              <RiDeleteBin6Line
                className="back"
                onClick={() => deletehandle(diary)}
              />
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
    </DD>
  );
};
