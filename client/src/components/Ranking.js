import styled from 'styled-components';

export default function Ranking() {
  return (
    <Wrapper>
      <Description>
        <RankingCard className="first">
          <img src="img/avatar/0.svg"></img>
          <div className="content">
            <div className="name">1등 이수리</div>
            <div>38건</div>
          </div>
        </RankingCard>
        <div className="second">
          <h2>연속작성일수 TOP4</h2>
        </div>
      </Description>
      <Content>
        <RankingCard>
          <img src="img/avatar/1.svg"></img>
          <div className="content">
            <div className="name">2등 이수리</div>
            <div>38건</div>
          </div>
        </RankingCard>
        <RankingCard>
          <img src="img/avatar/12.svg"></img>
          <div className="content">
            <div className="name">3등 이수리</div>
            <div>38건</div>
          </div>
        </RankingCard>
        <RankingCard>
          <img src="img/avatar/3.svg"></img>
          <div className="content">
            <div className="name">4등 이수리</div>
            <div>38일</div>
          </div>
        </RankingCard>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 88vw;
  padding: 1rem;
`;

const Description = styled.div`
  flex: 1 0 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  .first {
    flex: 2 0 0;
    margin: 1rem;

    > img {
      width: 40%;
    }
  }

  .second {
    flex: 1 0 0;
    color: black;
    border: 3px solid black;
    background: floralwhite;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    background-image: url('img/bushes.svg');
    background-size: cover;
    opacity: 0.9;
    font-weight: 500;
  }
`;

const Content = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
`;

const RankingCard = styled.div`
  border: 3px solid black;
  background: floralwhite;
  display: flex;
  padding: 1rem 2.5rem;
  margin: 1rem;
  justify-content: space-end;

  > img {
    display: flex;
    justify-content: center;
  }

  .content {
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .name {
      font-size: 1.6rem;
      color: gray;
    }
  }
`;
