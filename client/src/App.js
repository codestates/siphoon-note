import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Diary from './pages/Diary';
import Mypage from './pages/Mypage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Trial from './pages/Trial';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar';
import apiUris from './config/config';

function App() {
  // 로그인 관련 전역 상태 변수
  const [isLogin, setIsLogin] = useState(true);
  const [accessToken, setAccessToken] = useState(null);
  const [userInfo, setUserInfo] = useState({
    email: 'ss@ff.com',
    username: 'cris',
    profileImage: 0,
    gender: '남',
    birthday: '2000-01-01',
    region: '서울',
  });

  const isAuthenticated = () => {
    axios
      .get(apiUris.READ_USER_INFO, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then(respond => {
        if (respond.status === 200) {
          const { email, username, profileImage, gender, birthday, region } =
            respond.data;
          setUserInfo({
            email,
            username,
            profileImage,
            gender,
            birthday,
            region,
          });
        }
      })
      .catch(error => console.log(error));
  };

  // const handleResponseSuccess = accessToken => {
  //   setIsLogin(true);
  //   isAuthenticated();
  //   setAccessToken(accessToken);
  // };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        userInfo={userInfo}
        accessToken={accessToken}
      />
      <Routes>
        <Route exact path="/" element={<Landing isLogin={isLogin} />} />
        <Route path="/diary" element={<Diary />} />
        <Route
          path="/mypage"
          element={<Mypage user={userInfo} isLogin={isLogin} />}
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/trial" element={<Trial />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
