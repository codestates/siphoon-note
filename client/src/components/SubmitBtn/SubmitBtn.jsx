import { ButtonWrap, Button } from './SubmitBtn.style';

export default function SubmitBtn({ value, BackgroundColor, color }) {
  console.log(BackgroundColor);
  return (
    <Button BackgroundColor={BackgroundColor} color={color}>
      {value}
    </Button>
  );
}
