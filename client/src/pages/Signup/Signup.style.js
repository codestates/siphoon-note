import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const Section = styled.div`
  width: auto;
  margin: auto;
`;

export const WrapInput = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const InputWrap = styled.div`
  margin: 80px 10px;
  grid-area: 1 / 2 / 5 / 4;
  border: 1px solid black;
`;
export const InputWrap2 = styled.div`
  margin: 100px auto;
  grid-area: 1 / 4 / 5 / 6;
  width: 100%;
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

export const TextWrap = styled.div`
  border: 1px solid black;
  margin: 30px 3px;
`;

export const TextP = styled.div``;
export const Span = styled.span`
  color: ${props => props.color};
`;

export const Label = styled.label`
  font-size: 20px;
`;

export const Submitwrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
