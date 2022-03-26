import styled from 'styled-components';
import { useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import { FiTrash2 } from 'react-icons/fi';
import { MdSettingsBackupRestore } from 'react-icons/md';

export default function Trash({ isDropdown, setIsDropdown }) {
  // const [isDropdown, setIsDropdown] = useState(false);
  const dummy = [
    { id: 1, content: 'deleted message 0' },
    { id: 2, content: 'delted message 1' },
    { id: 2, content: 'delted message 1' },
    { id: 2, content: 'delted message 1' },
    { id: 2, content: 'delted message 1' },
  ];

  const handleDelete = index => {
    console.log('delete', index);
  };

  const handleRestore = index => {
    console.log('restore', index);
  };

  return (
    <>
      <Wrapper>
        <div>Trash</div>
        <span onClick={() => setIsDropdown(!isDropdown)}>
          <TiArrowSortedDown></TiArrowSortedDown>
        </span>
      </Wrapper>
      {isDropdown ? (
        <Container>
          {dummy.map((message, index) => {
            return (
              <div key={index}>
                <span className="title">{message.content}</span>
                <span onClick={() => handleRestore(index)}>
                  <MdSettingsBackupRestore></MdSettingsBackupRestore>
                </span>
                <span onClick={() => handleDelete(index)}>
                  <FiTrash2></FiTrash2>
                </span>
              </div>
            );
          })}
        </Container>
      ) : null}
    </>
  );
}

const Container = styled.ul`
  border: 2.5px solid black;
  width: 88%;
  list-style: none;
  background: white;
  margin: 0px;
  border-top: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3px 8px 8px 8px;

  > div {
    display: flex;
    > span {
      padding: 0 1px;
      cursor: pointer;
    }
  }

  .title {
    flex: 1 1 0;
  }
`;

const Wrapper = styled.div`
  margin-top: 0.7rem;
  font-weight: 500;
  font-size: 1.05rem;
  width: 88%;
  height: 29px;
  border: 2.5px solid black;
  display: flex;
  justify-content: space-between;
  padding: 0px 9px;
  align-items: center;
  background: rgb(211, 211, 211, 0.9);
  > span {
    cursor: pointer;
    font-size: 1.2rem;
  }
`;
