import styled from 'styled-components';

export const Container = styled.div`
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: cover;
  // border: 3px solid black;
`;

export const SideBar = styled.div`
  position: fixed;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  padding: 0.25rem;
  // border: 3px solid black;
  width: 500px;
  top: 25px;
  left: 10px;
`;

export const Main = styled.div`
  margin-left: 530px;
  margin-right: 17px;
  border-radius: 10px;
  padding: 1rem;
  padding-top: 110px;
  // border: 3px solid black;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: max-content auto;
  gap: 30px;
`;

export const Card = styled.div`
  border: 2.5px solid rgb(157, 161, 255, 0.2);
  background: ${props => props.color};
  border-radius: 30px;
  height: 250px;
  overflow: hidden;
  padding: 20px;
  font-size: 1.1rem;
`;

export const Title = styled.span`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: bold;
  height: 30px;
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

export const TimerWrapper = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin: 10px;
  height: 60px;
  width: 400px;
`;
export const InputWrapper = styled.div`
  // background: gray;
  border-radius: 20px;
  border: 2px solid gray;
  width: 90%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
`;
export const Input = styled.textarea`
  border: 2px solid gray;
  margin-top: 30px;
  width: 90%;
  height: 75%;
  border-radius: 20px;
  // border: none;
  padding: 20px;

  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 13px;
  display: flex;
  justify-contents: center;
  align-items: center;
`;

export const Emoticon = styled.img`
  width: 33px;
  src: ${props => props.src};
  margin: 3px;
  cursor: pointer;
  border: none;
  padding: 1px;
  border-radius: 5px;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Button = styled.button`
  margin-left: 30px;
  border-radius: 10px;
  background: white;
`;

export const Button1 = styled(Button)`
  margin-left: 10px;
  cursor: pointer;

  &:active {
    background: black;
  }
`;

export const Image = styled.div`
  position: fixed;
  right: 0px;
  width: 100vw;
  height: 100vh;
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: full;
  opacity: 15%;
  align-items: end;

  animation: up-down 1.4s infinite ease-in-out alternate;

  @keyframes up-down {
    from {
      transform: translatey(0px);
    }
    to {
      transform: translatey(-5px);
    }
  }
`;
