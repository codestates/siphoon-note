import styled from 'styled-components';
import { TiArrowSortedDown } from 'react-icons/ti';

export default function TagToggle({
  setIsTagsDropdown,
  isTagsDropdown,
  setIsTrashDropdown,
}) {
  const dummy = [
    'tag1',
    'tag2',
    'tag3',
    'tag4',
    'tag5',
    'tag5',
    'tag5',
    'tag5',
    'tag5',
    'tag5',
    ,
    'tag5',
    'tag5',
    'tag5',
    'tag5',
    'tag5',
  ];

  const handleDropdown = () => {
    setIsTrashDropdown(false);
    setIsTagsDropdown(!isTagsDropdown);
  };
  return (
    <>
      <Wrapper>
        <div>Tags</div>
        <span onClick={handleDropdown}>
          <TiArrowSortedDown></TiArrowSortedDown>
        </span>
      </Wrapper>
      {isTagsDropdown ? (
        <Container>
          <div>
            {dummy.map((tag, index) => {
              return (
                <span
                  key={index}
                  onClick={event => console.log(event.target.textContent)}
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <span className="pagination">1 2 3 4</span>
        </Container>
      ) : null}
    </>
  );
}

const Container = styled.div`
  border: 2.5px solid black;
  width: 88%;
  background: white;
  margin: 0px;
  border-top: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3px 8px;

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    max-height: 115px;

    > span {
      padding: 6px;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  > span {
    text-align: center;
    margin-top: 3px;
  }
`;

const Wrapper = styled.div`
  margin-top: 0.9rem;
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
