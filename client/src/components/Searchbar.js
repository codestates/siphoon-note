import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export default function Searchbar() {
  return (
    <Wrapper>
      <Input></Input>
      <span>&times;</span>
      <IconWrapper>
        <BiSearch></BiSearch>
      </IconWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 33px;
  width: 86.5%;
  height: 5.5%;
  border: 2.5px solid black;
  display: flex;
  justify-content: space-between;

  > span {
    display: flex;
    padding: 0px 10px;
    background: white;
    align-items: center;
  }
`;
const Input = styled.input.attrs({ placeholder: 'Search' })`
  border: none;
  padding: 10px;
  width: 90%;
  height: 100%;
  font-size: 0.8rem;
  &:focus {
    outline: none;
    background: rgb(255, 255, 255);
  }
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  // margin-right: 7px;
  padding: 0px 8px;
  font-size: 1.7rem;
  cursor: pointer;
`;
