import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Ranking({ topUser }) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.wrapper', {
    scrollTrigger: {
      trigger: '.wrapper',
      start: 'top 85%',
      end: '15% bottom',
      // markers: true,
      toggleActions: 'play pause reverse restart',
      scrub: true,
    },
    duration: 3,
    opacity: 1,
  });

  return (
    <Wrapper className="wrapper">
      <Description>
        <RankingCard className="first">
          <img
            src={`img/avatar/${topUser[0].profileImage.imageUrls}.svg`}
          ></img>
          <div className="content">
            <div className="name">1등 {topUser[0].username}</div>
            <div>{topUser[0].usageDates}일</div>
          </div>
        </RankingCard>
        <div className="second">
          <h2>연속작성일수 TOP4</h2>
        </div>
      </Description>
      <Content>
        {topUser.map((user, index) => {
          if (index >= 1) {
            return (
              <RankingCard key={index}>
                <img
                  src={`img/avatar/${user.profileImage.imageUrls}.svg`}
                ></img>
                <div className="content">
                  <div className="name">2등 {user.username}</div>
                  <div>{user.usageDates}일</div>
                </div>
              </RankingCard>
            );
          }
        })}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 88vw;
  padding: 1rem;
  opacity: 0.7;
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
    font-size: 2.2rem;
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
