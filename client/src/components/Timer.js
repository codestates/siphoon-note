import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Timer({ timerOn, handleSubmit }) {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (minutes === 0 && seconds === 59) {
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
      setShowTooltip(false);
      setMinutes(10);
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
              훌륭해요! 목표시간까지 1분 남았습니다!
            </span>
          </Tooltip>
          <Tooltip2>
            <span className="tooltip-text">
              꼭 남기고 싶은 하나의 문장이 있나요?
            </span>
          </Tooltip2>
          <Tooltip3>
            <span className="tooltip-text">
              잠시 후 글이 자동으로 저장됩니다.
            </span>
          </Tooltip3>
        </>
      )}
    </>
  );
}

const Tooltip = styled.div`
  position: absolute;
  top: -10px;
  display: inline-block;
  background: rgb(0, 0, 0, 0.4);
  font-size: 0.8rem;
  padding: 2px 8px;
  animation: fadein ease-in-out 5s;
  animation-fill-mode: forwards;
  border-radius: 5px;

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
  animation-delay: 5s;
  animation-duration: 5s;
`;

const Tooltip3 = styled(Tooltip)`
  opacity: 0;
  animation-delay: 53s;
  animation-duration: 5s;
`;
