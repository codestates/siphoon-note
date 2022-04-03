import styled from 'styled-components';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';

export default function PublicEssays() {
  const data = [
    {
      username: '이수리',
      createdAt: '2022-03-22',
      content: '글이 들어갑니다. ',
    },
    {
      username: '이수리',
      createdAt: '2022-03-22',
      content: '글이 들어갑니다. ',
    },
    {
      username: '이수리',
      createdAt: '2022-03-22',
      content: '글이 들어갑니다. ',
    },
    {
      username: '이수리',
      createdAt: '2022-03-22',
      content:
        ' 글이 들어갑니다.글이 들어갑니다.글이 들어갑니다.글이 들어갑니다. ',
    },
  ];

  return (
    <>
      <Wrapper>
        {data.map((essay, index) => {
          return (
            <CardContainer key={index}>
              <span className="username">{essay.username}</span>
              <span className="created-at">{essay.createdAt}</span>
              <p className="content">{essay.content}</p>
            </CardContainer>
          );
        })}
      </Wrapper>
      <Carousel>
        <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
      </Carousel>
      <Carousel2>
        <MdOutlineKeyboardArrowLeft></MdOutlineKeyboardArrowLeft>
      </Carousel2>
    </>
  );
}

const Carousel = styled.div`
  position: absolute;
  right: 1%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: 3px solid black;
  border-radius: 100%;
  font-size: 4rem;
`;

const Carousel2 = styled(Carousel)`
  left: 1%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  padding: 5rem;
`;

const CardContainer = styled.div`
  flex: 1 1 0;
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  border-radius: 22px;
  min-width: 360px;
  min-height: 500px;
  font-size: 1.3rem;
  padding: 1.3rem;
  box-shadow: 8px 8px 5px rgb(0, 0, 0, 0.2);
  background: floralwhite;

  .username {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .created-at {
    font-size: 1.1rem;
    color: gray;
  }
  .content {
    font-size: 1.1rem;
  }
`;
