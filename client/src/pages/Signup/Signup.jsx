import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import {
  Main,
  TextWrap,
  TextP,
  Span,
  Input,
  Label,
  Section,
  Submitwrap,
  BackButton,
} from './Signup.style';
import { TextInput, SubmitBtn, Footer } from '../../components';
import { Selectbox, Selectbox2 } from '../../components/Select/Selectbox';
import { regionOptions, genderOptions } from './select';
import { SignupModal } from './SignupModal';
import apiUris from '../../config/config';
import { useNavigate } from 'react-router-dom';
import UserModal from '../../components/UserModal';

export default function Signup() {
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState('');

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const [region, setRegion] = useState('');
  const [gender, setGender] = useState('');

  const [show, setShow] = useState(false);

  const handleModal = () => {
    setShow(!show);
  };

  const birth = useRef();

  const handleInputValue = key => e => {
    const value = birth.current.value.replace(/\D+/g, '');
    const numberLength = 8;

    let result;
    result = '';

    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 4:
          result += '-';
          break;
        case 6:
          result += '-';
          break;

        default:
          break;
      }

      result += value[i];
    }

    birth.current.value = result;
    setBirthday({ ...birthday, [key]: e.target.value });
  };

  const strongPassword = str => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      str
    );
  };

  const checkEmail = str => {
    return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
      str
    );
  };

  // useEffect(() => {
  //   handleSignup();
  // });

  const handleSignup = event => {
    event.preventDefault();

    if (!email || !password || !confirm || !username) {
      setErrorMsg('필수항목을 모두 입력해주세요.');
    }
    if (email && password && confirm && username) {
      setErrorMsg('');
    }

    if (!checkEmail(email)) {
      setErrorMsg('정확한 형식으로 이메일을 작성해주세요.');
    }
    if (!strongPassword(password)) {
      setErrorMsg(
        '비밀번호는 최소 8자 이상, 알파벳과 숫자 및 특수문자는 하나 이상 포함하세요.'
      );
    }

    if (password !== confirm) {
      setErrorMsg('비밀번호가 일치하지 않습니다.');
    }

    axios
      .post(
        apiUris.SIGN_UP,
        {
          email,
          password,
          username,
          gender,
          birthday,
          region,
        },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(respond => {
        if (respond.status === 201) {
          setShow(true);
          navigator('/diary');
        }
      })
      .catch(error => {
        if (error.status === 400) {
          setErrorMsg(error.message);
        } else if (error.status === 409) {
          setErrorMsg(error.message);
        } else if (error.status === 500) {
          setErrorMsg(error.message);
        }
      });
  };

  const textInputList = [
    {
      title: '이메일',
      type: 'text',
      placeholder: 'hello@siphoon.com 형식으로 작성해주세요.',
      onBlur: setEmail,
    },
    {
      title: '비밀번호',
      type: 'password',
      placeholder: '비밀번호를 입력하세요.',
      onBlur: setPassword,
    },
    {
      title: '비밀번호 확인',
      type: 'password',
      placeholder: '동일한 비밀번호를 입력하세요.',
      onBlur: setConfirm,
    },
    {
      title: '닉네임',
      type: 'text',
      placeholder: '닉네임을 입력하세요.',
      onBlur: setUserName,
    },
  ];

  const textInputBtn = {
    value: '회원가입',
  };

  return (
    <>
      <BackButton onClick={() => navigate(-1)}>뒤로가기</BackButton>
      <Main>
        <Section>
          <h2>SIGN UP</h2>
          <form onSubmit={e => handleSignup(e)}>
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

            <Label>성별</Label>
            <Selectbox2
              options={genderOptions}
              gender={gender}
              setGender={setGender}
            />
            <Label>지역</Label>
            <Selectbox
              options={regionOptions}
              select={region}
              setSelect={setRegion}
            />

            <Label>생년월일</Label>
            <Input
              type="text"
              name="year"
              ref={birth}
              placeholder="YYYY-MM-DD 형식으로 작성해주세요."
              onChange={handleInputValue('year')}
            />
            <br />
            <TextWrap>
              <TextP>
                <span color="red">*</span> 표기는 필수 입력 사항입니다.
              </TextP>
              <TextP>
                <br />
                📌️ 성별, 지역, 생년월일은 사용자의 데이터 분석을 위해
                사용됩니다.
              </TextP>
            </TextWrap>
            {errorMsg ? <Span>{errorMsg}</Span> : <br />}
            <Submitwrap>
              <SubmitBtn
                type="submit"
                value={textInputBtn.value}
                BackgroundColor="white"
                color="black"
              />
            </Submitwrap>
          </form>
        </Section>
        {show ? (
          <UserModal
            title="알림"
            content="가입이 완료되었습니다."
            handleModal={handleModal}
          />
        ) : null}
      </Main>
      <Footer />
    </>
  );
}
