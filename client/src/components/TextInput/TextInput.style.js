import styled from 'styled-components';

export const InputWrap = styled.div`
  width: 100%;
  margin-bottom: 13px;
`;

export const Label = styled.label`
  font-size: 1.2rem;
`;

export const Span = styled.label`
  color: red;
`;

export const Input = styled.input`
  width: 100%;
  height: 55px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.1rem;
  margin-top: 7px;
  &:focus {
    outline: 4px solid primary-light;
    border: none;
  }
`;
