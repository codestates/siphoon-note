import styled from 'styled-components';

export const Label = styled.label`
  margin-bottom: 3px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  border-radius: 5px;

  border: 1px solid #8888;
`;

export const Button = styled.button`
  width: 48.3%;
  height: 47px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  background-color: ${props => props.BackgroundColor || 'green'};
  opacity: 0.9;
  color: ${props => props.color || 'white'};

  font-weight: bold;
  font-size: 20px;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
  &:active {
    opacity: 0.2;
  }
`;
