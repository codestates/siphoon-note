import styled from 'styled-components';

export default function Analysis() {
  // 분석 데이터 3종
  const analysisData = [
    { title: '가장 생산성이 높은 시간', data: '저녁 7시' },
    { title: '연속 에세이 작성 일수', data: '5일' },
    { title: '이번달 에세이 작성수', data: '36개' },
  ];

  return (
    <Wrapper>
      <CalendarWrapper>
        <div>분석페이지입니다.</div>
      </CalendarWrapper>
      <AnalysisWrapper>
        {analysisData.map((data, index) => {
          return (
            <Box key={index}>
              <span>{data.title}</span>
              <div>{data.data}</div>
            </Box>
          );
        })}
      </AnalysisWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 101vh;
  margin-left: 35px;
  margin-right: 20px;
  border-radius: 10px;
  padding: 1rem;
  padding-top: 105px;
  flex: 3.5 1 0;
  display: flex;
  flex-direction: column;
  // border: 3px solid black;
`;

const CalendarWrapper = styled.div`
  flex: 3 1 0;
  border: 3px solid black;
`;

const AnalysisWrapper = styled.div`
  // border: 3px solid black;
  flex: 1 1 0;
  display: flex;
  gap: 30px;
  padding: 2rem;
  background: rgb(211, 211, 211, 0.2);

  &:hover {
    background: rgb(211, 211, 211, 0.3);
  }
`;

const Box = styled.div`
  flex: 1 1 0;
  border: 3px solid black;
  background: white;
  border-radius: 20px;
  flex-wrap: wrap;
  font-size: 1.1rem;
  padding: 2rem;
  box-shadow: 8px 8px 5px rgb(0, 0, 0, 0.2);
  text-align: center;

  > span {
    font-weight: bold;
    font-size: 1.15rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    padding-top: 16%;
    text-decoration: underline;
  }
`;
