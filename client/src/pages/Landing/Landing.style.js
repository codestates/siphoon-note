import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: cover;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  min-height: 100vh;
`;

export const Button = styled.a`
  color: black;
  cursor: pointer;
  font-size: 6rem;
  font-weight: bold;
  text-decoration: none;
`;
