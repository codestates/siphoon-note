import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Description() {
  // gsap.registerPlugin(ScrollTrigger);

  // mapping을 위한 안에 콘텐츠 데이터 (추후리팩토링)
  const DescriptionData = [
    {
      title: '타이머',
      image: 'clock',
      detail: [
        '글쓰기 몰입을 돕는 타이머 기능',
        '타이머 종료 후 자동 저장 기능',
      ],
    },
    {
      title: '습관분석',
      image: 'calendar',

      detail: [
        '작성일자를 달력에 스탬프로 기록',
        '유저의 글쓰기 데이터를 분석',
      ],
    },
    {
      title: '랭킹',
      image: 'medal',
      detail: ['상위 랭킹 기록 유저 4명 선정', '결과는 매주 업데이트'],
    },
    {
      title: '영감',
      image: 'star',
      detail: [
        '다른 유저와 나의 글 공유',
        '매일 새로운 글감 키워드 전달',
        '글감을 관리하는 태그 기능 제공',
      ],
    },
  ];

  return (
    <Wrapper>
      {DescriptionData.map((data, index) => {
        return (
          <CardContainer key={index}>
            <img className="thumbnail" src={`img/${data.image}.svg`}></img>
            {index === 3 ? (
              <a href="#public">
                <span className="title">{data.title}</span>
              </a>
            ) : (
              <span className="title">{data.title}</span>
            )}
            <div className="description">
              <span>{data.detail[0]}</span>
              <span>{data.detail[1]}</span>
              <span>{data.detail[2]}</span>
            </div>
          </CardContainer>
        );
      })}
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
  padding: 1.2rem;
  box-shadow: 8px 8px 5px rgb(0, 0, 0, 0.2);

  > a {
    color: black;
    margin-bottom: 1.3rem;
  }

  &:hover {
    transform: scale(1.02);
  }
  .thumbnail {
    width: 50%;
    border: 2px solid black;
    padding: 1.5rem;
    margin: 1.5rem 2rem 0.7rem 2rem;
    border-radius: 10px;
    background: white;
    opacity: 0.9;
  }
  .title {
    font-weight: bold;
    margin-bottom: 1.3rem;
    font-size: 1.2rem;
  }
  .description {
    > span {
      display: block;
      padding: 0.35rem;
      word-break: normal;
      word-wrap: break-word;
    }
  }
`;
