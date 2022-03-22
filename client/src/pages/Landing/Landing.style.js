import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: full;
  opacity: 85%;
  align-items: end;
  display: flex;
`;

export const Image = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: full;
  opacity: 85%;
  align-items: end;

  animation: up-down 1.4s infinite ease-in-out alternate;

  @keyframes up-down {
    from {
      transform: translatey(0px);
    }
    to {
      transform: translatey(-10px);
    }
  }
`;

export const Main = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-right: 120px;
  text-align: center;
  align-items: center;
  min-height: 100vh;
`;

export const Button = styled.button`
  color: black;
  cursor: pointer;
  font-size: 4.5rem;
  font-weight: bold;
  border: none;
  background: white;
  &:hover {
    text-decoration: underline;
  }
`;

export const Span = styled.span`
  margin-top: 205px;
  margin-bottom: 20px;
  font-size: 1.5rem;
`;
