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
      setErrorMsg('??????????????? ?????? ??????????????????.');
    }
    if (email && password && confirm && username) {
      setErrorMsg('');
    }

    if (!checkEmail(email)) {
      setErrorMsg('????????? ???????????? ???????????? ??????????????????.');
    }
    if (!strongPassword(password)) {
      setErrorMsg(
        '??????????????? ?????? 8??? ??????, ???????????? ?????? ??? ??????????????? ?????? ?????? ???????????????.'
      );
    }

    if (password !== confirm) {
      setErrorMsg('??????????????? ???????????? ????????????.');
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
      title: '?????????',
      type: 'text',
      placeholder: 'hello@siphoon.com ???????????? ??????????????????.',
      onBlur: setEmail,
    },
    {
      title: '????????????',
      type: 'password',
      placeholder: '??????????????? ???????????????.',
      onBlur: setPassword,
    },
    {
      title: '???????????? ??????',
      type: 'password',
      placeholder: '????????? ??????????????? ???????????????.',
      onBlur: setConfirm,
    },
    {
      title: '?????????',
      type: 'text',
      placeholder: '???????????? ???????????????.',
      onBlur: setUserName,
    },
  ];

  const textInputBtn = {
    value: '????????????',
  };

  return (
    <>
      <BackButton onClick={() => navigate(-1)}>????????????</BackButton>
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

            <Label>??????</Label>
            <Selectbox2
              options={genderOptions}
              gender={gender}
              setGender={setGender}
            />
            <Label>??????</Label>
            <Selectbox
              options={regionOptions}
              select={region}
              setSelect={setRegion}
            />

            <Label>????????????</Label>
            <Input
              type="text"
              name="year"
              ref={birth}
              placeholder="YYYY-MM-DD ???????????? ??????????????????."
              onChange={handleInputValue('year')}
            />
            <br />
            <TextWrap>
              <TextP>
                <span color="red">*</span> ????????? ?????? ?????? ???????????????.
              </TextP>
              <TextP>
                <br />
                ??????? ??????, ??????, ??????????????? ???????????? ????????? ????????? ??????
                ???????????????.
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
            title="??????"
            content="????????? ?????????????????????."
            handleModal={handleModal}
          />
        ) : null}
      </Main>
      <Footer />
    </>
  );
}
