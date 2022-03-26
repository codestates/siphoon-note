import styled from 'styled-components';
import { Button, Modal } from 'react-bootstrap';
// 리액트-부트스트랩의 버튼, 모달을 가져온다

export const ModalWrapper = styled.div``;

export const BootstrapButton = styled(Button)`
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.25);
  background-color: green;
`;

export const BootstrapModal = styled(Modal)`
  position: fixed;
  top: 75%;
  left: 50%;
  font-size: 22px;
  transform: translate(-50%, -50%);
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
`;
