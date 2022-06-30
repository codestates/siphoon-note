import styled from 'styled-components';

export const ErrMesWrapper = styled.div`
  margin-top: 20px;
  color: red;
`;
export const MypageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin-top: 6rem;
  margin-bottom: 4rem;
`;

export const TextInputWrapper = styled.div`
  width: 600px;
  margin-top: 1rem;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 0.5rem;

  button + button {
    margin-left: 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 55px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  margin-top: 7px;
  &:focus {
    outline: 4px solid primary-light;
    border: none;
  }
`;

export const Label = styled.label`
  font-size: 20px;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Modal = styled.section`
  position: fixed;
  background: var(--bg-linear);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
export const Span = styled.span`
  color: ${props => props.color || 'orange'};
`;

export const BackButton = styled.button`
z-index:500;
position:fixed;
top:20px;
left:20px;
font-weight: 500;
display: flex;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
color: black;
border: solid;
background: white;
font-size: 1.15rem;
padding: 0.65rem;

&:hover {
  box-shadow: 4px 2px black;
  transition: all 0.2s ease-in-out;`;
