// import React from 'react';
// import Sel from './Select.style';

import styled from 'styled-components';

const SelectBoxWrapper = styled.div`
  display: flex;
`;
const IconSVG = styled.svg`
  margin-left: -28px;
  align-self: center;
  width: 24px;
  height: 24px;
`;

// focus 시에 border-color를 red로 변경
export const Select = styled.select`
  margin: 0;
  min-width: 0;
  display: block;
  width: 100%;
  padding: 8px 8px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid;
  border-radius: 4px;
  color: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  &:focus {
    border-color: red;
  }
`;
export default function Selectbox(props) {
  const handleChange = e => {
    // event handler
    console.log(e.target.value);
  };

  return (
    <SelectBoxWrapper>
      <Select onChange={handleChange}>
        {props.options.map(option => (
          <option
            key={option.value}
            value={option.value}
            defaultValue={props.defaultValue === option.value}
          >
            {option.name}
          </option>
        ))}
      </Select>
      <IconSVG
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 14L16 6H4L10 14Z"
          fill="#1A1A1A"
        />
      </IconSVG>
    </SelectBoxWrapper>
  );
}

//https://blog.toycrane.xyz/react%EC%97%90%EC%84%9C-select-box-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-a20e2bf082b2
