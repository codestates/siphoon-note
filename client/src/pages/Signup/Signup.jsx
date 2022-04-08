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
} from './Signup.style';
import { TextInput, SubmitBtn, Footer } from '../../components';
import { Selectbox, Selectbox2 } from '../../components/Select/Selectbox';
import { regionOptions, genderOptions } from './select';
import { SignupModal } from './SignupModal';
import apiUris from '../../config/config';

export default function Signup() {
  const [errorMsg, setErrorMsg] = useState('');

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const [region, setRegion] = useState('');
  const [gender, setGender] = useState('');

  const [show, setShow] = useState(false);
  // console.log(email);
  // console.log(username);
  // console.log(password);
  // console.log(confirm);
  // console.log(birthday);
  // console.log(gender);
  // console.log(region);

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
      setShow(true);
    }

    if (!checkEmail(email)) {
      setErrorMsg('정확한 형식으로 이메일을 작성해주세요.');
    }
    if (!strongPassword(password)) {
      setErrorMsg(
        '비밀번호를 최소 8자 이상, 알파벳과 숫자 및 특수문자는 하나 이상 포함하세요.'
      );
    }

    if (password !== confirm) {
      setErrorMsg('비밀번호가 일치하지 않습니다.');
    }

    // axios
    //   .post(apiUris.
    //     SIGN_UP,
    //     {
    //       email,
    //       password,
    //       username,
    //       gender,
    //       birthday,
    //       region,
    //     },
    //     { headers: { 'Content-Type': 'application/json' } }
    //   )
    //   .then(respond => {
    //     if (respond.status === 200) {
    //       setShow(true);
    //       navigator('/diary');
    //       console.log(respond);
    //     } else if (respond.status === 400) {
    //       setErrorMsg('이미 가입된 이메일입니다.');
    //     }
    //   })
    //   .catch(error => console.log(error));
  };

  const textInputList = [
    {
      title: '이메일',
      type: 'text',
      placeholder: 'OOO@OOOO.OOO 형식으로 작성해주세요',
      onBlur: setEmail,
    },
    {
      title: '비밀번호',
      type: 'password',
      placeholder: '비밀번호를 입력하세요',
      onBlur: setPassword,
    },
    {
      title: '비밀번호 확인',
      type: 'password',
      placeholder: '동일한 비밀번호를 입력하세요',
      onBlur: setConfirm,
    },
    {
      title: '닉네임',
      type: 'text',
      placeholder: '닉네임을 입력하세요',
      onBlur: setUserName,
    },
  ];

  const textInputBtn = {
    value: '회원가입',
  };

  return (
    <Main>
      <Section>
        <br />
        <form onSubmit={e => handleSignup(e)}>
          <br />

          <br />

          <span className="dd">
            <h1>Sign Up</h1>
          </span>
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

          <Label>
            성별<Span>**</Span>
          </Label>
          <Selectbox2
            options={genderOptions}
            gender={gender}
            setGender={setGender}
          />

          <br />
          <Label>
            지역<Span>**</Span>
          </Label>
          <Selectbox
            options={regionOptions}
            select={region}
            setSelect={setRegion}
          />

          <br />
          <Label>
            생년월일<Span>**</Span>
          </Label>
          <br />
          <Input
            type="text"
            name="year"
            ref={birth}
            placeholder="0000-00-00 형태로 적어주세요."
            onChange={handleInputValue('year')}
          />
          <br />
          <TextWrap>
            <TextP>
              <Span color="red">*</Span>로 적혀있는 곳은 필수로 입력해주세요.
            </TextP>
            <TextP>
              <Span color="orange">**</Span>로 적혀있는 곳은 선택사항입니다.
              <br />
              선택사항은 사용자의 글쓰기 분석에 도움을 주기 위해 수집하는
              것입니다. <br />
              도움을 받고 싶으시다면 선택해주세요!!
            </TextP>
          </TextWrap>
          <br />
          <Span>{errorMsg}</Span>
          <br />
          <Submitwrap>
            <SubmitBtn type="submit" value={textInputBtn.value} />
          </Submitwrap>
        </form>
        <Footer />
      </Section>

      {show ? (
        <SignupModal content="가입이 완료되었습니다." setShow={setShow} />
      ) : null}
    </Main>
  );
}
