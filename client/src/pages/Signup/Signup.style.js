import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const Section = styled.section`
  width: auto;
  margin: auto;
  border: 1px solid black;
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

export const InputWrap = styled.div``;

export const Label = styled.label`
  font-size: 20px;
`;
