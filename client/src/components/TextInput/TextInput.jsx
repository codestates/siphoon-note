import { Span, InputWrap, Input, Label } from './TextInput.style';

export default function TextInput({
  title,
  type,
  placeholder,
  autoComplete,
  minLength,
  maxLength,
  user,
  isLogin,
  defaultValue,
  onBlur,
}) {
  return (
    <InputWrap>
      {title && (
        <Label htmlFor={title}>
          {title}
          <Span>*</Span>
        </Label>
      )}
      {isLogin ? (
        <Input
          id={title}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          minLength={minLength}
          maxLength={maxLength}
          defaultValue={defaultValue}
          onBlur={event => onBlur(event.target.value)}
        ></Input>
      ) : (
        <Input
          id={title}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          minLength={minLength}
          maxLength={maxLength}
          onBlur={event => onBlur(event.target.value)}
        ></Input>
      )}
    </InputWrap>
  );
}
