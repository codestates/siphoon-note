import { useState } from 'react';

import {
  TextInputListWrapper,
  SigninWrapper,
  ButtonsWrapper,
  OauthButtonsWrapper,
} from './Signin.style';
import { Footer, SubmitBtn, TextInput } from '../../components';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    console.log(email);
    console.log(password);
  };

  // useEffect(() => {
  //   // 첫 렌더링시
  //   console.log(email);
  // }, [email]);

  const textInputList = [
    {
      title: '이메일',
      type: 'email',
      placeholder: '이메일을 입력하세요',
      autoComplete: 'on',
      minLength: 10,
      maxLength: 32,
      onBlur: setEmail,
    },
    {
      title: '패스워드',
      type: 'password',
      placeholder: '패스워드을 입력하세요',
      autoComplete: 'on',
      minLength: 8,
      maxLength: 32,
      onBlur: setPassword,
    },
  ];
  return (
    <div>
      <SigninWrapper>
        <TextInputListWrapper>
          <form onSubmit={event => handleSubmit(event)}>
            {textInputList.map(
              (
                {
                  title,
                  type,
                  placeholder,
                  autoComplete,
                  minLength,
                  maxLength,
                  onBlur,
                },
                index
              ) => {
                return (
                  <TextInput
                    key={index}
                    title={title}
                    type={type}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    minLength={minLength}
                    maxLength={maxLength}
                    onBlur={onBlur}
                  />
                );
              }
            )}

            <ButtonsWrapper>
              <SubmitBtn
                value="로그인"
                BackgroundColor="green"
                // type={'submit'}
              />
            </ButtonsWrapper>
          </form>

          <OauthButtonsWrapper>
            <SubmitBtn
              value="구글 계정으로 로그인"
              BackgroundColor="#ff0000a9"
            />
            <SubmitBtn
              value="카카오 계정으로 로그인"
              BackgroundColor="#f2ff00"
              color="#000000"
            />
          </OauthButtonsWrapper>
        </TextInputListWrapper>
      </SigninWrapper>
      <Footer />
    </div>
  );
}
