import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 0.2fr 1fr 0.3fr 0fr;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    'nav nav nav nav'
    'sidebar main main main'
    'sidebar content content content'
    'sidebar footer footer footer';
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: cover;
`;

export const Main = styled.div`
  border-radius: 10px;
  grid-area: main;
  padding: 0.25rem;
  border: 3px solid black;
  display: grid;

  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 0.3fr 0.3fr 0.3fr;
  overflow: auto;
`;

export const Card = styled.div`
  border: 3px solid black;
`;

export const SideBar = styled.div`
  top: 105px;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  grid-area: sidebar;
  padding: 0.25rem;
  border: 3px solid black;
  border-radius: 10px;
`;
export const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
`;

export const Content1 = styled.div`
  padding: 0.25rem;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 3px solid black;
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: cover;
  opacity: 80%;
  font-size: 1.3rem;
  font-weight: bold;
`;

export const TimerWrapper = styled.div`
  border: 1px solid black;
  margin: 10px;
`;
export const InputWrapper = styled.div`
  border-radius: 20px;
  background: white;
  width: 80%;
  height: 50%;
  padding: 5px;
  border: 1px solid black;
`;
export const Input = styled.textarea`
  margin-top: 10px;
  width: 90%;
  height: 80%;
  border-radius: 20px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  float: right;
  padding: 5px;
  margin: 15px;
  border-radius: 10px;
`;
