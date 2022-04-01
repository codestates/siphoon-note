import styled from 'styled-components';

export default function EntireEssay({ isPublic }) {
  const handleEntireEssay = () => {};
  return (
    <ModalBackdrop onClick={handleEntireEssay}>
      <ModalView onClick={e => e.stopPropagation()}>
        <div onClick={handleEntireEssay} className="close-btn">
          &times;
        </div>
        <div className="title">3번째 글쓰기</div>
        <span>2022년 3월 25일 | </span>
        <span>{isPublic ? '공개' : '비공개'}</span>
        <p className="desc">
          영감 가나다라 마바사 아자영감 가나다라 마바사 아자차영감 가나다라
          마바사 아자차영감 가나다라 마바사 아자차영감 가나다라 마바사
          아자차영감 가나다라 마바사 아자차영감 가나다라 마바사 아자차영감
          가영감 가나다라 마바사 아자영감 가나다라 마바사 아자차영감 가나다라
          마바사 아자차영감 가나다라 마바사 아자차영감 가나다라 마바사
          아자차영감 가나다라 마바사 아자차영감 가나다라 마바사 아자차영감
          가바사 아자차영감 가나다라 마바사 아자차영감 가나다라 마바사
          아자차영감 가나다라 마바사 아자차영감 가나다라 마바사 아자차영감
          가나다라
        </p>
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
`;

const ModalView = styled.div.attrs(props => ({
  role: 'dialog',
}))`
  flex-direction: column;
  border-radius: 10px;
  border: 3px solid black;
  background-color: #ffffff;
  width: 800px;
  height: 600px;
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
