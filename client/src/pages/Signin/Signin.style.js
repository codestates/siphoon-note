import styled from 'styled-components';
export const SigninWrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: 79vh;
`;

export const TextInputListWrapper = styled.div``;
export const ButtonsWrapper = styled.div`
  button {
    display: block;
    width: 400px;
  }
  margin-top: 115px;
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
    width: 400px;
  }
  button + button {
    margin-top: 15px;
  }
`;
