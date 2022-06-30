import styled from 'styled-components';
import { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import './analysis.css';

export default function Analysis({ markList, record }) {
  // 캘린더
  const [value, onChange] = useState(new Date());
  const { currentStreaks, longestStreaks, usageDate } = record;
  // 분석 데이터 3종
  const analysisData = [
    { title: '서비스 사용 일수', data: usageDate },
    { title: '에세이 연속 작성 일수', data: currentStreaks },
    { title: '최장 연속 작성 일수', data: longestStreaks },
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
            if (markList.find(x => x === moment(date).format('YYYY-MM-DD'))) {
              return (
                <>
                  <div>
                    <img className="image" src="img/pencil.svg"></img>
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
  margin-left: 27px;
  margin-right: 35px;
  border-radius: 10px;
  padding: 0.8rem;
  padding-top: 120px;
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
  flex: 0.85 1 0;
  display: flex;
  gap: 30px;
  padding: 2rem 1.2rem;
  border-radius: 10px;
  margin-bottom: 5px;
`;

const Box = styled.div`
  flex: 1 1 0;
  border: 3px solid black;
  background: rgb(211, 211, 211, 0.9);
  border-radius: 20px;
  flex-wrap: wrap;
  font-size: 1.1rem;
  padding: 2rem;
  box-shadow: 8px 8px 5px rgb(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 300;

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
