import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.color};
  width: 100%;
  height: 300vh;
`;

export const SideBar = styled.div`
  position: fixed;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  padding: 0.25rem;
  width: 500px;
  top: 41px;
  left: 20px;
`;

export const Main = styled.div`
  margin-left: 530px;
  margin-right: 40px;
  border-radius: 10px;
  padding: 1rem;
  padding-top: 110px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  gap: 26px;
`;

export const Image = styled.div`
  position: fixed;
  right: 0px;
  left: 85px;
  height: 100vh;
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: contain;
  opacity: 25%;
  align-items: end;
`;

export const Card = styled.div`
  border: 2.5px solid black;
  background: white;
  border-radius: 30px;
  height: 230px;
  overflow: hidden;
  flex-wrap: wrap;
  font-size: 1.1rem;
  padding: 0.9rem;
  box-shadow: 8px 8px 5px rgb(0, 0, 0, 0.2);
  animation: ${props =>
    props.animation
      ? 'tilt-in-fwd-tl 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      : null};

  @keyframes tilt-in-fwd-tl {
    0% {
      -webkit-transform: rotateY(-20deg) rotateX(35deg)
        translate(-300px, -300px) skew(35deg, -10deg);
      transform: rotateY(-20deg) rotateX(35deg) translate(-300px, -300px)
        skew(35deg, -10deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0)
        skew(0deg, 0deg);
      transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
  }
`;

export const Title = styled.span`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: bold;
  height: 25px;
  text-align: center;
`;

export const TimerWrapper = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: black;
  margin: 3px;
  height: 60px;
  width: 400px;
`;
export const InputWrapper = styled.div`
  border-radius: 20px;
  border: 2.5px solid black;
  width: 90%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled.textarea.attrs({
  placeholder: 'Hello :)',
})`
  border: 2.5px solid black;
  margin-top: 3px;
  width: 94%;
  height: 100%;
  border-radius: 20px;
  padding: 20px;

  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  left: 5px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2px;
`;

export const ButtonWrapper2 = styled(ButtonWrapper)`
  justify-content: flex-end;
  left: 0px;
  margin-right: 5px;
  margin-bottom: 2px;
`;

export const ColorPalette = styled.span`
  display: inline-block;
  background: ${props => props.color};
  border-radius: 100px;
  width: 20px;
  height: 20px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Button = styled.button`
  font-weight: 500;
  display: flex;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: black;
  border: solid;
  background: white;
  font-size: 0.85rem;
  margin: 0.3rem;
  padding: 0.55rem;
  border-radius: 10px;
  &:hover {
    box-shadow: 2px 1px black;
    transition: all 0.2s ease-in-out;
  }
`;

export const Button1 = styled(Button)`
  font-weight: 500;
  display: flex;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: black;
  border: solid;
  background: white;
  font-size: 1.05rem;
  margin: 0.35rem;
  padding: 0.6rem;
  border-radius: 10px;
  &:hover {
    box-shadow: 4px 2px black;
    transition: all 0.2s ease-in-out;
  }
`;

export const Content = styled.div`
  backbround-size: cover;
`;

export const ContentBox = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
`;

export const Content1 = styled.div`
  padding: 0.25rem;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: cover;
  opacity: 80%;
  font-size: 1.3rem;
  font-weight: bold;
`;

export const IconWrapper = styled.span`
  position: absolute;
  color: black;
  right: 12px;
  bottom: 43%;
  font-size: 2rem;
  cursor: pointer;

  animation: left-right 0.6s infinite ease-in-out alternate;
  @keyframes left-right {
    from {
      transform: translateX(5px);
    }
    to {
      transform: translateX(0px);
    }
  }
`;

export const IconWrapper2 = styled.span`
  position: absolute;
  color: black;
  left: 500px;
  bottom: 43%;
  font-size: 2rem;
  cursor: pointer;

  animation: left-right 0.6s infinite ease-in-out alternate;
  @keyframes left-right {
    from {
      transform: translateX(3px);
    }
    to {
      transform: translateX(0px);
    }
  }
`;
