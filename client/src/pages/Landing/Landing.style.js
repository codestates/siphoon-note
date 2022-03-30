import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 85%;
  align-items: end;
  display: flex;

  // > img {
  //   position: fixed;
  //   top: -20px;
  //   left: -40px;
  //   width: 15%;
  // }
`;

export const Image = styled.div`
  width: 85%;
  height: 95%;
  position: relative;
  left: 0px;
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: cover;
  opacity: 85%;
  align-items: end;
  flex: 1.2 1 0;

  animation: up-down 1.7s infinite ease-in-out alternate;

  @keyframes up-down {
    from {
      transform: translatey(0px);
    }
    to {
      transform: translatey(-5px);
    }
  }
`;

export const Main = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // margin-right: 120px;
  text-align: center;
  align-items: center;
  min-height: 100vh;
  flex: 1 1 0;
`;

export const Button = styled.button`
  color: black;
  cursor: pointer;
  font-size: 80px;
  font-weight: bold;
  border: none;
  background: rgb(254, 205, 133, 0.02);
  &:hover {
    opacity: 90%;
  }
`;

export const Span = styled.span`
  border-bottom: 3.5px solid #fecd85;
  border-radius: 3px;
  padding: 5px;
  // margin-top: 210px;
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: rgb(0, 0, 0, 0.9);
  font-weight: bold;
`;

export const Icon = styled.span`
  position: absolute;
  font-size: 3rem;
  // right: 200px;
  bottom: 0px;

  a:link {
    color: black;
  }
  a:visited {
    color: black;
  }
  animation: up-down 0.4s 10 ease-in-out alternate;

  @keyframes up-down {
    from {
      transform: translatey(0px);
    }
    to {
      transform: translatey(-10px);
    }
  }
`;

export const Icon2 = styled.div`
  position: fixed;
  font-size: 3.2rem;
  cursor: pointer;
  bottom: 15px;
  right: 30px;
  z-index: 500;
`;
