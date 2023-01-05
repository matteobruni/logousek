import { useEffect, useState } from "react";
import { Light, TrafficContainer, Lighting, LightWrapper } from "./styled";

type TrafficLightsProps = { countdownTime: number; timerIsDone?: () => void };

const TrafficLights: React.FC<TrafficLightsProps> = ({
  countdownTime,
  timerIsDone
}) => {
  const startTime = new Date().getTime();
  const [activeColor, setActiveColor] = useState("red");
  const [elapsedMilis, setElapsedMilis] = useState(
    startTime - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedMilis(elapsedMilis + (new Date().getTime() - startTime));
    }, 1000);

    if (countdownTime - elapsedMilis < 4000) {
      setActiveColor("orange");
    }

    if (countdownTime - elapsedMilis < 2000) {
      setActiveColor("green");
    }

    if (countdownTime && elapsedMilis >= countdownTime) {
      clearInterval(interval);
      timerIsDone && timerIsDone();
    }

    return () => clearInterval(interval);
  }, [countdownTime, elapsedMilis, startTime, timerIsDone]);
  const isActiveRed = activeColor === "red";
  const isActiveOrange = activeColor === "orange";
  const isActiveGreen = activeColor === "green";

  return (
    <TrafficContainer>
      <LightWrapper>
        <Light color="red" isActive={isActiveRed} />
        {isActiveRed && <Lighting color="red" />}
      </LightWrapper>
      <LightWrapper>
        <Light color="orange" isActive={isActiveOrange} />
        {isActiveOrange && <Lighting color="orange" />}
      </LightWrapper>
      <LightWrapper>
        <Light color="green" isActive={isActiveGreen} />
        {isActiveGreen && <Lighting color="green" />}
      </LightWrapper>
    </TrafficContainer>
  );
};

export default TrafficLights;
