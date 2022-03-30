import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Timer({ minute, timerOn, handleSubmit }) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (minutes === 1 && seconds === 0) {
        setShowTooltip(true);
      }

      if (minutes === 0 && seconds === 0) {
        return handleSubmit();
      }
      if (seconds > 0) {
        setSeconds(prevSec => prevSec - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(prevMin => prevMin - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    if (timerOn) {
      return () => clearInterval(countdown);
    } else {
      setMinutes(minute);
      setSeconds(0);
      clearInterval(countdown);
    }
  }, [timerOn, minutes, seconds]);

  return (
    <>
      <span>
        {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
      </span>
      {showTooltip && (
        <>
          <Tooltip>
            <span className="tooltip-text">
              훌륭해요! 목표시간이 얼마 남지 않았어요! (수정)
            </span>
          </Tooltip>
          <Tooltip2>
            <span className="tooltip-text">
              타이머가 종료되면, 글은 자동으로 저장됩니다.(수정)
            </span>
          </Tooltip2>
        </>
      )}
    </>
  );
}

const Tooltip = styled.div`
  position: absolute;
  top: 0px;
  display: inline-block;
  background: rgb(0, 0, 0, 0.4);
  font-size: 0.8rem;
  padding: 0px 6px;
  animation: fadein 3s;
  animation-fill-mode: forwards;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  .tooltip-text {
    width: auto;
    color: white;
    text-align: center;
  }
`;

const Tooltip2 = styled(Tooltip)`
  opacity: 0;
  animation-delay: 3s;
`;
