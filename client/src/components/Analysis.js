import styled from 'styled-components';
import { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import './analysis.css';

export default function Analysis() {
  // 캘린더
  const [value, onChange] = useState(new Date());
  const [mark, setMark] = useState([
    '11-03-2022',
    '03-03-2022',
    '17-03-2022',
    '24-03-2022',
    '31-03-2022',
    '10-02-2022',
    '11-02-2022',
  ]);

  // 분석 데이터 3종
  const analysisData = [
    { title: '가장 생산성이 높은 시간', data: '저녁 7시' },
    { title: '에세이 연속 작성 일수', data: '5일' },
    { title: '이달 에세이 작성 수', data: '36개' },
  ];

  return (
    <Wrapper>
      <CalendarWrapper>
        <Calendar
          onChange={onChange}
          showNeighboringMonth={false}
          navigationLabel={null}
          formatDay={(locale, date) => moment(date).format('DD')}
          value={value}
          tileContent={({ date, view }) => {
            if (mark.find(x => x === moment(date).format('DD-MM-YYYY'))) {
              return (
                <>
                  <div className="mark">
                    <img className="image" src="img/연필.svg"></img>
                  </div>
                </>
              );
            }
          }}
        />
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
  margin-left: 55px;
  margin-right: 5px;
  border-radius: 10px;
  padding: 0.8rem;
  padding-top: 102px;
  flex: 3.5 1 0;
  display: flex;
  flex-direction: column;
`;

const CalendarWrapper = styled.div`
  flex: 3 1 0;
  display: flex;
  justify-content: center;
  z-index: 300;
`;

const AnalysisWrapper = styled.div`
  border-top: none;
  flex: 1 1 0;
  display: flex;
  gap: 30px;
  padding: 2rem;
  border-radius: 10px;
`;

const Box = styled.div`
  flex: 1 1 0;
  border: 3px solid black;
  background: rgb(211, 211, 211, 1);
  border-radius: 20px;
  flex-wrap: wrap;
  font-size: 1.1rem;
  padding: 2rem;
  box-shadow: 8px 8px 5px rgb(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > span {
    font-weight: bold;
    font-size: 1.15rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 7%;
    text-decoration: underline;
  }
`;
