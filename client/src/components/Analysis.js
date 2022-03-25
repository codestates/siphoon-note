import styled from 'styled-components';

export default function Analysis() {
  return (
    <Wrapper>
      <CalendarWrapper>
        <div>분석페이지입니다.</div>
      </CalendarWrapper>
      <AnalysisWrapper>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </AnalysisWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 60vw;
  height: 80vh;
  border: 1px solid black;
  display: grid;
  grid-template-rows: 2.5fr 1fr;
  // justify-content: center;
  // align-items: center;
  flex-direction: column;
`;

const CalendarWrapper = styled.div`
  border: 1px solid black;
`;

const AnalysisWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  // grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;
