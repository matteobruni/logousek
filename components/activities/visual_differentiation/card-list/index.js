import React from "react";
import { CardWrapper } from "./styled";
import ActivityCard from "../../activity-card";

export default function CardList({
  cards,
  chooseWrong,
  chooseCorrect,
  complexity,
  onResetChanged,
  selectedIndex,
  setSelectedIndex
}) {

  const _chooseItem = (index, callback) => {
    if (index !== selectedIndex) {
      setSelectedIndex(index);
      callback();
    } else {
      onResetChanged();
      setSelectedIndex(undefined);
    }
  };

  const _getCardsForFirstLevel = (correctAnswer, index) => {
    const isSelected = selectedIndex === index;
    const Component = correctAnswer.Component;
      return (
        <ActivityCard
          key={`answer-${index}`}
          onClick={() => correctAnswer.isCorrect ? _chooseItem(index, chooseCorrect) :  _chooseItem(index, chooseWrong)}
          selected={isSelected}
        >
          {isSelected && <i className={`material-icons`}>check</i>}
          {<Component />}
        </ActivityCard>
      );
   
  };

  const _getCardsForSecLevel = (correctAnswer, index) => {
    const isSelected = selectedIndex === index;
    const Component = correctAnswer.Component;
    
      return (
        <ActivityCard
          key={`answer-${index}`}
          onClick={() => correctAnswer.isCorrect ? _chooseItem(index, chooseCorrect) :  _chooseItem(index, chooseWrong)}
          selected={isSelected}
          rotate={correctAnswer.rotateDegrees}
        >
          {isSelected && <i className={`material-icons`}>check</i>}
          <Component />
        </ActivityCard>
      );

  };

  const _getCardsFoThirdLevel = (correctAnswer, index) => {
    const isSelected = selectedIndex === index;
    const Component = correctAnswer.Component;
      return (
        <ActivityCard
          key={`answer-${index}`}
          onClick={() => correctAnswer.isCorrect ? _chooseItem(index, chooseCorrect) :  _chooseItem(index, chooseWrong)}
          selected={isSelected}
          rotate={correctAnswer.rotateDegrees}
        >
          {isSelected && <i className={`material-icons`}>check</i>}
          <Component changeConfig={correctAnswer.hideConfing} />
        </ActivityCard>
      );
  }

  const _getCards = () => {
    return cards.map((correctAnswer, index) => {
      switch (complexity) {
        case "1":
          return _getCardsForFirstLevel(correctAnswer, index);
        case "2":
          return _getCardsForSecLevel(correctAnswer, index);
        case "3": 
        case "4": 
          return _getCardsFoThirdLevel(correctAnswer, index);
      }
    });
  };
  return <CardWrapper>{_getCards()}</CardWrapper>;
}
