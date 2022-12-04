import React, { useContext } from "react";
import styles from "./styles.module.css";
import HeaderWrapper from "../header-wrapper/header-wrapper";
import BackIcon from "../back-icon";
import { useRouter } from "next/router";
import ModalContext from "../../contexts/modal-context";

function ActivityHeader({ tasksCount, currentTask, title }) {
  const router = useRouter();
  const modalContext = useContext(ModalContext);
  const routeBack = () => {
    modalContext.showModal({
      onOkClick: () => {
        router.back()
        modalContext.closeModal()
      },
      onStornoClick: modalContext.closeModal,
      header: "Chcete odejít?",
    });
  };
  const menuItems = [
    <span key="game-menu-icons" className={styles.backIconWrapper}>
      <BackIcon onClick={routeBack} />
    </span>,
    <div key="game-menu-timer">
      <p>{title}</p>
    </div>,
    <div key="game-menu-profile" className={styles.score}>
      <p>
        {currentTask} / {tasksCount}
      </p>
    </div>,
  ];

  return <HeaderWrapper>{menuItems}</HeaderWrapper>;
}

export default ActivityHeader;
