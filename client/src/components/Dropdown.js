// import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Dropdown() {
  const dropDownArr = [
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

  return (
    <DropdownLayout>
      <DropdownMenu>
        {dropDownArr.map(({ title, to, logout }, index) => {
          return (
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
    padding: 10px 15px;
    transition: all 0.2s;
  }
  & a:hover {
    color: black;
  }
`;
const DropdownMenu = styled.ul``;
const MenuItems = styled.li`
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  font-size: 1rem;

  a {
    &:hover {
      opacity: 70%;
    }
  }
`;
