import dummy from '../../static/dummyData';
import colorTheme from '../../colorTheme';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RiGift2Line, RiPencilLine, RiDeleteBin6Line } from 'react-icons/ri';
import { MdOutlineFlipCameraAndroid } from 'react-icons/md';
import Analysis from '../../components/Analysis';
import Tag from '../../components/Tag';
import Keyword from '../../components/Keyword';
import Searchbar from '../../components/Searchbar';
import TagToggle from '../../components/TagToggle';
import Trash from '../../components/Trash';
import Timer from '../../components/Timer';
import EntireEssay from '../../components/EntireEssay';
import Editor from '../../components/Editor';
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
} from './Diary.style';

export default function Diary() {
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

  // 테마 인덱스 (뒤로가기 버튼을 눌러도 달라지지 않으려면, 전역에서 관리가 필요하다.)
  const [themeIndex, setThemeIndex] = useState(0);
  const handleColorTheme = index => {
    setThemeIndex(index);
  };

  // 사용자 에세이 인풋
  const [input, setInput] = useState('');
  const handleInput = e => {
    setInput(e.target.value);
    setTimerOn(true);
  };

  // 다이어리 리스트
  const [diaryList, setDiaryList] = useState(dummy);
  const handleSubmit = () => {
    if (input !== '') {
      setInput('');
      setTimerOn(false);
      setDiaryList([{ id: diaryList.length, content: input }, ...diaryList]);
    }
  };

  // 공개 설정
  const [isPublic, setIsPublic] = useState(false);
  console.log('공개설정', isPublic);
  const handlePublic = () => {
    setIsPublic(!isPublic);
  };

  return (
    <>
      <Container color={colorTheme[themeIndex].color}>
        {/* <EntireEssay isPublic={isPublic}></EntireEssay> */}
        {/* <Editor isPublic={isPublic} handlePublic={handlePublic}></Editor> */}
        {isKeywordModal ? (
          <Keyword themeIndex={themeIndex} handleKeyword={handleKeyword} />
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
              <Tag />

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
              </Wrapper3>
            </Main>
          </>
        ) : (
          <Analysis setPageNum={setPageNum} />
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

export const Card = ({ diary }) => {
  const navigator = useNavigate();
  const [hover, setHover] = useState(true);
  const deletehandle = () => {
    // const { id } = diary;
    // axios
    //   .patch(`${API_HOST}/api/v1/userinfo`,
    //     {
    //       id,
    //     },
    //     { headers: { 'Content-Type': 'application/json' } }
    //   )
    //   .then(respond => {
    //     if (
    //       respond.data.message === 'Successfully moved the essay to the trash!'
    //     ) {
    //       navigator('/diary');
    //     } else if (
    //       respond.data.message ===
    //       'Pleases, check your request! Missing or Invalid Operation Parameters'
    //     ) {
    //       alert('삭제 안됨');
    //     }
    //   })
    //   .catch(error => console.log(error));
    navigator('/signin');
  };

  // console.log(tags);
  // const day = new Date();
  // console.log(day);
  // const createdat = day?.slice(0, 10) + ' ' + day?.slice(11, 19);

  const modifiedhandle = () => {};
  return (
    <DD>
      {hover ? (
        <div>
          <CardContainer className="front">
            <Title>{diary.id}번째 글쓰기</Title>
            <Content>{diary.content}</Content>
            <MdOutlineFlipCameraAndroid
              className="md"
              onMouseEnter={() => setHover(false)}
            />
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
            <MdOutlineFlipCameraAndroid className="md" />
          </CardContainer>
          <Backs
            className="back"
            rotate="rotateY(0deg)"
            position="static"
            onMouseLeave={() => setHover(true)}
          >
            <span className="createdat">{diary.createdAt}</span>
            <div>
              <div className="tags">
                <Hashtag>#어렵구만</Hashtag>
                <Hashtag>#CSS</Hashtag>
                <Hashtag>#힘들어</Hashtag>
              </div>
              <div className="icons">
                <Icon onClick={modifiedhandle}>
                  <RiPencilLine className="icon" />
                  수정
                </Icon>
                <Icon className="icon2">
                  <RiDeleteBin6Line className="icon" onClick={deletehandle} />
                  삭제
                </Icon>
              </div>
            </div>
          </Backs>
        </div>
      )}
    </DD>
  );
};
