import { useState } from 'react';
import {
  Container,
  Main,
  SideBar,
  TimerWrapper,
  InputWrapper,
  Input,
  Button,
  ContentBox,
  Content1,
  Card,
} from './Diary.style';

export default function Diary() {
  const [input, setInput] = useState(null);
  console.log(input);

  const handleInput = e => {
    setInput(e.target.value);
  };

  return (
    <>
      <Container>
        <SideBar>
          <TimerWrapper>TIMER</TimerWrapper>
          <InputWrapper>
            <Input value={input} onChange={handleInput}></Input>
            <Button>Submit</Button>
            <Button>Reset</Button>
          </InputWrapper>
        </SideBar>
        <Main></Main>
        <ContentBox>
          <Content1 imgUrl="img/test3.svg">
            hi?<br></br>
            <br></br>7일 연속 일기를 작성하셨어요!
          </Content1>
          <Content1 imgUrl="img/test7.svg">hello?</Content1>
          <Content1 imgUrl="img/test11.svg">nice?</Content1>
        </ContentBox>
      </Container>
    </>
  );
}
