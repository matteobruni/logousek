import { useEffect, useState } from "react";
import { formatTime } from "../../helpers/time-helper";

function Timer({ countdownTime, timerIsDone = () => {} }) {
  const startTime = new Date().getTime();
  const [elapsedMilis, setElapsedMilis] = useState(
    startTime - new Date().getTime()
  );

  // useEffect(() => {
  //   const newTime = elapsedMilis + (new Date().getTime() - startTime);
  //   const interval = setInterval(() => {
  //     setElapsedMilis(newTime);
  //   }, 1000);

  //   if (endingTime && newTime >= endingTime) {
  //     clearInterval(interval);
  //     timerIsDone();
  //   }

  //   return () => {
  //     return clearInterval(interval);
  //   };
  // }, [countdownTime, elapsedMilis, endingTime, startTime, timerIsDone]);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedMilis(elapsedMilis + (new Date().getTime() - startTime));
    }, 1000);

    if (countdownTime && elapsedMilis >= countdownTime) {
          clearInterval(interval);
          timerIsDone();
        }

    return () => clearInterval(interval);
  }, [countdownTime, elapsedMilis, startTime, timerIsDone]);

  return <p>{formatTime(countdownTime ? countdownTime - elapsedMilis : elapsedMilis)}</p>;
}

export default Timer;
