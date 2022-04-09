import { TiArrowSortedDown } from 'react-icons/ti';
import { FiTrash2 } from 'react-icons/fi';
import { MdSettingsBackupRestore } from 'react-icons/md';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';

import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import apiUris from '../config/config';

axios.defaults.withCredentials = true;

export default function Trash({
  isTrashDropdown,
  setIsTrashDropdown,
  setIsTagsDropdown,
  accessToken,
  readHandler,
}) {
  const dummy = [
    { essayId: 0, title: 'deleted message 0' },
    { essayId: 1, title: 'deleted message 1' },
    { essayId: 2, title: 'deleted message 2' },
    { essayId: 3, title: 'deleted message 3' },
    { essayId: 4, title: 'deleted message 4' },
    { essayId: 5, title: 'deleted message 5' },
    { essayId: 6, title: 'deleted message 6' },
  ];

  const handleDropdown = () => {
    setIsTagsDropdown(false);
    setIsTrashDropdown(!isTrashDropdown);
  };

  const [trashList, setTrashList] = useState(dummy);

  const length = trashList.length;
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent(current + 5 >= length ? 0 : current + 5);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - (length % 5) : current - 5);
  };

  //! 서버에 휴지통 목록 조회하는 로직 (토큰 필요)
  const handleTrashList = () => {
    if (isTrashDropdown === false) {
      axios
        .get(apiUris.READ_TRASH_LIST, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(res => {
          if (res.status === 200) {
            setTrashList(res.data);
          }
        })
        .catch(err => {
          console.log(err);
          if (err.status === 401) {
            return alert(err.message);
          }
          if (err.status === 500) {
            return alert(err.message);
          }
        });
    }
  };

  //! 서버에 휴지통 목록 복원/삭제 요청하는 로직 (토큰 필요)
  const handleDelete = index => {
    axios
      .delete(apiUris.DELETE_TRASH_BY_ID + '/' + trashList[index].essayId, {
        headers: { authorization: { 'Content-Type': 'application/json' } },
      })
      .then(res => {
        if (res.status === 200) {
          //* case1. 다시 휴지통 목록 조회하기
          handleTrashList();
          //* case2. 클라사이드에서 필터링 하기
          // const filtered = trashList.filter(trash => {
          //   return trash.essayId !== res.permanetlyDeletedEssayId;
          // });
          // setTrashList(filtered);
        }
      })
      .catch(err => {
        console.log(err);
        if (err.status === 401) {
          return alert(err.message);
        }
        if (err.status === 500) {
          return alert(err.message);
        }
      });
  };

  const handleRestore = index => {
    axios
      .patch(apiUris.RESTORE_ESSAY_BY_ID + '/' + trashList[index].essayId, {
        headers: { authorization: { 'Content-Type': 'application/json' } },
      })
      .then(res => {
        if (res.status === 200) {
          // 휴지통 목록 조회하고 메세지 다시 불러오기
          readHandler();
        }
      })
      .catch(err => {
        console.log(err);
        if (err.status === 401) {
          return alert(err.message);
        }
        if (err.status === 500) {
          return alert(err.message);
        }
      });
  };

  return (
    <>
      <Wrapper onClick={handleTrashList}>
        <div>Trash</div>
        <span onClick={handleDropdown}>
          <TiArrowSortedDown></TiArrowSortedDown>
        </span>
      </Wrapper>
      {isTrashDropdown && (
        <Container>
          {trashList.map((trash, index) => {
            if (index >= current && index <= current + 5) {
              return (
                <div key={index}>
                  <span className="title">{trash.title}</span>
                  <span onClick={() => handleRestore(index)}>
                    <MdSettingsBackupRestore></MdSettingsBackupRestore>
                  </span>
                  <span onClick={() => handleDelete(index)}>
                    <FiTrash2></FiTrash2>
                  </span>
                </div>
              );
            }
          })}
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
  background: white;
  border: 1.9px solid black;
  border-radius: 100%;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  margin: 0.5rem 0.3rem;
  background: rgb(211, 211, 211, 0.5);
  margin: 0.3rem 0.3rem 0.5rem 0.3rem;
`;

const Carousel2 = styled(Carousel)`
  left: 1%;
`;

const Container = styled.ul`
  border: 3px solid black;
  width: 88%;
  list-style: none;
  background: white;
  margin: 0px;
  border-top: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 3px 8px;

  > div {
    display: flex;

    > span {
      padding: 0 1px;
      cursor: pointer;
    }
  }
  .title {
    flex: 1 1 0;
  }
  > .carousel {
    display: flex;
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  margin-top: 0.7rem;
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
