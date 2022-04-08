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
  margin-top: 37px;
  left: 18px;
  flex: 2 1 0;
`;

export const Image = styled.div`
  position: fixed;
  width: 55%;
  right: 0%;
  top: 2%;
  left: 37%;
  height: 100vh;
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: cover;
  opacity: 60%;
  align-items: end;
`;

export const TimerWrapper = styled.div`
  font-size: 2.7rem;
  font-family: 'Londrina Outline', cursive;
  font-weight: bold;
  text-align: center;
  color: black;
  margin: 10px;
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
    height: 68%;
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
    margin-right: 13px;
    font-size: 1.3rem;
    opacity: 0.9;
    &:hover {
      transform: scale(1.05);
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
  padding-top: 120px;
  gap: 1.9rem;
  flex: 3.5 1 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 3rem;
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
  max-height: 339px;
  gap: 20px;
  overflow: hidden;
  flex-wrap: wrap;
  word-break: break-all;
  font-size: 1.3rem;
  padding: 1.15rem;
  margin-bottom: -2.5rem;
  box-shadow: 8px 8px 5px rgb(0, 0, 0, 0.2);
  position: ${props => props.position || 'static'};
  transition: 0.5s;
  transform: ${props => props.rotate || 'rotateY(0deg)'};
  backface-visibility: hidden;
  cursor: pointer;
  .flip-icon {
    position: absolute;
    top: 0;
    margin: 0.5rem;
    font-size: 1.5rem;
    right: 0;
  }
`;

export const Backs = styled.div`
  display: block;
  border: 3px solid black;
  border-radius: 22px;
  max-height: 337px;
  gap: 20px;
  overflow: hidden;
  flex-wrap: wrap;
  font-size: 1.3rem;
  padding: 1.2rem;
  box-shadow: 8px 8px 5px rgb(0, 0, 0, 0.2);
  transition: ${props => props.transition || '0.5s'};
  backface-visibility: hidden;
  transform: ${props => props.rotate || 'rotateY(-180deg)'};

  .tags {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
  }

  .createdat {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1.3rem;
    color: darkgray;
    font-weight: 500;
  }

  background-color: floralwhite;
`;

export const Hashtag = styled.span`
  color: black;
  // background-color: white;
  text-decoration: underline;
  // border: 1px solid black;
  // border-radius: 5px;
  // padding: 0.2rem 0.8rem;
  margin: 0.1rem;
  font-size: 1.2rem;
`;
export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  .back {
    display: flex;
    border-radius: 5px;
    padding: 0.7rem;
    margin: 0.5rem 0.5rem;
    color: black;
    font-size: 3.5rem;
    border: 1px solid black;
    cursor: pointer;

    &:hover {
      border: 2px solid black;
    }
  }
`;

export const Divs = styled.div`
  display: block;
  position: relative;
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

export const LoadingWrapper = styled.div``;

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
