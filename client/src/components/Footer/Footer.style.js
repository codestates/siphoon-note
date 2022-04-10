import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  border-top: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height || '175px'};
  font-size: 1.1rem;
  background-color: rgb(247, 178, 206, 1);
  width: 100%;
  position: ${props => props.position || 'static'};
  bottom: 0;
`;
