import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 95%;
  align-items: end;
  display: flex;
  // justify-content: center;
`;

export const Container2 = styled(Container)`
  background-color: rgb(254, 205, 133, 0.8);
`;

export const Container3 = styled(Container)`
  background-color: rgb(255, 135, 70, 0.8);
`;

export const Container4 = styled(Container)`
  background-color: rgb(157, 161, 255, 0.8);
`;

export const Container5 = styled(Container)`
  background-color: rgb(144, 214, 255, 0.8);
`;

export const Container6 = styled(Container)`
  background-color: rgb(247, 178, 206, 0.8);
`;

export const Image = styled.div`
  height: 84%;
  position: relative;
  left: 2%;
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: cover;
  align-items: end;
  flex: 1 1 0;
`;

export const Image2 = styled.img`
  position: absolute;
  height: ${props => props.height}%;
  left: ${props => props.left}%;
  right: ${props => props.right}%;
  bottom: ${props => props.bottom}%;
  top: ${props => props.top}%;
  object-fit: cover;

  &:hover {
    animation: spin 2s infinite linear;
  }

  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-ms-keyframes spin {
    100% {
      -ms-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Image3 = styled(Image2)`
  &:hover {
    animation: none;
  }

  opacity: 80%;

  animation: up-down 1.5s infinite ease-in-out alternate;

  @keyframes up-down {
    from {
      transform: translatey(0px);
    }
    to {
      transform: translatey(-0.5px);
    }
  }
`;

export const Image4 = styled(Image3)`
  animation: none;
  // left-right 0.5s infinite ease-in-out alternate;

  // @keyframes left-right {
  //   from {
  //     transform: translatex(0px);
  //   }
  //   to {
  //     transform: translatex(1px);
  //   }
  // }
`;

export const Main = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  min-height: 100vh;
  flex: 1 1 0;
`;

export const Button = styled.button`
  color: black;
  cursor: pointer;
  font-size: 6.5rem;
  font-weight: bold;
  border: none;
  background: rgb(254, 205, 133, 0.02);
  &:hover {
    opacity: 90%;
  }
`;

export const Span = styled.span`
  border-bottom: 5px solid #fecd85;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: rgb(0, 0, 0, 0.9);
  font-weight: bold;
`;

export const Icon = styled.span`
  position: absolute;
  font-size: 2.8rem;
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
  font-size: 3.5rem;
  cursor: pointer;
  bottom: 15px;
  right: 30px;
  z-index: 500;
`;
