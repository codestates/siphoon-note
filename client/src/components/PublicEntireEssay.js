import styled from 'styled-components';

export default function PublicEntireEssay({ handleEntireEssay, essay }) {
  return (
    <ModalBackdrop onClick={handleEntireEssay}>
      <ModalView onClick={e => e.stopPropagation()}>
        <div onClick={handleEntireEssay} className="close-btn">
          &times;
        </div>
        <div className="title">{essay.writer}님의 Siphoon Note</div>
        <span>{essay.createdAt}</span>
        <p className="desc">{essay.content}</p>
      </ModalView>
    </ModalBackdrop>
  );
}

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
`;

const ModalView = styled.div.attrs(props => ({
  role: 'dialog',
}))`
  flex-direction: column;
  border-radius: 10px;
  border: 3px solid black;
  background-color: #ffffff;
  width: 825px;
  height: 620px;
  overflow: auto;
  padding: 1rem;
  background: floralwhite;

  > div.close-btn {
    position: relative;
    flex: 1 0 0;
    float: right;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.3rem;
  }
  > .title {
    margin: 30px 0px 5px 0px;
    font-size: 1.5rem;
    font-weight: bold;
  }

  > span {
    color: gray;
  }

  > .desc {
    flex: 3 0 0;
    margin-top: 20px;
    font-size: 1.2rem;
    border-top: 1.5px solid lightgray;
    padding-top: 15px;
  }
`;
