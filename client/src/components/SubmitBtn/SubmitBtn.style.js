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
  width: 100%;
  height: 60px;
  border: 2.5px solid black;
  cursor: pointer;
  // border-radius: 10px;
  // box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  background-color: ${props => props.BackgroundColor || 'green'};
  // opacity: 0.9;
  color: ${props => props.color || 'white'};

  font-weight: 500;
  font-size: 1.25rem;
  // transition: opacity 0.2s;

  &:hover {
    box-shadow: 3px 2px black;
    transition: all 0.2s ease-in-out;
  }
  &:active {
    opacity: 0.2;
  }
`;
