import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import { FiTrash2 } from 'react-icons/fi';
import { MdSettingsBackupRestore } from 'react-icons/md';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';

export default function TrialTrash({
  trashList,
  setTrashList,
  isTrashDropdown,
  setIsTrashDropdown,
  setIsTagsDropdown,
  diaryList,
  entireList,
  setEntireList,
  setDiaryList,
}) {
  // const [list, setList] = useState(trashList);
  // useEffect(() => {
  // setList(trashList);
  // }, [trashList]);
  // console.log(trashList.length);
  // console.log(list.length);
  const handleDropdown = () => {
    setIsTagsDropdown(false);
    setIsTrashDropdown(!isTrashDropdown);
  };

  const length = trashList.length;
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent(current + 5 >= length ? 0 : current + 5);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - (length % 5) : current - 5);
  };

  const handleDelete = selected => {
    // 트래쉬리스트에서 삭제한다.
    const filtered = trashList.filter(trash => {
      return selected.essayId !== trash.essayId;
    });
    setTrashList(filtered);
  };

  const handleRestore = selected => {
    console.log(selected);
    selected.isDeleted = false;
    const filtered = trashList.filter(trash => {
      return selected.essayId !== trash.essayId;
    });
    setTrashList(filtered);
    setEntireList([selected, ...diaryList]);
  };

  return (
    <>
      <Wrapper>
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
                  <span className="title">
                    {trash.createdAt} {trash.content.slice(0, 20)}
                  </span>
                  <span onClick={() => handleRestore(trash)}>
                    <MdSettingsBackupRestore></MdSettingsBackupRestore>
                  </span>
                  <span onClick={() => handleDelete(trash)}>
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
