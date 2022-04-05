import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  opacity: 95%;
  display: flex;
  align-items: end;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const Container2 = styled(Container)`
  background-color: floralwhite;
  border: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  height: 88vh;
`;

export const Container3 = styled(Container2)`
  background-color: rgb(254, 205, 133, 1);
  height: 110vh;
  border-radius: 0%;
`;

export const Container4 = styled(Container2)`
  background-color: rgb(255, 135, 70, 1);
  border-radius: 50%;
  height: 80vh;
  margin: 0% 30%;

  > h2 {
    background: floralwhite;
    text-align: center;
    padding: 0.7rem;
    color: black;
    border: 3px solid black;
    border-radius: 10px;
  }

  .community-icon {
    margin: -0.2rem;
  }
`;

export const Container5 = styled(Container2)`
  background-color: rgb(157, 161, 255, 1);
  height: 130vh;
  border-radius: 0%;
`;

export const Container6 = styled(Container2)`
  background-color: rgb(144, 214, 255, 1);
  height: 120vh;
  border-radius: 0%;
`;

export const Image = styled.div`
  height: 85%;
  position: relative;
  left: 1.5%;
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: cover;
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

  animation: up-down 0.8s 10 infinite ease-in-out alternate;

  @keyframes up-down {
    from {
      transform: translatey(0px);
    }
    to {
      transform: translatey(1px);
    }
  }
  opacity: 90%;
`;

export const Image4 = styled(Image3)`
  animation: up-down 1s 10 infinite ease-in-out alternate;
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
  // font-family: 'Syncopate', sans-serif;
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
  font-size: 2.5rem;
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
  font-size: 2rem;
  cursor: pointer;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 25px;
  right: 25px;
  z-index: 500;
  border: 3px solid black;
  background: white;

  &:hover {
    box-shadow: 4px 2px black;
    transition: all 0.2s ease-in-out;
  }
`;
