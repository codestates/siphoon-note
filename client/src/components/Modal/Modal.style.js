import styled from 'styled-components';

export const ModalBack = styled.section`
  /* position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;

  z-index: 20000;
  width: 100%;
  height: 110%;
  background-color: rgba(0, 0, 0, 0.4); */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 20000;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`;

export const View = styled.div.attrs(props => ({
  role: 'dialog',
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 1px solid lightskyblue;
  background-color: white;
  width: 340px;
  height: 190px;
  border-radius: 1rem;
  position: relative;
  font-size: 21px;
  // 가운데 정렬
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  // 알림 버튼
  > .talk {
    position: absolute;
    text-align: center;
    width: 100px;
    height: 30px;
    border-radius: 1rem;
    top: 7px;
    font-weight: bold;
    center: 7px;
    margin: 2px;
    padding: 2px;
    background-color: lightgray;
    font-size: 17px;
  }

  // 확인 버튼
  > .bb {
    position: absolute;

    width: 70px;
    height: 30px;
    border-radius: 1.5rem;
    bottom: 5px;
    center: 7px;
    cursor: pointer;
    border: 1px solid pink;
    font-size: 17px;
    font-weight: bold;
    color: white;
    right: 10px;
    background-color: green;
  }
  > .bb + .bb {
    position: absolute;
    width: 70px;
    height: 30px;
    border-radius: 1.5rem;
    bottom: 5px;
    center: 7px;
    cursor: pointer;
    border: 1px solid pink;
    font-size: 17px;
    font-weight: bold;
    color: white;
    left: 180px;
    background-color: green;
  }
`;

// box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);

//   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
// 가운데 정렬
// position: fixed;
// top: 40%;
// left: 50%;
// transform: translate(-50%, -50%);
