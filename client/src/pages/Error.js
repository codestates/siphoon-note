import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();
  return (
    <>
      <BackButton onClick={() => navigate(-1)}>😸️ 뒤로가기</BackButton>
      <Wrapper>
        <img src="/img/background/caterror.svg"></img>
        <span> &quot;흠.. 여기엔 당신과 저뿐인 것 같다옹!&quot;</span>
      </Wrapper>
    </>
  );
}

const BackButton = styled.button`
z-index:500;
position:absolute;
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

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    width: 43%;
    margin: 2.7rem;
  }

  > span {
    font-size: 1.7rem;
  }
`;
