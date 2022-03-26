// Bootstrap css import
import 'bootstrap/dist/css/bootstrap.min.css';

import { ModalWrapper, BootstrapModal, BootstrapButton } from './Modal.style';

export default function Popup({
  open,
  setPopup,
  message,
  title,
  callback,
  cancel,
}) {
  const handleClose = () => {
    setPopup({ open: false });
    if (callback) {
      callback();
    }
  };

  return (
    <ModalWrapper>
      <BootstrapModal show={open} onHide={handleClose}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>{title}</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>{message}</BootstrapModal.Body>
        <BootstrapModal.Footer>
          {cancel && (
            <BootstrapButton variant="primary" onClick={handleClose}>
              취소
            </BootstrapButton>
          )}

          <BootstrapButton variant="primary" onClick={handleClose}>
            확인
          </BootstrapButton>
        </BootstrapModal.Footer>
      </BootstrapModal>
    </ModalWrapper>
  );
}
