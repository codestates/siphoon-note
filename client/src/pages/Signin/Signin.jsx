import {
  UpdateTextInput,
  SigninWrapper,
  ButtonsWrapper,
  OauthButtonsWrapper,
} from './Signin.style';
import { Footer, SubmitBtn, TextInput } from '../../components';

export default function Signin() {
  const textInputList = [
    {
      title: '이름',
      type: 'name',
      placeholder: '이름을 입력하세요',
      autoComplete: 'on',
      minLength: 12,
      maxLength: 32,
    },
    {
      title: '패스워드',
      type: 'password',
      placeholder: '패스워드을 입력하세요',
      autoComplete: 'on',
      minLength: 12,
      maxLength: 32,
    },
  ];
  return (
    <div>
      <SigninWrapper>
        <UpdateTextInput>
          {textInputList.map(
            (
              { title, type, placeholder, autoComplete, minLength, maxLength },
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
                />
              );
            }
          )}

          <ButtonsWrapper>
            <SubmitBtn value="로그인" BackgroundColor="green" />
          </ButtonsWrapper>
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
          {/* <ButtonsWrapper>
            <SubmitBtn value="로그인" BackgroundColor="green" />
          </ButtonsWrapper>
          <ButtonsWrapper>
            <SubmitBtn
              value="구글 계정으로 로그인"
              BackgroundColor="#ff0000a9"
            />
          </ButtonsWrapper>
          <ButtonsWrapper>
            <SubmitBtn
              value="카카오 계정으로 로그인"
              BackgroundColor="#f2ff00"
              color="#000000"
            />
          </ButtonsWrapper> */}
        </UpdateTextInput>
      </SigninWrapper>
      <Footer />
    </div>
  );
}
