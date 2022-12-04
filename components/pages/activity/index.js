import React, { useState, useEffect, useContext, useRef } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import ActivityHeader from "../../activity-header/activity-header";
import RouteWrapper from "../../../helpers/route-wrapper";
import { getActivity } from "../../../helpers/get-activity";
import { setUserPoints } from "../../../helpers/local-storage-helper";
import { games } from "../../../constants/activity-conf";
import Timer from "../../timer";
import RoundFooter from "../../round-footer";
import ModalContext from "../../../contexts/modal-context";
import styles from "./styles.module.css";
import GainedPoints from "./gained-points";

const POINTS_FOR_TASK = 10;
const TASKS_COUNT = 10;

const Activity = () => {
  const [currentTask, setCurrentTask] = useState(1);
  const [correctTasks, setCorrectTasks] = useState(0);
  const [wasChanged, setWasChanged] = useState(false);
  const [gameState, setGameState] = useState("playing");
  const activityRef = useRef(null);
  const router = useRouter();
  const activityName = router.query?.activityName;
  const activityDifficulty = router.query?.difficulty;
  const Activity = getActivity(activityName);
  const modalContext = useContext(ModalContext);
  useEffect(() => {
    // window.onpopstate = () => {
    //   window.alert("Přejete si odejít? výsledky se neuloží");
    // };
    const showAlert = (event) => {
      event.returnValue = "string";
    };

    // window.addEventListener("popstate", showAlert);
    // window.onbeforeunload = function(e) {
    //   return "Do you want to exit this page?";
    // };
    window.addEventListener("beforeunload", showAlert);
    window.addEventListener("unload", showAlert);

    // screen.orientation
    //   .lock("landscape")
    //   .then(() => {})
    //   .catch((error) => {});

    return () => {
      //window.removeEventListener("popstate", showAlert);
      window.removeEventListener("beforeunload", showAlert);
      window.removeEventListener("unload", showAlert);
    };
  });

  useEffect(() => {
    if (gameState === "finish") {
      const redirectToGameMenu = () => {
        modalContext.closeModal();
        router.push("/game-menu");
        setUserPoints(POINTS_FOR_TASK * correctTasks);
      };

      modalContext.showModal({
        header: "Konec Hry",
        onOkClick: redirectToGameMenu,
        closeDisabled: true,
      });
    }
  }, [gameState, modalContext, router, correctTasks]);

  const fail = () => {
    setCurrentTask((v) => ++v);
  };

  const success = () => {
    setCurrentTask((v) => ++v);
    setCorrectTasks((v) => ++v);
  };

  const reset = () => {};

  const onHandleChanged = () => {
    setWasChanged(true);
  };

  const onResetChanged = () => {
    setWasChanged(false);
  };

  const activityFromConf = Object.values(games).reduce(
    (result, gamesInType) => {
      const foundGame = gamesInType.find((game) => game.name === activityName);
      if (foundGame) {
        result = foundGame;
      }
      return result;
    },
    {}
  );

  const _checkResult = () => {
    const isSuccess = activityRef.current.getResult;
    if (currentTask === TASKS_COUNT) {
      isSuccess && setCorrectTasks((prevCorrectTasks) => ++prevCorrectTasks);
      setGameState("finish");
    } else {
      isSuccess ? success() : fail();
      setWasChanged(false);
      activityRef.current.generateNext();
    }
  };

  return (
    <RouteWrapper colorScheme="#84E065">
      <ActivityHeader
        tasksCount={TASKS_COUNT}
        currentTask={currentTask}
        title={activityFromConf.title}
      />
      <div className={styles.activityWrapper}>
        <main className={styles.contentWrapper}>
          {
            <Activity
              ref={activityRef}
              onHandleChanged={onHandleChanged}
              onResetChanged={onResetChanged}
              reset={reset}
              complexity={activityDifficulty}
              tasksElapsed={currentTask}
            />
          }
        </main>
      </div>
      <footer>
        <RoundFooter
          activityTypes={[
            {
              name: "",
              clickable: false,
              title: (
                <GainedPoints
                  pointsForTask={POINTS_FOR_TASK}
                  correctTasks={correctTasks}
                />
              ),
            },
            {
              name: "timer",
              title: (
                <TimerWrapper>
                  <Timer />
                </TimerWrapper>
              ),
              clickable: false,
            },
            {
              name: "sendButton",
              title: <span className={styles.sendButton}>Potvrdit</span>,
              clickable: true,
              onClick: _checkResult,
              disabled: !wasChanged,
            },
          ]}
        />
      </footer>
    </RouteWrapper>
  );
};

export default Activity;

const TimerWrapper = styled.div`
  margin: 0px 0.5rem;
`;
