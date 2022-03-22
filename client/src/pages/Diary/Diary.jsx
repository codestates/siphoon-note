import {
  Container,
  Main,
  SideBar,
  ContentBox,
  Content1,
  Content2,
  Content3,
} from './Diary.style';

export default function Diary() {
  return (
    <>
      <Container>
        <SideBar>sidebar</SideBar>
        <Main>section</Main>
        <ContentBox>
          <Content1>Content1</Content1>
          <Content2>Content2</Content2>
          <Content3>Content3</Content3>
        </ContentBox>
      </Container>
    </>
  );
}
