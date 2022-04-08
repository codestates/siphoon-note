import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Diary from './pages/Diary';
import Mypage from './pages/Mypage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Trial from './pages/Trial';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar';

function App() {
  // 로그인 관련 전역 상태 변수
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [userInfo, setUserInfo] = useState({ email: '', name: 'suri' });

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar isLogin={isLogin} userInfo={userInfo} />
      <Routes>
        <Route exact path="/" element={<Landing isLogin={isLogin} />} />
        <Route path="/diary" element={<Diary accessToken={accessToken} />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/trial" element={<Trial />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
