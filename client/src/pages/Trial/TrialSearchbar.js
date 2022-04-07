import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { useEffect, useState } from 'react';

export default function TrialSearchbar({
  entireList,
  setDiaryList,
  notDeletedList,
}) {
  const [userInput, setUserInput] = useState(undefined);

  const handleSearch = event => {
    const filtered = entireList.filter(essay => {
      return !essay.isDeleted && essay.content.includes(userInput);
    });
    setDiaryList(filtered);
    // setUserInput('');
  };

  const handleDelete = () => {
    setDiaryList(notDeletedList);
    // setUserInput('');
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
            ? handleDelete(event)
            : null
        }
        onChange={handleInput}
        value={userInput}
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
