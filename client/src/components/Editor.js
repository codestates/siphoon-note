import styled from 'styled-components';
import { useState } from 'react';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';

export default function Editor({ isPublic, handlePublic }) {
  const handleEditor = () => {};
  const handleSubmit = () => {};
  return (
    <ModalBackdrop onClick={handleEditor}>
      <ModalView onClick={e => e.stopPropagation()}>
        <div onClick={handleEditor} className="close-btn">
          &times;
        </div>
        <div className="title">3번째 글쓰기</div>
        <span>2022년 3월 25일</span>
        <div className="toggle">
          <span>공개</span>
          {isPublic ? (
            <BsToggleOff
              className="public"
              onClick={handlePublic}
            ></BsToggleOff>
          ) : (
            <BsToggleOn className="private" onClick={handlePublic}></BsToggleOn>
          )}
          <span>비공개</span>
        </div>
        <textarea className="desc">
          영감 가나다라 마바사 아자영감 가나다라 마바사 아자차영감 가나다라
          마바사 아자차영감 가나다라 마바사 아자차영감 가나다라 마바사
          아자차영감 가나다라 마바사 아자차영감 가나다라 마바사 아자차영감
          가영감 가나 아자차영감 가나다라 마바사v 가나다라
        </textarea>
        <Button onClick={handleSubmit}>SUBMIT</Button>
      </ModalView>
    </ModalBackdrop>
  );
}

export const Button = styled.button`
  float: right;
  font-weight: 500;
  cursor: pointer;
  background-color: rgb(254, 205, 133, 0.8);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: black;
  border: 2px solid black;
  background: white;
  font-size: 1rem;
  margin: 0.2rem;
  margin-top: 1.2rem;
  padding: 0.45rem;
  border-radius: 10px;
  &:hover {
    box-shadow: 2px 1px black;
    transition: all 0.2s ease-in-out;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
`;

const ModalView = styled.div.attrs(props => ({
  role: 'dialog',
}))`
  display: absolute;
  border-radius: 10px;
  border: 3px solid black;
  background-color: #ffffff;
  width: 800px;
  height: 600px;
  overflow: auto;
  padding: 1rem;
  background: floralwhite;

  > div.close-btn {
    position: relative;
    float: right;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.3rem;
  }
  > .title {
    margin-top: 30px;
    font-size: 1.5rem;
    font-weight: bold;
  }

  > span {
    color: gray;
  }

  .toggle {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1rem;

    .public,
    .private {
      font-size: 2.1rem;
      cursor: pointer;
      margin: 0rem 0.3rem;
      color: black;
    }
  }
  > .desc {
    width: 100%;
    height: 62%;
    margin-top: 10px;
    font-size: 1.2rem;
    overflow: auto;
    padding: 10px;
    display: block;
    border: 2.5px solid black;

    &:focus {
      outline: none;
    }
  }
`;
