import dummy from '../../static/dummyData';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  Container,
  Main,
  SideBar,
  TimerWrapper,
  InputWrapper,
  Input,
  Button,
  Button1,
  ButtonWrapper,
  ContentBox,
  Content1,
  Card,
  Title,
  Content,
  Emoticon,
  Image,
  RadioButton,
} from './Diary.style';

export default function Diary() {
  // 출력창 데이터 받아오기
  const [input, setInput] = useState(null);
  const handleInput = e => {
    setInput(e.target.value);
  };
  // 다이어리 리스트
  const [diaryList, setDiaryList] = useState(dummy);
  // 클릭한 이미지 보여주기
  const [emojiIndex, setEmojiIndex] = useState(null);
  const handleEmoji = index => {
    setEmojiIndex(index);
  };

  const Emoji = [
    'img/smile.svg',
    'img/sad2.svg',
    'img/heart.svg',
    'img/angry.svg',
    'img/suspicious.svg',
    'img/sad.svg',
  ];

  return (
    <>
      <Container>
        <Image imgUrl=""></Image>
        <SideBar>
          <TimerWrapper>10:59</TimerWrapper>
          <InputWrapper>
            <Input value={input} onChange={handleInput}></Input>
            <ButtonWrapper>
              {Emoji.map((src, index) => {
                return (
                  <Emoticon
                    onClick={() => handleEmoji(index)}
                    key={index}
                    src={src}
                  ></Emoticon>
                );
              })}

              <Button>엔터</Button>
              <Button1>NEW</Button1>
              <Emoticon src={Emoji[emojiIndex]}></Emoticon>
            </ButtonWrapper>
          </InputWrapper>
        </SideBar>
        <Main>
          {diaryList.map((diary, index) => {
            return (
              <Card key={index} color="lightgray">
                <span>{diary.username} </span>
                <Title>나의 {diary.id}번째 일기</Title>
                <Content>{diary.content}</Content>
              </Card>
            );
          })}
        </Main>
        {/* <ContentBox>
          <Content1 imgUrl="img/test3.svg">
            hi?<br></br>
            <br></br>7일 연속 일기를 작성하셨어요!
          </Content1>
          <Content1>hello?</Content1>
          <Content1>nice?</Content1>
        </ContentBox> */}
      </Container>
    </>
  );
}

// const [index, setIndex] = useState(0);
// const colors = [
//   'rgb(254, 205, 133, 0.25)',
//   'rgb(157, 161, 255, 0.1)',
//   'rgb(144, 214, 255, 0.1)',
//   'rgb(255, 135, 70, 0.1)',
//   'rgb(255, 233, 242, 0.1)',
// ];

// const getIndex = () => {
//   if (index === colors.length - 1) {
//     index === 0;
//   } else {
//     setIndex(index + 1);
//   }
//   return 0;
// };

// useEffect(() => {
//   getIndex();
// }, []);

// const color = colors[getIndex()];

// console.log(color);
