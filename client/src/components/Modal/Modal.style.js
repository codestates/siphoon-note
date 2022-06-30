import styled from 'styled-components';

export const ModalBack = styled.section`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`;

export const View = styled.div.attrs(props => ({
  role: 'dialog',
}))`
  flex-direction: column;
  border-radius: 10px;
  border: 3px solid black;
  background-color: #ffffff;
  text-align: center;
  animation: fadeInText 0.7s linear forwards;
  font-size: 1.3rem;

  @keyframes fadeInText {
    0% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }

  width: 400px;
  height: 260px;

  // 가운데 정렬
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  // 알림 버튼
  > .talk {
    margin-top: 30px;
    text-decoration: underline;
    margin-left: 15px;
    font-size: 1.9rem;
  }

  // 확인 버튼
  > .bb {
    position: absolute;
    width: 70px;
    height: 40px;
    bottom: 15px;
    center: 7px;
    right: 10px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: rgb(254, 205, 133, 0.8);
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    color: black;
    border: 2px solid black;
    background: white;
    font-size: 1rem;
    margin: 0.2rem;
    padding: 0.45rem;
    border-radius: 5px;
    &:hover {
      box-shadow: 2px 1px black;
      transition: all 0.2s ease-in-out;
    }
  }
  > .bb + .bb {
    position: absolute;
    align-items: center;
    width: 70px;
    bottom: 15px;
    center: 7px;
    font-size: 17px;
    font-weight: bold;
    color: white;
    height: 40px;
    right: 95px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    cursor: pointer;
    background-color: rgb(254, 205, 133, 0.8);
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    color: black;
    border: 2px solid black;
    background: white;
    font-size: 1rem;
    margin: 0.2rem;
    padding: 0.45rem;
    border-radius: 5px;
    &:hover {
      box-shadow: 2px 1px black;
      transition: all 0.2s ease-in-out;
    }
  }
`;

// > .bb {
//   font-weight: 500;
//   display: flex;
//   cursor: pointer;
//   background-color: rgb(254, 205, 133, 0.8);
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   color: black;
//   border: 2px solid black;
//   background: white;
//   font-size: 0.85rem;
//   margin: 0.2rem;
//   padding: 0.45rem;
//   border-radius: 10px;
//   &:hover {
//     box-shadow: 2px 1px black;
//     transition: all 0.2s ease-in-out;
//   }
// }
// > .bb + .bb {
//   font-weight: 500;
//   display: flex;
//   cursor: pointer;
//   background-color: rgb(254, 205, 133, 0.8);
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   color: black;
//   border: 2px solid black;
//   background: white;
//   font-size: 0.85rem;
//   margin: 0.2rem;
//   padding: 0.45rem;
//   border-radius: 10px;
//   &:hover {
//     box-shadow: 2px 1px black;
//     transition: all 0.2s ease-in-out;
//   }
// }
