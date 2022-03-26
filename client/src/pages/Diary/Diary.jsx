import dummy from '../../static/dummyData';
import colorTheme from '../../colorTheme';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdLightbulbOutline } from 'react-icons/md';
import Analysis from '../../components/Analysis';
import Tag from '../../components/Tag';
import Keyword from '../../components/Keyword';
import { useState } from 'react';
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
  Card,
  ColorPalette,
  Title,
  Content,
  Image,
  IconWrapper,
  IconWrapper2,
} from './Diary.style';

export default function Diary() {
  // 키워드 모달
  const [isKeywordModal, setIsKeywordModal] = useState(false);
  const handleKeyword = () => {
    setIsKeywordModal(!isKeywordModal);
  };

  // 사용자 인풋 받기
  const [input, setInput] = useState('');
  const handleInput = e => {
    setInput(e.target.value);
  };
  // 다이어리 리스트
  const [diaryList, setDiaryList] = useState(dummy);
  const handleSubmit = () => {
    setInput('');
    setDiaryList([{ id: diaryList.length, content: input }, ...diaryList]);
  };

  // 페이지 전환
  const [pageNum, setPageNum] = useState(0);

  // 테마 인덱스 (뒤로가기 버튼을 눌러도 달라지지 않으려면, 전역에서 관리가 필요하다.)
  const [themeIndex, setThemeIndex] = useState(0);
  const handleColorTheme = index => {
    setThemeIndex(index);
  };

  return (
    <>
      <Container color={colorTheme[themeIndex].color}>
        {isKeywordModal ? (
          <Keyword
            themeIndex={themeIndex}
            handleKeyword={handleKeyword}
          ></Keyword>
        ) : null}
        <Image imgUrl={colorTheme[themeIndex].picture}></Image>
        <SideBar>
          <TimerWrapper>10:59</TimerWrapper>

          <InputWrapper>
            <ButtonWrapper>
              <div>
                {colorTheme.map((theme, index) => {
                  return (
                    <ColorPalette
                      onClick={() => handleColorTheme(index)}
                      key={index}
                      color={theme.color}
                    ></ColorPalette>
                  );
                })}
              </div>
              <span onClick={handleKeyword}>
                <MdLightbulbOutline></MdLightbulbOutline>
              </span>
            </ButtonWrapper>
            <Input value={input} onChange={handleInput}></Input>

            <ButtonWrapper2>
              <Tag></Tag>
              <Button>리셋</Button>
              <Button onClick={handleSubmit}>남기기</Button>
            </ButtonWrapper2>
          </InputWrapper>
        </SideBar>
        <Main>
          {pageNum === 0 ? (
            diaryList.map((diary, index) => {
              return (
                <Card key={index}>
                  <Title>{diary.id}번째 글쓰기</Title>
                  <Content>{diary.content}</Content>
                </Card>
              );
            })
          ) : (
            <Analysis></Analysis>
          )}
          {pageNum === 0 ? (
            <IconWrapper>
              <IoIosArrowForward
                onClick={() => setPageNum(1)}
              ></IoIosArrowForward>
            </IconWrapper>
          ) : (
            <IconWrapper2>
              <IoIosArrowBack onClick={() => setPageNum(0)}></IoIosArrowBack>
            </IconWrapper2>
          )}
        </Main>
      </Container>
    </>
  );
}
