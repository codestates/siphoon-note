import styled from 'styled-components';

export default function Description() {
  // mapping을 위한 안에 콘텐츠 데이터 (추후리팩토링)
  const data = [{}];

  return (
    <Wrapper>
      <CardContainer>
        <img className="thumbnail" src="img/clock.svg"></img>
        <span className="title">타이머</span>
        <div className="description">
          <span>10분 타이머</span>
          <span>타이머 종료 후 자동저장</span>
          <span>설명3</span>
        </div>
      </CardContainer>
      <CardContainer>
        <img className="thumbnail" src="img/calendar.svg"></img>
        <span className="title">습관분석</span>
        <div className="description">
          <span>달력 가나다라</span>
          <span>글쓰기 습관 트레킹</span>
          <span>설명4</span>
        </div>
      </CardContainer>
      <CardContainer>
        <img className="thumbnail" src="img/medal.svg"></img>
        <span className="title">랭킹</span>
        <div className="description">
          <span>글쓰기 상위랭킹 4명 선정</span>
          <a href="#ranking">랭킹으로 바로가기</a>
          {/* <span> 글 공개하고 공유</span> */}
        </div>
      </CardContainer>
      <CardContainer>
        <img className="thumbnail" src="img/star.svg"></img>
        <span className="title">글 공유</span>
        <div className="description">
          <span>영감아앙아</span>
          <span>매일 글감 키워드 전달</span>
          <span> 글 공개하고 공유</span>
          <a href="#public">공유보러 바로가기</a>
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
  background: floralwhite;
  flex-wrap: wrap;
  border-radius: 22px;
  min-width: 360px;
  min-height: 500px;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 1.3rem;
  box-shadow: 8px 8px 5px rgb(0, 0, 0, 0.2);

  .thumbnail {
    width: 44%;
    border: 2px solid black;
    padding: 1.5rem;
    margin: 1.5rem 2rem 0.7rem 2rem;
    box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.2);
    border-radius: 10px;
    background: white;
    opacity: 0.8;
  }

  .title {
    font-weight: bold;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }

  .description {
    > span {
      display: block;
      margin: 5px 0px;
    }

    > a {
      // text-decoration: none;
      // color: black;
    }
  }
`;
