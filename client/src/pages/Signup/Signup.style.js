import styled from 'styled-components';

export const BackButton = styled.button`
z-index:500;
position:fixed;
top:20px;
left:20px;
font-weight: 500;
display: flex;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
color: black;
border: solid;
background: white;
font-size: 1.15rem;
padding: 0.65rem;

&:hover {
  box-shadow: 4px 2px black;
  transition: all 0.2s ease-in-out;`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin-top: 7rem;
  margin-bottom: 23rem;
`;

export const Section = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    margin-bottom: 1rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 55px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  margin-top: 5px;
  &:focus {
    outline: 4px solid primary-light;
    border: none;
  }
`;

export const TextWrap = styled.div`
  border: 1px solid black;
  margin: 1rem 0rem;
  // border-radius: 10px;
  font-size: 1.1rem;
  padding: 1rem;
`;

export const TextP = styled.div``;

export const Span = styled.div`
  color: ${props => props.color || 'red'};
`;

export const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 7px;
`;

export const Submitwrap = styled.div`
  width: 100%;
  transform: translateY(37px);
`;
