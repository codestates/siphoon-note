import styled from 'styled-components';

export const Main = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
`;

export const Section = styled.section`
  justify-content: center;
  margin: 10px;
  padding: 10px;
  text-align: center;
  align-items: center;
`;

export const InputWrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-size: 20px;
  border: 1px solid black;
  margin-top: 100px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
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
// .attrs(props => ({
//   // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
//   role: 'dialog',
// }))`
//   display: flex;
//   justify-content: center;
//   text-align: center;
//   align-items: center;
//   min-height: 100vh;

//   > .dd {
//     background-color: black;
//     color: white;
//     border: 1px solid yellow;
//   }
// `;

export const Option = styled.option`
  font-size: 20px;
`;
// .attrs(props => ({
//   // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
//   role: 'dialog',
// }))`
//   justify-content: center;
//   text-align: center;
//   box
// `;
