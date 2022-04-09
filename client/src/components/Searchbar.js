import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import axios from 'axios';
import apiUris from '../config/config';

axios.defaults.withCredentials = true;

export default function Searchbar({ readHandler }) {
  const [userInput, setUserInput] = useState(undefined);

  //! 서버에 필터by검색어 조회하는 로직(토큰 필요)
  const handleSearch = event => {
    axios
      .get(apiUris.READ_ESSAY_LIST_BY_WORD + '/' + userInput, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(res => {
        if (res.status === 200) {
          setDiaryList(res.data);
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
    // setUserInput('');
  };

  const handleDelete = () => {
    //! 서버에 전체 메세지 get 요청 보내기
    readHandler();
    setUserInput('');
  };

  const handleDeleteBackSpace = () => {
    //! 서버에 전체 메세지 get 요청 보내기
    readHandler();
  };

  const handleInput = event => {
    setUserInput(event.target.value);
  };

  return (
    <Wrapper>
      <IconWrapper>
        <BiSearch></BiSearch>
      </IconWrapper>
      <Input
        onKeyUp={event =>
          event.key === 'Enter'
            ? handleSearch(event)
            : event.key === 'Backspace'
            ? handleDeleteBackSpace(event)
            : null
        }
        value={userInput}
        onChange={handleInput}
      ></Input>
      <span onClick={handleDelete}>&times;</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 1.2rem;
  width: 88%;
  height: 5.5%;
  border: 3px solid black;
  display: flex;
  justify-content: center;

  > span {
    display: flex;
    padding: 0px 10px;
    background: rgb(255, 255, 255, 0.9);
    align-items: center;
    cursor: pointer;
  }
`;
const Input = styled.input.attrs({
  placeholder: '검색어를 입력하고 Enter를 누르세요',
})`
  border: none;
  padding: 10px;
  width: 100%;
  height: 100%;
  font-size: 0.9rem;
  background: rgb(255, 255, 255, 0.9);

  ::placeholder {
    font-size: 0.9rem;
  }
  &:focus {
    outline: none;
  }
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 8px;
  font-size: 1.7rem;
  cursor: pointer;
`;
