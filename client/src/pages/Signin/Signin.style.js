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

export const SigninWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  height: 100vh;

  > h2 {
    padding: 0;
    margin-bottom: 0.5rem;
  }
`;

export const TextInputListWrapper = styled.div``;
export const ButtonsWrapper = styled.div`
  button {
    display: block;
    width: 500px;
  }
  margin-top: 15px;
  margin-bottom: 60px;
  /* 
    button + button {
    background-color: yellow;
    opacity: 0.5;
  } 
  */
`;

export const OauthButtonsWrapper = styled.div`
  button {
    display: block;
    width: 500px;
    margin-bottom: 1rem;
  }
  button + button {
    margin-top: 30px;
    margin-bottom: 7rem;
  }
`;
export const ErrMesWrapper = styled.div`
  color: red;
`;
