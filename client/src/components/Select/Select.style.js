import styled from 'styled-components';

export const Select = styled.select`
  margin: 0;
  height: 55px;
  min-width: 0;
  margin-top: 7px;
  display: block;
  width: 100%;
  padding: 5px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid gray;
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
  &:focus {
    border-color: black;
  }
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

export const Select2 = styled.select`
  margin: 0;
  min-width: 0;
  display: block;
  width: 100%;
  padding: 8px 8px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid gray;
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
  &:focus {
    border-color: black;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 55px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.1rem;
  margin-top: 5px;
  margin-bottom: 0.5rem;
  &:focus {
    outline: 4px solid primary-light;
    border: none;
  }
`;
