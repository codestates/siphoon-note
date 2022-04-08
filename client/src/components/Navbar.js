import { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import Dropdown from './Dropdown';

import styled from 'styled-components';

// 로그인 상태에 따른 조건부 렌더링 구현
export default function Navbar({ isLogin, userInfo, setIsLogin, accessToken }) {
  const [isDropdown, SetIsDropdown] = useState(false);
  const menuArr = [
    { title: '홈으로', to: '/' },
    {
      title: '로그인',
      to: '/signin',
    },
    {
      title: '회원가입',
      to: '/signup',
    },
  ];

  return (
    <>
      <Nav>
        <NavMenu>
          {isLogin ? (
            <>
              <Profile>{userInfo.username}님, 안녕하세요!</Profile>
              <ImgWrapper
                onClick={() => SetIsDropdown(!isDropdown)}
                src={`img/avatar/${userInfo.profileImage}.svg`}
              ></ImgWrapper>
            </>
          ) : (
            menuArr.map(({ title, to }, index) => {
              return (
                <div key={index}>
                  <NavBtnLink to={to}>{title}</NavBtnLink>
                </div>
              );
            })
          )}
        </NavMenu>
        {isDropdown ? (
          <Dropdown
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            accessToken={accessToken}
            drop={isDropdown}
            setDrop={SetIsDropdown}
          ></Dropdown>
        ) : null}
      </Nav>
    </>
  );
}

const Profile = styled.div`
  font-weight: 500;
  font-size: 1.1rem;
  text-align: center;
  line-height: 65px;
  text-transform: uppercase;
`;

const ImgWrapper = styled.img`
  font-weight: bold;
  cursor: pointer;
  width: 3.8rem;
  height: auto;
  margin: 0px 7px;
`;

const Nav = styled.nav`
  background: rgb(254, 205, 133, 0.02);
  position: fixed;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 500;
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 13px;
  margin-top: 17px;
`;

const NavBtnLink = styled(Link)`
  font-weight: 500;
  display: flex;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: black;
  border: solid;
  background: white;
  font-size: 1.15rem;
  margin: 0.45rem;
  padding: 0.65rem;
  &:hover {
    box-shadow: 4px 2px black;
    transition: all 0.2s ease-in-out;
  }
`;
