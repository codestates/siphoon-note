import styled from 'styled-components';

export default function Description() {
  // mapping을 위한 안에 콘텐츠 데이터 (추후리팩토링)
  const data = [{}];

  return (
    <Wrapper>
      <CardContainer>
        <img className="thumbnail" src="img/calendar.svg"></img>
        <div className="description">
          <span>10분 타이머</span>
          <span>타이머 종료 후 자동저장</span>
          <span>설명3</span>
        </div>
      </CardContainer>
      <CardContainer>
        <img className="thumbnail" src="img/pencil.svg"></img>
        <div className="description">
          달력으로 체크ㅋㅋㅋ<br></br>습관 분석
          <br></br>
        </div>
      </CardContainer>
      <CardContainer>
        <img className="thumbnail" src="img/clock.svg"></img>
        <div className="description">
          매일 글감 키워드 전달
          <br></br>내 글 공개하고 공유
        </div>
      </CardContainer>
      <CardContainer>
        <img className="thumbnail" src="img/pencil3.svg"></img>
        <div className="description">
          이주의 랭킹TOp4 선출
          <br></br>설명3
        </div>
      </CardContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  padding: 5rem;
`;

const CardContainer = styled.div`
  flex: 1 1 0;
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: white;
  flex-wrap: wrap;
  border-radius: 22px;
  min-width: 370px;
  min-height: 500px;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 1.2rem;
  box-shadow: 8px 8px 5px rgb(0, 0, 0, 0.2);
  background: floralwhite;

  .thumbnail {
    width: 50%;
    border: 2px solid black;
    padding: 1.5rem;
    margin: 1.5rem;
    border-radius: 10px;
    background: white;
  }
  .description {
    > span {
      display: block;
      margin: 7px 0px;
    }
  }
`;
