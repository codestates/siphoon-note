import dummy from '../../static/dummyData';
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
import EntireEssay from '../../components/EntireEssay';
import { useState, useEffect } from 'react';
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
  DD,
  Backs,
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
    setInput('');
    setTimerOn(false);
    setDiaryList([{ id: diaryList.length, content: input }, ...diaryList]);
  };

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

        {pageNum === 0 ? (
          <>
            <Main>
              <Wrapper1>
                {diaryList.map((diary, index) => {
                  return index % 3 === 0 ? (
                    <Card key={index} diary={diary} />
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
  const [hover, setHover] = useState(true);
  return (
    <div>
      {hover ? (
        <div>
          <CardContainer className="front">
            <Title>{diary.id}번째 글쓰기</Title>
            <Content>{diary.content}</Content>
            <button className="bb" onMouseEnter={() => setHover(false)}>
              올려
            </button>
          </CardContainer>
          <Backs className="back">
            <Title>{diary.id}번째 글쓰기</Title>
            <Content>{diary.content}</Content>
            <button className="bb">눌러</button>
          </Backs>
        </div>
      ) : (
        <div>
          <CardContainer className="front" rotate="rotateY(-180deg)">
            <Title>{diary.id}번째 글쓰기3</Title>
            <Content>{diary.content}</Content>
            <button className="bb">올려</button>
          </CardContainer>
          <Backs
            className="back"
            rotate="rotateY(0deg)"
            onMouseLeave={() => setHover(true)}
          >
            <Title>{diary.id}번째 글쓰기2</Title>
            <Content>{diary.content}</Content>
            <button className="bb">눌러</button>
          </Backs>
        </div>
      )}
    </div>
  );
};
