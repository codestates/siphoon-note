import { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

// import { useRecoilValue } from 'recoil';
// import { userProfileState } from 'Atoms';

// 로그인 상태에 따른 조건부 렌더링 구현
export default function Navbar() {
  // const [isDropdown, SetIsDropdown] = useState(false);
  const menuArr = [
    { title: '소개', to: '/about' },
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
          {menuArr.map(({ title, to }, index) => {
            return (
              <div key={index}>
                <NavBtnLink to={to}>{title}</NavBtnLink>
              </div>
            );
          })}
        </NavMenu>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  position: fixed;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`;

const NavMenu = styled.div`
  display: flex;
  aligh-items: center;
  margin-right: 50px;
`;

const NavBtnLink = styled(Link)`
  font-weight: bold;
  display: flex;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: black;
  border: solid;
  background: white;
  font-size: 1.4rem;
  margin: 1rem;
  padding: 0.7rem;

  &:hover {
    transition: all 0.2s ease-in-out;
  }
`;
