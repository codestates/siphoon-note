import { MypageWrapper, UpdateTextInput, ButtonsWrapper } from './Mypage.style';
import { Footer, SubmitBtn, TextInput } from '../../components';
import { useState } from 'react';

// export default function Signin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
// }

export default function Mypage() {
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
    {
      title: '패스워드 확인',
      type: 'passwordCheck',
      placeholder: '패스워드 확인을 입력하세요',
      autoComplete: 'on',
      minLength: 12,
      maxLength: 32,
    },
  ];
  const textInputBtn = [
    {
      value: '회원탈퇴',
    },
    {
      value: '수정하기',
    },
  ];
  return (
    <div>
      <MypageWrapper>
        {/* <h1>Mypage 페이지 입니다.</h1> */}
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
            {textInputBtn.map(({ value }, index) => {
              return (
                <SubmitBtn key={index} value={value} BackgroundColor="green" />
              );
            })}
          </ButtonsWrapper>
        </UpdateTextInput>

        <Footer />
      </MypageWrapper>
    </div>
  );
}
