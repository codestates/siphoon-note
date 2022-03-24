import styled from 'styled-components';

export default function Analysis() {
  return (
    <Wrapper>
      <CalendarWrapper>
        <div>분석페이지입니다.</div>
      </CalendarWrapper>
      <AnalysisWrapper>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </AnalysisWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid black;
  display: grid;
`;

const CalendarWrapper = styled.div`
  border: 1px solid black;
`;

const AnalysisWrapper = styled.div`
  border: 1px solid black;
`;
