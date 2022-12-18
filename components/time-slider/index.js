import React, {useState} from "react";
import TrafficLights from "../traffic-lights";
import Timer from "../timer";
import { ShowedPart, TemplateWrapper, QuestionPart } from "./styled";

const TIMER_COUNT_DOWN_TIME = 6000;

function TimeSlider({ showedPartContent, questionPartQuestions }) {
  const [isQuesionpart, setIsQuesionpart] = useState(false);
  const onTimerIsDoneHandler = () => {
    setIsQuesionpart(true);
  };

  return (
    <TemplateWrapper isQuesionpart={isQuesionpart}>
      <ShowedPart onClick={() => setIsQuesionpart(true)}>
        <h1>
          <Timer
            countdownTime={TIMER_COUNT_DOWN_TIME}
            timerIsDone={onTimerIsDoneHandler}
          />
        </h1>
        <TrafficLights countdownTime={TIMER_COUNT_DOWN_TIME} />
        {showedPartContent}
      </ShowedPart>
      <QuestionPart>{questionPartQuestions}</QuestionPart>
    </TemplateWrapper>
  );
}

export default TimeSlider;
