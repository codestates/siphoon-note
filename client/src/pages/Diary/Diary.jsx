import dummy from '../../static/dummyData';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Analysis from '../../components/Analysis';
import Tag from '../../components/Tag';
import { useState } from 'react';
import {
  Container,
  Main,
  SideBar,
  TimerWrapper,
  InputWrapper,
  Input,
  Button,
  ButtonWrapper,
  ButtonWrapper2,
  Card,
  ColorPalette,
  Title,
  Content,
  Image,
  IconWrapper,
  IconWrapper2,
} from './Diary.style';

export default function Diary() {
  // 사용자 인풋 받기
  const [input, setInput] = useState('');
  const handleInput = e => {
    setInput(e.target.value);
  };

  // 글 리스트
  const [diaryList, setDiaryList] = useState(dummy);
  const handleSubmit = () => {
    setInput('');
    setDiaryList([{ id: diaryList.length, content: input }, ...diaryList]);
  };

  // 페이지 전환
  const [pageNum, setPageNum] = useState(1);

  // 테마 인덱스 (뒤로가기 버튼을 눌러도 달라지지 않으려면, 전역에서 관리가 필요하다.)
  const [themeIndex, setThemeIndex] = useState(0);
  const handleColorTheme = index => {
    setThemeIndex(index);
  };
  const colorTheme = [
    { color: 'rgb(255, 135, 70, 0.8)', picture: 'img/object1.svg' },
    { color: 'rgb(254, 205, 133, 0.8)', picture: 'img/object6.svg' },
    { color: 'rgb(157, 161, 255, 0.8)', picture: 'img/object3.svg' },
    { color: 'rgb(144, 214, 255, 0.8)', picture: 'img/object10.svg' },
    { color: 'rgb(247, 178, 206, 0.8)', picture: 'img/object5.svg' },
  ];

  return (
    <>
      <Container color={colorTheme[themeIndex].color}>
        <Image imgUrl={colorTheme[themeIndex].picture}></Image>
        <SideBar>
          <TimerWrapper>10:59</TimerWrapper>
          {/* 인풋창 시작 */}
          <InputWrapper>
            <ButtonWrapper>
              {colorTheme.map((theme, index) => {
                return (
                  <ColorPalette
                    onClick={() => handleColorTheme(index)}
                    key={index}
                    color={theme.color}
                  ></ColorPalette>
                );
              })}
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
          {/* Main 코드 정리 필요함 */}
          {pageNum === 1 ? (
            diaryList.map((diary, index) => {
              return index === 0 ? (
                <Card key={index} animation>
                  <Title>{diary.id}번째 글쓰기</Title>
                  <Content>{diary.content}</Content>
                </Card>
              ) : (
                <Card key={index}>
                  <Title>{diary.id}번째 글쓰기</Title>
                  <Content>{diary.content}</Content>
                </Card>
              );
            })
          ) : (
            <Analysis></Analysis>
          )}
          {pageNum === 1 ? (
            <IconWrapper>
              <IoIosArrowForward
                onClick={() => setPageNum(2)}
              ></IoIosArrowForward>
            </IconWrapper>
          ) : (
            <IconWrapper2>
              <IoIosArrowBack onClick={() => setPageNum(1)}></IoIosArrowBack>
            </IconWrapper2>
          )}
        </Main>
      </Container>
    </>
  );
}
