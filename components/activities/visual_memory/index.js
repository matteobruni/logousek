import React, { useState, forwardRef, useEffect, useImperativeHandle } from "react";
import {
  TemplateWrapper,
  QuestionPart,
  ShowedPart,
  ActivityCardWrapper,
} from "./styled";
import ActivityCard from "../activity-card";
import { getRandomSvgs } from "../../../helpers/svg-helpers";
import Timer from "../../timer";

import { shuffle } from "../../../helpers/array-helper";

const TIMER_COUNT_DOWN_TIME = 11700000;


/*
TODO - add remove countDown - add semafor instead
*/

export default forwardRef(function VisualMemoryActivity(
  { complexity, tasksElapsed, onResetChanged, onHandleChanged },
  ref
) {
  const [generatedSvgs, setGeneratedSvgs] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [selectedElements, setSelectedElements] = useState([]);
  useImperativeHandle(ref, () => ({
    getResult: () => {
      return selectedElements?.length === correctAnswers.length && selectedElements?.reduce((res, currElement) => correctAnswers.includes(currElement) ? res : false, true)
    }
  }));

  useEffect(() => {
    if(correctAnswers.length === selectedElements?.length){
        onHandleChanged();
      }
  }, [correctAnswers, onHandleChanged, selectedElements])

  useEffect(() => {
    const svgs = getRandomSvgs(
      complexity === "1" ? 4 : complexity === "2" ? 6 : 9
    );

    const correctAnswersName =
      complexity === "1" ? 1 : complexity === "2" ? 2 : 4;
      
  
    const correctSvgsName = svgs
      .slice(0, correctAnswersName)
      .map((Svg) => Svg.name);
    setGeneratedSvgs(shuffle(svgs));
    setCorrectAnswers(correctSvgsName);
  }, [complexity]);

  const [isQuesionpart, setIsQuesionpart] = useState(false);
  const onTimerIsDoneHandler = () => {
    setIsQuesionpart(true);
  };

  const select = (elementName) => {
    setSelectedElements((v) => {
      if (v.includes(elementName)) {
        return v.filter((selectedItem) => selectedItem !== elementName);
      } else {
        return [...v, elementName];
      }
    });
  };
  
    const questionPartQuestions = generatedSvgs.map((Element) => {
      
    const elementName = Element?.name;
    return (
      <ActivityCard
        key={`element-card-${elementName}`}
        onClick={() => select(elementName)}
        selected={selectedElements?.includes(elementName)}
      >
        <Element />
      </ActivityCard>
    );
  });

  
  return (
    <TemplateWrapper isQuesionpart={isQuesionpart}>
      <ShowedPart onClick={() => setIsQuesionpart(true)}>
        <h1>
          <Timer
            countdownTime={TIMER_COUNT_DOWN_TIME}
            timerIsDone={onTimerIsDoneHandler}
          />
        </h1>
        <h2>Zapamatuj si obrázek</h2>
        <ActivityCardWrapper>
          {generatedSvgs.filter(Svg => correctAnswers.includes(Svg.name)).map((Element) => (
            <ActivityCard key={`element-card-${Element.name}`}>
              <Element />
            </ActivityCard>
          ))}
        </ActivityCardWrapper>
      </ShowedPart>
      <QuestionPart>{questionPartQuestions}</QuestionPart>
    </TemplateWrapper>
  );
});
