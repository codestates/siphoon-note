import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.color};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SideBar = styled.div`
  position: sticky;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-end;
  padding: 0.25rem;
  width: 32rem;
  top: 34px;
  margin-top: 42px;
  left: 18px;
  flex: 2 1 0;
`;

export const Image = styled.div`
  position: fixed;
  right: 0px;
  left: 85px;
  height: 100vh;
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: contain;
  opacity: 15%;
  align-items: end;
`;

export const TimerWrapper = styled.div`
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  color: black;
  margin: 3px;
  height: 60px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const InputWrapper = styled.div`
  border-radius: 20px;
  border: 3px solid black;
  width: 90%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;

  :focus-within {
    height: 66%;
    transition: all 0.5s ease-in-out;
  }
`;
export const Input = styled.textarea.attrs({
  placeholder: '글을 쓰기 시작하면, 타이머가 작동됩니다. :)',
})`
  border: 3px solid black;
  width: 94%;
  height: 100%;
  border-radius: 20px;
  padding: 20px;
  overflow: hidden;
  font-size: 1rem;

  ::placeholder {
    font-size: 0.8rem;
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  left: 7px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2px;
  > div {
    display: flex;
    align-items: center;
  }
  > span {
    display: flex;
    cursor: pointer;
    margin-right: 12px;
    font-size: 1.3rem;
    opacity: 0.9;

    &:hover {
      border-radius: 30px;
      opacity: 1;
    }
  }
`;

export const ButtonWrapper2 = styled(ButtonWrapper)`
  justify-content: center;
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
  background-color: rgb(254, 205, 133, 0.8);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: black;
  border: 2px solid black;
  background: white;
  font-size: 0.85rem;
  margin: 0.2rem;
  padding: 0.45rem;
  border-radius: 10px;

  &:hover {
    box-shadow: 2px 1px black;
    transition: all 0.2s ease-in-out;
  }

  &.private {
    border: none;
    box-shadow: none;
  }
  &.public {
    background: darkgray;
    box-shadow: none;
    color: white;
    border: 1px solid gray;
  }
`;

export const Button2 = styled(Button).attrs({
  title: '현재 글이 공개 설정으로 되어있습니다.',
})``;

export const Button3 = styled(Button).attrs({
  title: '현재 글이 비공개 설정으로 되어있습니다.',
})``;

export const Main = styled.div`
  margin-left: 20px;
  margin-right: 35px;
  border-radius: 10px;
  padding: 1rem;
  padding-top: 115px;
  gap: 1.9rem;
  flex: 3.5 1 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;
export const Wrapper2 = styled(Wrapper1)``;
export const Wrapper3 = styled(Wrapper1)``;

export const CardContainer = styled.div`
  border: 3px solid black;
  background: white;
  border-radius: 22px;
  max-height: 337px;
  gap: 20px;
  overflow: hidden;
  flex-wrap: wrap;
  font-size: 1.3rem;
  padding: 1.15rem;
  box-shadow: 8px 8px 5px rgb(0, 0, 0, 0.2);
`;

export const Title = styled.span`
  display: inline-block;
  font-size: 1.25rem;
  font-weight: bold;
  height: 25px;
  text-align: center;
`;

export const Content = styled.div`
  backbround-size: cover;
`;

export const IconWrapper = styled.span`
  position: absolute;
  color: black;
  right: 7px;
  bottom: 45%;
  font-size: 2.1rem;
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
  left: 3px;
  bottom: 47%;
  font-size: 2.1rem;
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
