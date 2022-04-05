import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  width: 100%;
`;

export const LoadingIndicate = styled.div`
  margin: 5% auto;
  height: 60px;
  width: 60px;
  border: 6px solid #fff;
  border-right-color: rgb(255, 135, 70, 3);
  border-top-color: rgb(255, 135, 70, 3);
  border-radius: 100%;
  -webkit-animation: spin 800ms infinite linear;
  animation: spin 900ms infinite linear;
`;
