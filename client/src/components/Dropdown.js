// import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import apiUris from '../config/config';
import axios from 'axios';
axios.defaults.withCredentials = true;

export default function Dropdown({ isLogin, setIsLogin, drop, setDrop }) {
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

  // 로그아웃 요청 보내기

  const handleLogout = () => {
    axios
      .delete(apiUris.SIGN_OUT, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(respond => {
        if (respond.status === 200) {
          setIsLogin(false);
        }
      })
      .catch(error => {
        if (error.status === 401) {
          alert(error.message);
        } else if (error.status === 500) {
          alert(error.message);
        }
      });
  };

  const drophandle = () => {
    setDrop(false);
  };

  return (
    <DropdownLayout onClick={drophandle}>
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
