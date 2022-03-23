import styled from 'styled-components';

export const InputWrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-size: 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  margin-top: 5px;
  &:focus {
    outline: 4px solid primary-light;
    border: none;
  }
`;
