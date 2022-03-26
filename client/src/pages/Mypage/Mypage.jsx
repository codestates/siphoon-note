import {
  MypageWrapper,
  UpdateTextInput,
  ButtonsWrapper,
  Label,
} from './Mypage.style';
import { Footer, SubmitBtn, TextInput } from '../../components';
import { Selectbox, Selectbox2 } from '../../components/Select/Selectbox';
import { useState } from 'react';
import { setoption, setgender } from './select';

export default function Mypage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setpasswordCheck] = useState('');

  const [selecteOption, setSelecteOption] = useState('');
  const [gender, setGender] = useState('');

  console.log(selecteOption);
  const handleSubmit = event => {
    event.preventDefault();
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
        <UpdateTextInput>
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
