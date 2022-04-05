import styled from 'styled-components';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';
import { useState } from 'react';
import EntireEssay from './EntireEssay';

export default function PublicEssays() {
  // 전체 보기
  const [isEntireEssay, setIsEntireEssay] = useState(false);
  const handleLandingEntireEssay = () => {
    setIsEntireEssay(!isEntireEssay);
  };

  // 들어가는 데이터 : 유저 이름이 아니라 이메일, 내용, 태그(태그도 들어오나?), 작성한 날짜!
  const publicData = [
    {
      username: '이수리',
      createdAt: '2022-03-22',
      content: '1 ',
    },
    {
      username: '이수리',
      createdAt: '2022-03-22',
      content: '글이 들어갑니다. 글 줄 테스트! 글 줄 테스트! 글 줄 테스트!2 ',
    },
    {
      username: '이수리',
      createdAt: '2022-03-22',
      content: '글이 들어갑니다. 글 줄 테스트! 글 줄 테스트! 글 줄 테스트!3 ',
    },
    {
      username: '이수리',
      createdAt: '2022-03-22',
      content: '글이 들어갑니다. 글 줄 테스트! 글 줄 테스트! 글 줄 테스트! 4 ',
    },
    {
      username: '이수리',
      createdAt: '2022-03-22',
      content: ' 글이 들어갑니다. 글 줄 테스트! 글 줄 테스트! 글 줄 테스트!5',
    },
    {
      username: '이수리',
      createdAt: '2022-03-22',
      content: ' 글이 들어갑니다. 글 줄 테스트! 글 줄 테스트! 글 줄 테스트!6',
    },
    {
      username: '이수리',
      createdAt: '2022-03-22',
      content: ' 글이 들어갑니다. 글 줄 테스트! 글 줄 테스트! 글 줄 테스트! 7 ',
    },
    {
      username: '이수리',
      createdAt: '2022-03-22',
      content: ' 글이 들어갑니다. 글 줄 테스트! 글 줄 테스트! 글 줄 테스트!8 ',
    },
    {
      username: '이수리',
      createdAt: '2022-03-22',
      content: ' 글이 들어갑니다. 글 줄 테스트! 글 줄 테스트! 글 줄 테스트!9 ',
    },
    {
      username: '이수리',
      createdAt: '2022-03-22',
      content: ' 글이 들어갑니다. 글 줄 테스트! 글 줄 테스트! 글 줄 테스트!10 ',
    },
    {
      username: '이수리',
      createdAt: '2022-03-22',
      content:
        ' 글이 들어갑니다. 글 줄 테스트! 글 줄 테스트! 글 줄 테스트!11 글이 들어갑니다. 글 줄 테스트! 글 줄 테스트! 글 줄 테스트!11글이 들어갑니다. 글 줄 테스트! 글 줄 테스트! 글 줄 테스트!11글이 들어갑니다. 글 줄 테스트! 글 줄 테스트! 글 줄 테스트!11글이 들어갑니다. 글 줄 테스트! 글 줄 테스트! 글 줄 테스트!11글이 들어갑니다.글이 들어갑니다. 글 줄 테스트! 글 줄 테스트! 글 줄 테스트!11글이 들어갑니다. 글 줄 테스트! 글 줄 테스트! 글 줄 테스트!11글이 들어갑니다. 글 줄 테스트! 글 줄 테스트! 글 줄 테스트!11글이 들어갑니다. 글 줄 테스트! 글 줄 테스트! 글 줄 테스트!11 글 줄 테스트! 글 줄 테스트! 글 줄 테스트!11',
    },
  ];

  const length = publicData.length;

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current + 4 >= length ? 0 : current + 4);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - (length % 4) : current - 4);
  };

  return (
    <>
      <Wrapper>
        {publicData.map((essay, index) => {
          if (index >= current && index <= current + 3)
            return (
              <CardContainer key={index} onClick={handleLandingEntireEssay}>
                <span className="username">{essay.username}</span>
                <span className="created-at">{essay.createdAt}</span>
                <p className="content">{essay.content}</p>
              </CardContainer>
            );
        })}
      </Wrapper>
      {isEntireEssay && (
        <EntireEssay handleLandingEntireEssay={handleLandingEntireEssay} />
      )}
      <Carousel>
        <MdOutlineKeyboardArrowRight onClick={nextSlide} />
      </Carousel>
      <Carousel2>
        <MdOutlineKeyboardArrowLeft onClick={prevSlide} />
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
  cursor: pointer;
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
  width: 375px;
  height: 514px;
  font-size: 1.3rem;
  padding: 1.3rem;
  box-shadow: 8px 8px 5px rgb(0, 0, 0, 0.2);
  background: floralwhite;
  cursor: pointer;
  overflow: hidden;
  display: block;

  &:hover {
    transform: scale(1.03);
  }

  .username {
    font-size: 1.3rem;
    font-weight: bold;
    display: block;
  }

  .created-at {
    font-size: 1.1rem;
    color: gray;
    display: block;
  }
  .content {
    font-size: 1.1rem;
    display: block;
    margin: 0.5rem 0rem;
  }
`;
