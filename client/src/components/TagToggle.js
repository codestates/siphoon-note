import { TiArrowSortedDown } from 'react-icons/ti';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';

import styled from 'styled-components';
import axios from 'axios';
import apiUris from '../config/config';
import { useState } from 'react';

export default function TagToggle({
  setIsTagsDropdown,
  isTagsDropdown,
  setIsTrashDropdown,
  readHandler,
}) {
  const [tagList, setTagList] = useState(['SipboonDiary', '다섯자태그']);

  //! 서버에 태그 목록 조회하는 로직 (토큰 필요)
  const handleTagList = () => {
    if (isTagsDropdown === false) {
      axios
        .get(
          apiUris.READ_TAG_LIST /
            {
              headers: {
                authorization: { 'Content-Type': 'application/json' },
              },
            }
        )
        .then(res => {
          if (res.status === 200) {
            // data 객체에 담겨 오는 게 맞나?
            setTagList(res.data);
          }
        })
        .catch(error => console.log(error));
    }
  };

  //! 서버에 필터by태그 조회하는 로직 (토큰 필요, 전체 보기 작업에 대한 고민)
  const filterByTag = event => {
    if (event.target.textContent === '전체보기🔎️') {
      return readHandler();
    }
    axios
      .get(apiUris.READ_ESSAY_LIST_BY_WORD + '/' + event.target.textContent, {
        headers: { authorization: { 'Content-Type': 'application/json' } },
      })
      .then(res => {
        if (res.status === 200) {
          setDiaryList(res.data);
        }
      })
      .catch(error => console.log(error));
  };

  const handleDropdown = () => {
    setIsTrashDropdown(false);
    setIsTagsDropdown(!isTagsDropdown);
  };

  const length = tagList.length;
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent(current + 18 >= length ? 0 : current + 18);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - (length % 18) : current - 18);
  };

  return (
    <>
      <Wrapper onClick={handleTagList}>
        <div>Tags</div>
        <span onClick={handleDropdown}>
          <TiArrowSortedDown></TiArrowSortedDown>
        </span>
      </Wrapper>
      {isTagsDropdown && (
        <Container>
          <div>
            <span onClick={filterByTag}>전체보기🔎️</span>
            {tagList.map((tag, index) => {
              if (index >= current && index <= current + 18) {
                return (
                  <span key={index} onClick={event => filterByTag(event)}>
                    {tag}
                  </span>
                );
              }
            })}
          </div>
          <span className="carousel">
            <Carousel2>
              <MdOutlineKeyboardArrowLeft onClick={prevSlide} />
            </Carousel2>
            <Carousel>
              <MdOutlineKeyboardArrowRight onClick={nextSlide} />
            </Carousel>
          </span>
        </Container>
      )}
    </>
  );
}

const Carousel = styled.div`
  width: 23px;
  height: 23px;
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  border: 1.9px solid black;
  border-radius: 100%;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  background: rgb(211, 211, 211, 0.5);
  margin: 0.3rem 0.3rem 0.5rem 0.3rem;
`;

const Carousel2 = styled(Carousel)`
  left: 1%;
`;

const Container = styled.div`
  border: 3px solid black;
  width: 88%;
  background: white;
  margin: 0px;
  border-top: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3px 8px;

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    max-height: auto;

    > span {
      padding: 6px;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  > .carousel {
    display: flex;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  margin-top: 1.3rem;
  font-weight: 500;
  font-size: 1.2rem;
  width: 88%;
  height: auto;
  border: 3px solid black;
  display: flex;
  justify-content: space-between;
  padding: 0px 9px;
  align-items: center;
  background: rgb(211, 211, 211, 0.9);
  > span {
    cursor: pointer;
    font-size: 1.2rem;
  }
`;
