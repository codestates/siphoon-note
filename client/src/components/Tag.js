import styled from 'styled-components';
import { useState } from 'react';

export default function Tag() {
  const defaultTags = ['오늘아침'];
  const [tags, setTags] = useState(defaultTags);
  const removeTag = selected => {
    const filtered = tags.filter((_, index) => {
      return index !== selected;
    });
    setTags(filtered);
  };

  const addTag = event => {
    const userInput = event.target.value;
    const filtered = tags.filter(tag => tag === userInput);

    if (userInput !== '' && filtered.length === 0 && userInput.length <= 5) {
      setTags([...tags, userInput]);
      event.target.value = '';
    }
  };

  return (
    <>
      <TagsInput>
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span onClick={() => removeTag(index)} className="tag-close-icon">
                &times;
              </span>
            </li>
          ))}
        </ul>
        {tags.length === 3 ? null : (
          <input
            className={`tag-input`}
            type="text"
            onKeyUp={event => (event.key === 'Enter' ? addTag(event) : null)}
            placeholder="다섯자 이하 태그 :)"
          />
        )}
      </TagsInput>
    </>
  );
}

export const TagsInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: no-wrap;
  height: 38px;
  width: 64%;
  margin: 0.3rem;
  margin-left: 10px;
  border: 2px solid black;
  border-radius: 11px;

  > ul {
    display: flex;
    align-items: center;
    flex-wrap: no-wrap;
    padding: 0;

    > .tag {
      width: 85px;
      height: 27px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: black;
      font-size: 0.8rem;
      list-style: none;
      border-radius: 6px;
      margin: 0.2rem;
      background: white;
      border: 2px solid black;
      > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 12px;
        margin-left: 3px;
        color: black;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
      }
    }
  }

  > input {
    width: 100%;
    border: none;
    height: 33px;
    font-size: 13px;
    text-align: justify;
    border-radius: 6px;
    padding-left: 10px;
    background: rgb(193, 193, 193, 0.3);
    // ::placeholder {
    //   color: black;
    // }
    :focus {
      outline: transparent;
      background: white;
    }
  }

  &:focus-within {
    // border: 1px solid #4000c7;
  }
`;
