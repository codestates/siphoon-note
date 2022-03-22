import { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import Dropdown from './Dropdown';

import styled from 'styled-components';

// 로그인 상태에 따른 조건부 렌더링 구현
export default function Navbar({ isLogin, userInfo }) {
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
              <Profile>{userInfo.name}님, 안녕하세요!</Profile>
              <ImgWrapper
                onClick={() => SetIsDropdown(!isDropdown)}
                src="img/testava8.svg"
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
        {isDropdown ? <Dropdown></Dropdown> : null}
      </Nav>
    </>
  );
}

const Profile = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  line-height: 80px;
  text-transform: uppercase;
`;

const ImgWrapper = styled.img`
  font-weight: bold;
  cursor: pointer;
  width: 6rem;
`;

const Nav = styled.nav`
  position: fixed;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
  margin-top: 15px;
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
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
  font-size: 1.2rem;
  margin: 0.5rem;
  padding: 0.6rem;
  &:hover {
    box-shadow: 5px 3px black;
    transition: all 0.2s ease-in-out;
  }
`;
