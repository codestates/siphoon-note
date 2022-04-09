import styled from 'styled-components';

export default function UserModal({ handleModal, title, content }) {
  return (
    <ModalBackdrop onClick={handleModal}>
      <ModalView onClick={e => e.stopPropagation()}>
        <div onClick={handleModal} className="close-btn">
          &times;
        </div>
        <div className="title">{title}</div>
        <span>Siphoon-Note</span>
        <div className="desc">{content}</div>
      </ModalView>
    </ModalBackdrop>
  );
}

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;

  > img {
    width: 60%;
    height: 60%;
    opacity: 100%;
    position: fixed;
    left: 19%;
    top: 10%;

    transition: all 1s ease-in-out;
  }
`;

const ModalView = styled.div.attrs(props => ({
  role: 'dialog',
}))`
  flex-direction: column;
  border-radius: 10px;
  border: 3px solid black;
  background-color: #ffffff;
  text-align: center;
  animation: fadeInText 0.7s linear forwards;
  font-size: 1.1rem;

  @keyframes fadeInText {
    0% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }

  width: 400px;
  height: 260px;

  > div.close-btn {
    position: relative;
    flex: 1 0 0;
    margin: 7px 7px 0 0;
    float: right;
    cursor: pointer;

    font-weight: bold;
    font-size: 1rem;
  }
  > div.title {
    margin-top: 30px;
    text-decoration: underline;
    margin-left: 15px;
    font-size: 1.9rem;
  }
  > div.desc {
    flex: 3 0 0;
    margin-top: 20px;
    font-size: 1.3rem;
  }
`;
