import styled from 'styled-components';

export const MypageWrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: 79vh;
`;

export const TextInputWrapper = styled.div`
  width: 400px;
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
