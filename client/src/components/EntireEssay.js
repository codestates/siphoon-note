import styled from 'styled-components';

export default function EntireEssay() {
  const handleEntireEssay = () => {};
  return (
    <ModalBackdrop onClick={handleEntireEssay}>
      <ModalView onClick={e => e.stopPropagation()}>
        <div onClick={handleEntireEssay} className="close-btn">
          &times;
        </div>
        <div className="title">3번째 글쓰기</div>
        <span>2022년 3월 25일</span>
        {/* <div>2022년 3월 26일 최종수정</div> */}
        <p className="desc">
          영감 가나다라 마바사 아자영감 가나다라 마바사 아자차영감 가나다라
          마바사 아자차영감 가나다라 마바사 아자차영감 가나다라 마바사
          아자차영감 가나다라 마바사 아자차영감 가나다라 마바사 아자차영감
          가영감 가나다라 마바사 아자영감 가나다라 마바사 아자차영감 가나다라
          마바사 아자차영감 가나다라 마바사 아자차영감 가나다라 마바사
          아자차영감 가나다라 마바사 아자차영감 가나다라 마바사 아자차영감
          가바사 아자차영감 가나다라 마바사 아자차영감 가나다라 마바사
          아자차영감 가나다라 마바사 아자차영감 가나다라 마바사 아자차영감
          가나다라 마바사 아자차영감 가나다라 마바사 아자차영감 가나다라 마바사
          아자차영감 가나다라 마바사 아자차영감 가나다라 마바사 아자차영감
          가나다라 마바사 아자차영감 가영감 가나다라 마바사 아자영감 가나다라
          마바사 아자차영감 가나다라 마바사 아자차영감 가나다라 마바사
          아자차영감 가나다라 마바사바사 아자차영감 가나다라 마바사 아자차영감
          가나다라 마바사 아자차영감 가나다라 마바사 아자차영감 가나다라 마바사
          아자차영감 가나다라 마바사 아자차영감 가나다라 마바사 아자차영감
          가나다라 마바사 아자차영감 가나다라 마바사 아자차영감 가나다라 마바사
          아자차영감 가나다라 마바사 아자차영감 가영감 가나다라 마바사 아자영감
          가나다라 마바사 아자차영감 가나다라 마바사 아자차영감 가나다라 마바사
          아자차영감 가나다라 마바사
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
  // background-image: url(img/cat4.svg);
  // background-size: 90%;
  width: 800px;
  height: 600px;
  overflow: auto;
  padding: 1rem;

  > div.close-btn {
    position: relative;
    flex: 1 0 0;
    float: right;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.3rem;
  }
  > .title {
    margin-top: 30px;
    // margin-left: 15px;
    font-size: 1.5rem;
    font-weight: bold;
  }
  > .desc {
    flex: 3 0 0;
    margin-top: 20px;
    font-size: 1.2rem;
  }
`;
