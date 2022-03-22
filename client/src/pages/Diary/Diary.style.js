import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.25fr 1.5fr 0.4fr 0fr;
  grid-template-areas:
    'nav nav nav nav'
    'sidebar main main main'
    'sidebar content content content'
    'sidebar footer footer footer';
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  background: url(${props => props.imgUrl}) no-repeat;
  background-size: cover;
`;

export const Main = styled.div`
  background: #1f2128;
  color: white;
  grid-area: main;
  padding: 0.25rem;
  opacity: 50%;
`;

export const SideBar = styled.div`
  background: #9aaab7;
  grid-area: sidebar;
  padding: 0.25rem;
  opacity: 50%;
`;
export const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
`;

export const Content1 = styled.div`
  background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
  opacity: 50%;
`;

export const Content2 = styled(Content1)``;
export const Content3 = styled(Content1)``;
