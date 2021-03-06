import {
  MypageWrapper,
  TextInputWrapper,
  ButtonsWrapper,
  Label,
  Span,
  Input,
  ModalWrapper,
  Modal,
  ErrMesWrapper,
  BackButton,
} from './Mypage.style';
import axios from 'axios';
import { Footer, SubmitBtn, TextInput, Popup } from '../../components';
import { Selectbox, Selectbox2 } from '../../components/Select/Selectbox';
import { regionOptions, genderOptions } from './select';
import { useState, useEffect, useRef } from 'react';
import apiUris from '../../config/config';
axios.defaults.withCredentials = true;
import { useNavigate } from 'react-router-dom';
export default function Mypage({ user, isLogin }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setpasswordCheck] = useState('');
  const [selecteOption, setSelecteOption] = useState('');
  const [gender, setGender] = useState('');
  const [title, setTitle] = useState('알림');
  const [content, setContent] = useState('');
  const [show, setShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [age, setAge] = useState('');
  // console.log(age);
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

    // setAge질문
    setAge({ ...age, [key]: e.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  const onUpdateBtn = e => {
    if (handleSignup()) {
      axios
        .patch(
          apiUris.UPDATE_USER_INFO,
          { password, username, gender, region, birthday },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then(respond => {
          if (respond.status === 200) {
            setTitle('회원 수정📝');
            setContent('회원정보 수정이 완료되었습니다😀');
            setShow(true);
            navigator('/mypage');
          }
        })
        .catch(error => {
          if (error.status === 400) {
            setErrorMsg(error.message);
          } else if (error.status === 401) {
            setErrorMsg(error.message);
          } else if (error.status === 500) {
            setErrorMsg(error.message);
          }
        });
    }
  };
  const onDeleteBtn = e => {
    axios
      .delete(apiUris.DELETE_ACCOUNT, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(respond => {
        if (respond.status === 200) {
          setTitle('회원 탈퇴🥲');
          setContent('정말로 탈퇴하시겠습니까🥲');
          setShow(true);
          navigator('/');
        }
      })
      .catch(error => {
        if (error.status === 400) {
          setErrorMsg(error.message);
        } else if (error.status === 401) {
          setErrorMsg(error.message);
        } else if (error.status === 500) {
          setErrorMsg(error.message);
        }
      });
  };

  // 유효성 검사
  const strongPassword = str => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      str
    );
  };

  const handleSignup = () => {
    let booleanArray = [];
    if (!password || !passwordCheck || !username) {
      setErrorMsg('필수항목을 모두 입력해주세요.');
    } else {
      booleanArray.push(true);
    }

    if (!strongPassword(password)) {
      setErrorMsg(
        '비밀번호를 최소 8자 이상, 알파벳과 숫자 및 특수문자는 하나 이상 포함하세요.'
      );
    } else {
      booleanArray.push(true);
    }

    if (password !== passwordCheck) {
      setErrorMsg('비밀번호가 일치하지 않습니다.');
    } else {
      booleanArray.push(true);
    }

    return 3 === booleanArray.length;
  };

  // TextInput 정보
  const textInputList = [
    {
      title: '변경할 패스워드',
      type: 'password',
      placeholder: '패스워드을 입력하세요',
      autoComplete: 'on',
      minLength: 12,
      maxLength: 32,
      onBlur: setPassword,
    },
    {
      title: '패스워드 확인',
      type: 'passwordCheck',
      placeholder: '동일한 패스워드를 입력하세요',
      autoComplete: 'on',
      minLength: 12,
      maxLength: 32,
      onBlur: setpasswordCheck,
    },
    {
      title: '닉네임',
      type: 'name',
      placeholder: '변경할 닉네임을 입력하세요',
      autoComplete: 'on',
      defaultValue: user.username,
      minLength: 12,
      maxLength: 32,
      onBlur: setName,
    },
  ];

  return (
    <div>
      <BackButton onClick={() => navigate(-1)}>뒤로가기</BackButton>
      {show && <Popup setShow={setShow} content={content} title={title} />}
      <MypageWrapper>
        <h2>EDIT PROFILE</h2>
        <TextInputWrapper>
          <form onSubmit={event => handleSubmit(event)}>
            {textInputList.map(
              (
                {
                  title,
                  type,
                  placeholder,
                  autoComplete,
                  defaultValue,
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
                    defaultValue={defaultValue}
                    isLogin={isLogin}
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
              user={user}
              isLogin={isLogin}
            />
            <Label>지역</Label>
            <Selectbox
              options={regionOptions}
              select={selecteOption}
              setSelect={setSelecteOption}
              user={user}
              isLogin={isLogin}
            />
            <Label>생년월일</Label>
            <Input
              type="text"
              name="year"
              ref={birth}
              defaultValue={user.birthday}
              placeholder="YYYY-MM-DD 형식으로 적어주세요."
              onChange={handleInputValue('birthday')}
            />
          </form>
          {errorMsg ? <ErrMesWrapper>* {errorMsg}</ErrMesWrapper> : <br />}
          <ButtonsWrapper>
            <SubmitBtn
              onClick={onDeleteBtn}
              value="회원탈퇴"
              color="black"
              BackgroundColor="white"
            />
            <SubmitBtn
              click={onUpdateBtn}
              value="수정하기"
              BackgroundColor="rgb(254, 205, 133)"
              color="black"
            />
          </ButtonsWrapper>
        </TextInputWrapper>
      </MypageWrapper>
      <Footer />
    </div>
  );
}
