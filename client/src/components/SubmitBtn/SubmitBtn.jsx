import { ButtonWrap, Button } from './SubmitBtn.style';

export default function SubmitBtn({ value, BackgroundColor, color, click }) {
  return (
    <Button BackgroundColor={BackgroundColor} onClick={click} color={color}>
      {value}
    </Button>
  );
}

// mypage에서 button coponent(onClick 사용불가) -> styled component(onClick 사용가능) -> button tag
