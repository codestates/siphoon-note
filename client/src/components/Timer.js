import { useEffect, useState } from 'react';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

import styled from 'styled-components';

export default function Timer({ minute, timerOn }) {
  console.log('minute', minute);
  const [minutes, setMinutes] = useState(minute);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setMinutes(minute);
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
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
      {/* <Wrapper>
        <span className="arrow-up">
          <RiArrowUpSFill></RiArrowUpSFill>
        </span>
        <span>
          <RiArrowDownSFill></RiArrowDownSFill>
        </span>
      </Wrapper> */}
    </>
  );
}
