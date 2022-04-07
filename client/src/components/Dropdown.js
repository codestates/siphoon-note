// import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import * as config from '../config/config';
import Navbar from './Navbar';

export default function Dropdown({
  isLogin,
  setIsLogin,
  accessToken,
  drop,
  setDrop,
}) {
  const dropDownArr = [
    { title: '홈으로', to: '/', logout: false },
    {
      title: '회원정보 수정',
      to: '/mypage',
      logout: false,
    },
    {
      title: '로그아웃',
      to: '/',
      logout: true,
    },
  ];

  const handleLogout = () => {
    // axios
    //   .delete(SIGN_OUT, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       authorization: `Bearer ${accessToken}`,
    //     },
    //   })
    //   .then(respond => {
    //     if (respond.status === 200) {
    //       setIsLogin(false);
    //     }
    //   })
    //   .catch(error => console.log(error));
    setIsLogin(false);
  };

  const handle = () => {
    setDrop(false);
  };
  // 로그아웃 요청 보내기

  return (
    <DropdownLayout onClick={handle}>
      <DropdownMenu>
        {isLogin &&
          drop &&
          dropDownArr.map(({ title, to, logout }, index) => {
            return logout ? (
              <MenuItems key={index}>
                <NavLink to={to} onClick={handleLogout}>
                  {title}
                </NavLink>
              </MenuItems>
            ) : (
              <MenuItems key={index}>
                <NavLink to={to}>{title}</NavLink>
              </MenuItems>
            );
          })}
      </DropdownMenu>
    </DropdownLayout>
  );
}

const DropdownLayout = styled.div`
  width: 150px;
  background: white;
  border: 1.5px solid black;
  border-radius: 15px;
  position: absolute;
  overflow: hidden;
  top: calc(100% + 7px);
  right: 10px;

  & ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  & a {
    display: block;
    text-decoration: none;
    align-items: center;
    color: black;
    padding: 8px 15px;
    transition: all 0.2s;
  }
  & a:hover {
    color: black;
  }
`;
const DropdownMenu = styled.ul``;
const MenuItems = styled.li`
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  font-size: 1rem;

  a {
    &:hover {
      background: floralwhite;
    }
  }
`;
