import styled from 'styled-components';
import { useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';

export default function TagToggle() {
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <Wrapper>
      <div>TAGS</div>
      <span>
        <TiArrowSortedDown></TiArrowSortedDown>
      </span>
    </Wrapper>
  );
}

export const DropDownTag = () => {};

const Wrapper = styled.div`
  margin-top: 1rem;
  font-weight: 500;
  font-size: 1.05rem;
  width: 88%;
  height: 28px;
  border: 2.5px solid black;
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
