import styled from 'styled-components';

export default function PublicEssays() {
  const data = [{}];

  return (
    <Wrapper>
      <CardContainer>
        <span className="username">이수리</span>
        <span className="created-at">2022-03-22</span>
        <p className="content">
          글이 들어갑니다. 이스! 뭐 그럴수도 있고 아닐 수도 있
          {/* 아닐 수도 있고!그럴수도 있고 아닐 수도 있고!그럴수도 있고 아닐 수도
          있고! */}
        </p>
      </CardContainer>
      <CardContainer></CardContainer>
      <CardContainer></CardContainer>
      <CardContainer></CardContainer>
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
  align-items: flex-start;
  background: white;
  flex-wrap: wrap;
  border-radius: 22px;
  min-width: 370px;
  min-height: 500px;
  font-size: 1.3rem;
  padding: 1.3rem;
  box-shadow: 8px 8px 5px rgb(0, 0, 0, 0.2);
  background: floralwhite;

  .username {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .created-at {
    font-size: 1.1rem;
    color: gray;
  }
  .content {
    font-size: 1.1rem;
  }
`;
