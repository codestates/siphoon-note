import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Main, Input, Label, Section, Submitwrap } from './Signup.style';
import { TextInput, SubmitBtn, Footer } from '../../components';
import { Selectbox, Selectbox2 } from '../../components/Select/Selectbox';
import { setoption, setgender } from './select';
import { SignupModal } from '../../components/SignupModal';

export default function Signup() {
  const [errorMsg, setErrorMsg] = useState('');

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const [selecteOption, setSelecteOption] = useState('');
  const [gender, setGender] = useState('');

  const [show, setShow] = useState(false);
  console.log(email);
  console.log(name);
  console.log(password);
  console.log(confirm);
  console.log(age);
  console.log(gender);
  console.log(selecteOption);

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
    setAge({ ...age, [key]: e.target.value });
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

  const handleSignup = () => {
    event.preventDefault();

    // if (!validateForm([email, password, confirm, name])) {
    //   return;
    // }

    if (!email || !password || !confirm || !name) {
      setErrorMsg('필수항목을 모두 입력해주세요.');
    }
    if (email && password && confirm && name) {
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
  };

  const textInputList = [
    {
      title: '이메일(필수)',
      type: 'text',
      placeholder: 'OOO@OOOO.OOO 형식으로 작성해주세요',
      onBlur: setEmail,
    },
    {
      title: '비밀번호(필수)',
      type: 'password',
      placeholder: '비밀번호를 입력하세요',
      onBlur: setPassword,
    },
    {
      title: '비밀번호 확인(필수)',
      type: 'password',
      placeholder: '동일한 비밀번호를 입력하세요',
      onBlur: setConfirm,
    },
    {
      title: '닉네임(필수)',
      type: 'text',
      placeholder: '닉네임을 입력하세요',
      onBlur: setName,
    },
  ];

  const textInputBtn = {
    value: '회원가입',
  };

  return (
    <Main>
      <Section>
        <span className="dd">
          <h1>Sign Up</h1>
        </span>
        <br />
        <form onSubmit={e => handleSignup(e)}>
          <br />

          <br />
          {textInputList.map(
            (
              {
                title,
                type,
                value,
                ref,
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
                  value={value}
                  ref={ref}
                  placeholder={placeholder}
                  autoComplete={autoComplete}
                  minLength={minLength}
                  maxLength={maxLength}
                  onBlur={onBlur}
                />
              );
            }
          )}
          <div>
            <Label>성별</Label>
            <Selectbox2
              options={setgender}
              gender={gender}
              setGender={setGender}
            />

            <br />
            <Label>지역 </Label>
            <Selectbox
              options={setoption}
              select={selecteOption}
              setSelect={setSelecteOption}
            />
          </div>
          <br />
          <Label>생년월일</Label>
          <br />
          <Input
            type="text"
            name="year"
            ref={birth}
            placeholder="0000-00-00 형태로 적어주세요."
            onChange={handleInputValue('year')}
          />
          <br />
          <br />
          <span>{errorMsg}</span>
          <br />
          <Submitwrap>
            <SubmitBtn type="submit" value={textInputBtn.value} />
          </Submitwrap>
        </form>
      </Section>
      {/* <Footer /> */}
      {show ? (
        <SignupModal content="가입이 완료되었습니다." setShow={setShow} />
      ) : null}
    </Main>
  );
}
