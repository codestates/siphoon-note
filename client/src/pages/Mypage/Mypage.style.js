import styled from 'styled-components';

export const MypageWrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: 79vh;
`;

export const UpdateTextInput = styled.div`
  width: 400px;
`;
export const ButtonsWrapper = styled.div`
  button {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  button + button {
    margin-left: 10px;
  }
`;
