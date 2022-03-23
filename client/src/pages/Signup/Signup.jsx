import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Main, Select, Label, Section } from './Signup.style';

export default function Signup() {
  const navigator = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');
  const [errorMsg2, setErrorMsg2] = useState('');
  const [errorMsg3, setErrorMsg3] = useState('');

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    confirm: '',
    name: '',
    year: '',
    address: '',
  });
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
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };

  const passwordMatch = () => {
    const { password, confirm } = userInfo;
    return password === confirm;
  };

  const strongPassword = str => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      str
    );
  };

  // const checkEmail = str => {
  //   return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
  //     str
  //   );
  // };

  // const emailHandler = () => {
  //   if (!checkEmail(userInfo.email)) {
  //     setErrorMsg4('정확한 형식으로 작성해주세요.');
  //   }
  //   if (checkEmail(userInfo.email)) {
  //     setErrorMsg('');
  //   }
  // };
  const passwordHandler = () => {
    if (!strongPassword(userInfo.password)) {
      setErrorMsg2(
        '최소 8자 이상, 알파벳과 숫자 및 특수문자는 하나 이상 포함하세요.'
      );
    }
    if (strongPassword(userInfo.password)) {
      setErrorMsg2('');
    }

    if (!passwordMatch()) {
      setErrorMsg('비밀번호가 일치하지 않습니다.');
    } else {
      setErrorMsg('');
    }
  };

  useEffect(() => {
    // emailHandler();
    passwordHandler();
  });

  const handleSignup = () => {
    const { email, password, confirm, name, year } = userInfo;

    if (!email || !password || !confirm || !name || !year) {
      return setErrorMsg3('필수항목을 모두 입력해주세요.');
    }

    if (!passwordMatch() || !strongPassword(password)) {
      return setErrorMsg3('사용자 정보를 올바르게 입력해주세요.');
    }

    setErrorMsg3('');
    navigator('/signin');
    // axios
    //   .post(
    //     `${process.env.REACT_APP_API_URL}/users/signup`,
    //     {
    //       email,
    //       password,
    //       name,
    //     },
    //     { headers: { 'Content-Type': 'application/json' } }
    //   )
    //   .then(respond => {
    //     if (respond.data.message === '회원가입성공!') {
    //       alert('가입이 성공적으로 완료되었습니다.');
    //       navigator('/signin');
    //     } else if (respond.data.message === '이미 가입된 이메일 입니다.') {
    //       console.log('worked?');
    //       setShowNotification(true);
    //     }
    //   })
    //   .catch(error => console.log(error));
  };

  // const handle = e => {
  //   setUserInfo({ genderValue: e.target.value });
  // };

  const [inputStatus, setInputStatus] = useState('');
  const handleClickRadioButton = e => {
    setInputStatus(e);
  };

  console.log(userInfo);
  console.log(inputStatus);
  return (
    <Main>
      <Section>
        <span className="dd">
          <h1>Sign Up</h1>
        </span>
        <br />
        <div>
          <Label>E-mail(필수)</Label>
          <br />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={handleInputValue('email')}
          />
        </div>
        <div>
          <Label>Password(필수) </Label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleInputValue('password')}
          />
        </div>
        <span id="error">{errorMsg2}</span>
        <div>
          <Label>Confirm Password(필수)</Label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleInputValue('confirm')}
          />
        </div>
        <span>{errorMsg}</span>
        <div>
          <Label>Name(필수)</Label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleInputValue('name')}
          />
          <br />
        </div>
        {/* {userInfo.gender.map((value, i) => (
          <React.Fragment key={i}>
            <input
              id={value}
              value={value}
              name="platform"
              type="radio"
              checked={userInfo.gender === value}
              onChange={handle}
            />
            {value}
          </React.Fragment>
        ))} */}
        <div>
          <Label>성별: </Label>
          <input
            type="radio"
            id="radio"
            value="남"
            checked={inputStatus === '남'}
            onChange={() => handleClickRadioButton('남')}
          />
          <Label htmlFor="radio">남</Label>
          <input
            type="radio"
            id="radio1"
            value="여"
            checked={inputStatus === '여'}
            onChange={() => handleClickRadioButton('여')}
          />
          <Label htmlFor="radio1">여</Label>
        </div>
        <br />
        <label>지역: </label>
        <select onChange={handleInputValue('address')}>
          <option value="지역">지역</option>
          <option value="서울">서울</option>
          <option value="지역">경기도</option>
          <option value="지역">강원도</option>
          <option value="지역">충청도</option>
          <option value="지역">전라도</option>
          <option value="지역">경상도</option>
          <option value="지역">제주도</option>
        </select>
        <br />
        {/* <Label>생년월일: </Label>
        <Select name="yy" id="year">
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </Select>
        년
        <Select id="mm">
          <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </Select>
        월
        <Select id="dd">
          <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </Select>
        일 */}
        <label>생년월일(필수)</label>
        <br />
        <input
          type="tel"
          name="year"
          // value={userInfo}
          ref={birth}
          placeholder="0000-00-00 형태로 적어주세요."
          onChange={handleInputValue('year')}
        />
        <br />
        <span>{errorMsg3}</span>
        <br />
        <button onClick={handleSignup}>Sign Up</button>
      </Section>
    </Main>
  );
}
