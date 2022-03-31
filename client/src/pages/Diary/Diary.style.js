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
  margin-top: 34px;
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
  opacity: 25%;
  align-items: end;
`;

export const TimerWrapper = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  text-align: center;
  color: black;
  margin: 3px;
  height: 60px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  // opacity: 70%;
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

  &:focus-within {
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
      // background: yellow;
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
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: black;
  border: 2px solid black;
  background: white;
  font-size: 0.85rem;
  margin: 0.3rem;
  padding: 0.5rem;
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

export const Main = styled.div`
  margin-left: 15px;
  margin-right: 40px;
  border-radius: 10px;
  padding: 1rem;
  padding-top: 105px;
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
  border-radius: 20px;
  max-height: 281px;
  gap: 20px;
  overflow: hidden;
  flex-wrap: wrap;
  font-size: 1.2rem;
  padding: 1rem;
  box-shadow: 8px 8px 5px rgb(0, 0, 0, 0.2);
`;

export const Title = styled.span`
  display: inline-block;
  font-size: 1.1rem;
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
  right: 10px;
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
