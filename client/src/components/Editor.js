import styled from 'styled-components';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
import { useState } from 'react';
import axios from 'axios';
import apiUris from '../config/config';

export default function Editor({ handleEditor, diary, number, readHandler }) {
  console.log(diary);
  const [input, setInput] = useState(diary.content);
  const handleChange = e => {
    setInput(e.target.value);
  };

  const [isPublic, setIsPublic] = useState(diary.isPublic);
  const handlePublic = () => {
    setIsPublic(!isPublic);
  };
  const handleSubmit = () => {
    //! 서버에 수정 요청 보내기 (토큰 필요)
    axios
      .put(
        apiUris.UPDATE_ESSAY_BY_ID + '/' + diary.essayId,
        {
          content: input,
          isPublic,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            withCredentials: true,
          },
        }
      )
      .then(res => {
        if (res.status === 200) {
          // 1. 모달창 끄기
          handleEditor();
          // Case1 서버로 get 요청 보내기
          readHandler();
          // Case2 클라사이드에서 수정사항 반영해서 임시로 보여주기
          // res.data 에서 받은 객체를 diary에 복사하기
          // Object.assign(diary, res.data);
        }
      })
      .catch(err => {
        console.log(err);
        if (err.status === 401) {
          return alert(err.message);
        }
        if (err.status === 500) {
          return alert(err.message);
        }
      });
  };
  return (
    <ModalBackdrop onClick={handleEditor}>
      <ModalView onClick={e => e.stopPropagation()}>
        <div onClick={handleEditor} className="close-btn">
          &times;
        </div>
        <div className="title">{number}번째 글쓰기</div>
        <span>{diary.createdAt}</span>
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
        <textarea value={input} onChange={handleChange} className="desc">
          {diary.content}
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
