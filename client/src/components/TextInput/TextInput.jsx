import { Span, InputWrap, Input, Label } from './TextInput.style';

export default function TextInput({
  title,
  type,
  placeholder,
  autoComplete,
  minLength,
  maxLength,
}) {
  return (
    <InputWrap>
      {title && (
        <Label htmlFor={title}>
          {title}
          <Span>*</Span>
        </Label>
      )}
      <Input
        id={title}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        minLength={minLength}
        maxLength={maxLength}
      ></Input>
    </InputWrap>
  );
}
