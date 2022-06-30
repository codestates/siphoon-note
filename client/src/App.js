import React, { useState, useEffect } from 'react';
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
import Error from './pages/Error';
import apiUris from './config/config';
axios.defaults.withCredentials = true;
function App() {
  // 로그인 관련 전역 상태 변수
  const [isLogin, setIsLogin] = useState(false);

  // const [accessToken, setAccessToken] = useState(null);

  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
    profileImage: '',
    gender: '',
    birthday: '',
    region: '',
  });
  const [keyword, setKeyword] = useState('윤슬');

  const isAuthenticated = () => {
    axios
      .get(apiUris.READ_USER_INFO)
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
      .catch(error => {
        if (error.status === 400) {
          alert(error.message);
        } else if (error.status === 401) {
          alert(error.message);
        } else if (error.status === 500) {
          alert(error.message);
        }
      });
  };

  const handleResponseSuccess = () => {
    setIsLogin(true);
    isAuthenticated();
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        userInfo={userInfo}
        // accessToken={accessToken}
      />
      <Routes>
        <Route exact path="/" element={<Landing isLogin={isLogin} />} />
        <Route
          path="/diary"
          element={
            <Diary
              // accessToken={accessToken}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              keyword={keyword}
              setKeyword={setKeyword}
            />
          }
        />
        <Route
          path="/mypage"
          element={<Mypage user={userInfo} isLogin={isLogin} />}
        />
        <Route
          path="/signin"
          element={<Signin handleResponseSuccess={handleResponseSuccess} />}
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/trial" element={<Trial keyword={keyword} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
