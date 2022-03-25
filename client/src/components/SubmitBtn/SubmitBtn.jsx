import { ButtonWrap, Button } from './SubmitBtn.style';

export default function SubmitBtn({ value, BackgroundColor, color }) {
  return (
    <Button BackgroundColor={BackgroundColor} color={color}>
      {value}
    </Button>
  );
}
