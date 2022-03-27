import styled from 'styled-components';

export const ModalBack = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;
  z-index: 1;
`;

export const View = styled.div.attrs(props => ({
  role: 'dialog',
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightskyblue;
  background-color: white;
  width: 220px;
  height: 120px;
  border-radius: 1rem;
  position: relative;

  > .talk {
    position: absolute;
    text-align: center;
    width: 50px;
    height: 30px;
    border-radius: 1.5rem;
    top: 3px;
    center: 7px;
    margin: 2px;
    padding: 2px;
    background-color: lightgray;
  }

  > .bb {
    position: absolute;
    width: 70px;
    height: 30px;
    border-radius: 1.5rem;
    bottom: 2px;
    center: 7px;
    cursor: pointer;
    border: 1px solid pink;
    background-color: lightskyblue;
  }
`;
import { useNavigate } from 'react-router-dom';
export const SignupModal = ({ content, setShow }) => {
  const navigator = useNavigate();
  const showhandle = () => {
    setShow(false);
    navigator('/signin');
  };
  return (
    <>
      <ModalBack>
        <View onClick={e => e.stopPropagation()}>
          <p className="talk">알림</p>
          <p>{content}</p>
          <button className="bb" onClick={showhandle}>
            확인
          </button>
        </View>
      </ModalBack>

      {/* TODO : 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현해야 합니다. */}
    </>
  );
};
