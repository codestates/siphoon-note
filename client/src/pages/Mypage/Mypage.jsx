import {
  MypageWrapper,
  TextInputWrapper,
  ButtonsWrapper,
  Label,
  ModalWrapper,
  Modal,
} from './Mypage.style';

import { Footer, SubmitBtn, TextInput, Popup } from '../../components';
import { Selectbox, Selectbox2 } from '../../components/Select/Selectbox';
import { useState, useEffect } from 'react';
import { setoption, setgender } from './select';

export default function Mypage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setpasswordCheck] = useState('');
  const [selecteOption, setSelecteOption] = useState('');
  const [gender, setGender] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [show, setShow] = useState(false);
  // 수정하기 Modal
  // 입력창을 모두 입력해주세요.
  // 수정이 완료되었습니다.

  // 회원탈퇴 Modal
  // 정말 탈퇴 하시겠습니까? -> 회원탈퇴가 완료되었습니다.
  const handleSubmit = event => {
    event.preventDefault();
  };

  const onUpdateBtn = e => {
    setTitle('회원 수정📝');

    // 회원정보가 올바르지 않거나, 누락될때
    // 에러 안내메시지 모달을 띄운다

    setContent('회원정보 수정이 완료되었습니다😀');
    setShow(true);
  };
  const onDeleteBtn = e => {
    setTitle('회원 탈퇴🥲');
    setContent('정말로 탈퇴하시겠습니까🥲');
    setShow(true);
  };

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
      minLength: 12,
      maxLength: 32,
      onBlur: setName,
    },
  ];

  return (
    <div>
      {show && <Popup setShow={setShow} content={content} title={title} />}
      <MypageWrapper>
        <TextInputWrapper>
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

            <Label>지역 </Label>
            <Selectbox
              options={setoption}
              select={selecteOption}
              setSelect={setSelecteOption}
            />
          </form>

          <ButtonsWrapper>
            <SubmitBtn
              click={onDeleteBtn}
              value="회원탈퇴"
              BackgroundColor="green"
            />
            <SubmitBtn
              click={onUpdateBtn}
              value="수정하기"
              BackgroundColor="green"
            />
          </ButtonsWrapper>
        </TextInputWrapper>

        <Footer />
      </MypageWrapper>
    </div>
  );
}
