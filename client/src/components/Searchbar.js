import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';

export default function Searchbar() {
  const [userInput, setUserInput] = useState(undefined);
  const handleSearch = event => {
    // 서버에 event.target.value 요청 보내기
    event.target.value = '';
  };

  const handleDelete = () => {
    // 서버에 다시 get 요청 보내기
    setUserInput('');
  };

  return (
    <Wrapper>
      <IconWrapper>
        <BiSearch></BiSearch>
      </IconWrapper>
      <Input
        onKeyUp={event => (event.key === 'Enter' ? handleSearch(event) : null)}
        value={userInput}
      ></Input>
      <span onClick={handleDelete}>&times;</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 45px;
  left: 33px;
  width: 86.5%;
  height: 5.5%;
  border: 2.5px solid black;
  display: flex;
  justify-content: space-between;

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
  width: 85%;
  height: 100%;
  font-size: 0.8rem;
  background: rgb(255, 255, 255, 0.9);

  &:focus {
    outline: none;
  }
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 8px;
  font-size: 1.7rem;
  cursor: pointer;
`;
