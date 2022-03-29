import { useEffect, useState } from 'react';

export default function Timer({ minute, timerOn }) {
  const [minutes, setMinutes] = useState(minute);
  const [seconds, setSeconds] = useState(0);
  // const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      // if (minutes === 0 && seconds === 0) {
      //   setTooltip(true);
      // }
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
      {/* {showTooltip && <span>툴팁의자리다!</span>} */}
      <span>
        {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </>
  );
}
