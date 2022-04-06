import styled from 'styled-components';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';
import { useState } from 'react';
import PublicEntireEssay from './PublicEntireEssay';

export default function PublicEssays({ publicEssay }) {
  // 전체 보기
  const [isEntireEssay, setIsEntireEssay] = useState(false);
  const handleEntireEssay = () => {
    setIsEntireEssay(!isEntireEssay);
  };

  const length = publicEssay.length;

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
        {publicEssay.map((essay, index) => {
          if (index >= current && index <= current + 3)
            return (
              <CardContainer key={index} onClick={handleEntireEssay}>
                <span className="username">{essay.writer}</span>
                <span className="created-at">{essay.createdAt}</span>
                <p className="content">{essay.content}</p>
              </CardContainer>
            );
        })}
      </Wrapper>
      {isEntireEssay && (
        <PublicEntireEssay handleEntireEssay={handleEntireEssay} />
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
