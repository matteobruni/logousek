import React, { useContext } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import HeaderWrapper from "../header-wrapper/header-wrapper";
import ClickableIcon from "../clickable-icon/clickable-icon";
import ClickableIconWrapper from "../clickable-icon-wrapper/clickable-icon-wrapper";
import { logoutUser } from "../../helpers/local-storage-helper";
import ModalContext from "../../contexts/modal-context";
import DarkModeSwitch from "../dark-mode-switch";
import { DarkModeSwitchWrapper } from "./styled";

function GameMenuHeader({ points, userName }) {
  const modalContext = useContext(ModalContext);
  const router = useRouter();
  const _onLogoutHandler = () => {
    logoutUser();
    router.push("/login-screen");
  };

  const _showSettings = () => {
    modalContext.showModal({
      content: <div></div>,
      header: "Nastavení",
    });
  };

  const menuItems = [
    <div key="game-menu-user" className={styles.user}>
      <div className={styles.userPhoto}></div>
      <p className={styles.userName}>{userName}</p>
    </div>,
    <div key="game-menu-coins" className={styles.cashContainer}>
      12h 30m |<i className={`material-icons`}>payments</i>
      <p>{points || 0}</p>
    </div>,
    <ClickableIconWrapper key="game-menu-icons">
      <DarkModeSwitchWrapper>
        <DarkModeSwitch />
      </DarkModeSwitchWrapper>
      <ClickableIcon icon="logout" onClick={_onLogoutHandler} />
      <ClickableIcon icon="settings" onClick={_showSettings} />
    </ClickableIconWrapper>,
  ];

  return <HeaderWrapper>{menuItems}</HeaderWrapper>;
}

export default GameMenuHeader;
