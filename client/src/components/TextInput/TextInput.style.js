import styled from 'styled-components';

export const InputWrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
  &:focus {
    outline: 1px solid var(--primary-light);
    border: none;
  }
`;
