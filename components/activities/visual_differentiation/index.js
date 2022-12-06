import React, { useState, useImperativeHandle, forwardRef } from "react";
import CardList from "./card-list";
import {
  getRandomSvgs,
  getRandomSvgsWithChangeConfig,
  getHideConfig
} from "../../../helpers/svg-helpers";
import { shuffle } from "../../../helpers/array-helper";
const START_COUNT_CARDS = 2;

export default forwardRef(function VisualDifActivity(
  { complexity, tasksElapsed, onResetChanged, onHandleChanged },
  ref
) {
  const [lasetSelectedWasCorrect, setLasetSelectedWasCorrect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();

  useImperativeHandle(ref, () => ({
    getResult: () => lasetSelectedWasCorrect,
    generateNext: () => {
      // setSelectedIndex();
      // setLasetSelectedWasCorrect(false);
      // setCards(getCardsArray());
    },
  }));

  const getCardsArray = () => {
    if (START_COUNT_CARDS > 1) {
      let wrongAnswersAdditionalObj = {};
      let correctAnswersAdditionalObj = {};
      let WrongCardComponent;
      let CorrectCardComponent;

      if (complexity === "1") {
        const [UsedCorectCard, UsedWrongCard] = getRandomSvgs(2);
        CorrectCardComponent = UsedCorectCard;
        WrongCardComponent = UsedWrongCard;
      } else if (complexity === "2") {
        const [UsedCard] = getRandomSvgs(1);
        CorrectCardComponent = UsedCard;
        WrongCardComponent = UsedCard;
        const rotateDegreesCorrect = 0;
        const rotateDegreesWrong = 180;
        wrongAnswersAdditionalObj.rotateDegrees = rotateDegreesWrong;
        correctAnswersAdditionalObj.rotateDegrees = rotateDegreesCorrect;
      } else if (["3", "4"].includes(complexity)) {
        const usedPictures =
          complexity === "3"
            ? ["car", "flower", "cloud", "ladyBug", "sun", "bear"]
            : ["car", "flower", "ladyBug", "bear"];
        const [usedCard] = getRandomSvgsWithChangeConfig(1, usedPictures);
        console.log(
          "usedCard",
          usedCard,
          complexity === "3",
          complexity === "3"
            ? usedCard.hideSettings
            : usedCard.hideDetailsSettings
        );
        CorrectCardComponent = usedCard.component;
        WrongCardComponent = usedCard.component;
        correctAnswersAdditionalObj.hideConfing = getHideConfig(
          complexity === "3"
            ? [...usedCard.hideSettings]
            : [...usedCard.hideDetailsSettings]
        );
        wrongAnswersAdditionalObj.hideConfing = {};
      }

      const wrongAnswers = new Array(
        START_COUNT_CARDS + Math.floor(tasksElapsed / 4)
      ).fill({
        isCorrect: false,
        ...wrongAnswersAdditionalObj,
        Component: WrongCardComponent,
      });

      let correctAnswers = new Array(1).fill({
        isCorrect: true,
        ...correctAnswersAdditionalObj,
        Component: CorrectCardComponent,
      });

      const mixedAnswers = [...wrongAnswers, ...correctAnswers];
      return shuffle(mixedAnswers);
    } else {
      return [];
    }
  };
  const [cards, setCards] = useState(getCardsArray());

  const _success = () => {
    onHandleChanged();
    setLasetSelectedWasCorrect(true);
  };

  const _fail = () => {
    onHandleChanged();
    setLasetSelectedWasCorrect(false);
  };

  return (
    <main>
      <CardList
        cards={cards}
        chooseWrong={_fail}
        onResetChanged={onResetChanged}
        chooseCorrect={_success}
        complexity={complexity}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </main>
  );
});
