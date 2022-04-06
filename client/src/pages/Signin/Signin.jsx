import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import axios from 'axios';

import {
  TextInputListWrapper,
  SigninWrapper,
  ButtonsWrapper,
  OauthButtonsWrapper,
  ErrMesWrapper,
} from './Signin.style';
import { Footer, SubmitBtn, TextInput } from '../../components';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(
        config.API_USER_SIGNIN,
        {
          email: email,
          password: password,
        },
        { headers: { authorization: { 'Content-Type': 'application/json' } } }
      )
      .then(res => {
        if (res.status === 200) {
          // 로그인 성공 시 다이어리 페이지로 리디렉션
          navigate('/diary');
        } else if (res.status === 400) {
          setErrorMsg('아이디 또는 비밀번호가 일치하지 않습니다');
        }
      })
      .catch(error => console.log(err));
  };

  const onLoginBtn = e => {
    if (handleLogin()) {
      setErrorMsg('');
    }
  };

  const handleLogin = () => {
    let booleanArray = [];
    if (!email && !password) {
      setErrorMsg('아이디와 비밀번호를 입력해주세요');
    } else if (!email) {
      setErrorMsg('아이디를 입력해주세요');
    } else if (!password) {
      setErrorMsg('비밀번호를 입력해주세요');
    }
    booleanArray.push(true);
  };

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
            {errorMsg ? <ErrMesWrapper>* {errorMsg}</ErrMesWrapper> : <br />}
            <ButtonsWrapper>
              <SubmitBtn
                onClick={onLoginBtn}
                value="로그인"
                BackgroundColor="green"
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
