import { View, ModalBack } from './Modal.style';
import { useNavigate } from 'react-router-dom';

export default function Popup({ content, setShow, title }) {
  const navigator = useNavigate();

  const showhandle = () => {
    setShow(false);
    // navigator('/signin');
  };
  return (
    <>
      (
      <ModalBack>
        {/* stopPropagtion은 모달뷰를 클릭했을때 모달창이 닫히는 이벤트를 방지한다 */}
        <View onClick={e => e.stopPropagation()}>
          <p className="talk">{title}</p>
          <p>{content}</p>
          <button className="bb" onClick={showhandle}>
            확인
          </button>
          <button className="bb" onClick={showhandle}>
            취소
          </button>
        </View>
      </ModalBack>
      )
      {/* TODO : 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현해야 합니다. */}
    </>
  );
}
