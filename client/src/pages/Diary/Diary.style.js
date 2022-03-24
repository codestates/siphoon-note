import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.color};
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
  top: 30px;
  left: 20px;
`;

export const Main = styled.div`
  margin-left: 530px;
  margin-right: 40px;
  border-radius: 10px;
  padding: 1rem;
  padding-top: 110px;
  // border: 3px solid black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: max-content auto;
  flex-wrap: wrap;

  gap: 30px;
`;

export const Image = styled.div`
  position: fixed;
  right: 0px;
  left: 85px;
  height: 100vh;
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: contain;
  opacity: 20%;
  align-items: end;

  // animation: up-down 1.4s infinite ease-in-out alternate;

  // @keyframes up-down {
  //   from {
  //     transform: translatey(0px);
  //   }
  //   to {
  //     transform: translatey(-5px);
  //   }
  // }
`;

export const Card = styled.div`
  border: 2.5px solid black;
  // background: ${props => props.color};
  background: white;
  border-radius: 30px;
  height: 210px;
  overflow: hidden;
  flex-wrap: wrap;
  font-size: 1.1rem;
  padding: 0.9rem;
  box-shadow: 10px 5px 5px rgb(0, 0, 0, 0.2);
`;

export const Title = styled.span`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: bold;
  height: 30px;
`;

export const TimerWrapper = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: black;
  margin: 10px;
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
  justify-contents: center;
`;
export const Input = styled.textarea`
  border: 2.5px solid black;
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

export const ColorPalette = styled.span`
  display: inline-block;
  background: ${props => props.color};
  border-radius: 100px;
  width: 25px;
  height: 25px;
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
  font-size: 1.05rem;
  margin: 0.35rem;
  padding: 0.6rem;
  border-radius: 10px;
  &:hover {
    box-shadow: 4px 2px black;
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
