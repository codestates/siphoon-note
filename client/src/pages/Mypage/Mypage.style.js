import styled from 'styled-components';

export const ErrMesWrapper = styled.div`
  margin-top: 20px;
  color: red;
`;
export const MypageWrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: 79vh;
`;

export const TextInputWrapper = styled.div`
  width: 400px;
  margin-top: 107px;
`;
export const ButtonsWrapper = styled.div`
  button {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  button + button {
    margin-left: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  margin-top: 5px;
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
