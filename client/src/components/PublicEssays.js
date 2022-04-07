import styled from 'styled-components';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';
import { useState } from 'react';
import PublicEntireEssay from './PublicEntireEssay';

export default function PublicEssays({ publicEssay }) {
  console.log('rendenred?');
  const length = publicEssay.length;
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent(current + 4 >= length - 1 ? 0 : current + 4);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 4 : current - 4);
  };

  return (
    <>
      <Wrapper>
        {publicEssay.map((essay, index) => {
          if (index >= current && index <= current + 3) {
            return <PublicCard essay={essay} key={index}></PublicCard>;
          }
        })}
      </Wrapper>
      <Carousel>
        <MdOutlineKeyboardArrowRight onClick={nextSlide} />
      </Carousel>
      <Carousel2>
        <MdOutlineKeyboardArrowLeft onClick={prevSlide} />
      </Carousel2>
    </>
  );
}

export const PublicCard = ({ essay }) => {
  // 전체 보기
  const [isEntireEssay, setIsEntireEssay] = useState(false);
  const handleEntireEssay = () => {
    setIsEntireEssay(!isEntireEssay);
  };
  return (
    <>
      {isEntireEssay && (
        <PublicEntireEssay
          essay={essay}
          handleEntireEssay={handleEntireEssay}
        />
      )}
      <CardContainer onClick={handleEntireEssay}>
        <span className="username">{essay.writer}</span>
        <span className="created-at">{essay.createdAt}</span>
        <p className="content">{essay.content}</p>
      </CardContainer>
    </>
  );
};

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
  justify-content: space-around;
  gap: 3.3rem;
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
  min-width: 320px;
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
