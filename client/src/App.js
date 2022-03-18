import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Main from './pages/Main/Main';
import Mypage from './pages/Mypage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Trial from './pages/Trial';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/trial" element={<Trial />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
