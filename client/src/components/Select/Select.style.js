import styled from 'styled-components';

export const SelectBoxWrapper = styled.div`
  display: flex;
`;
export const IconSVG = styled.svg`
  margin-left: -28px;
  align-self: center;
  width: 24px;
  height: 24px;
`;

// focus 시에 border-color를 red로 변경
export const Select1 = styled.select`
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
