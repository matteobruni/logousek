import React from 'react';
import styles from "./styles.module.css";

function ClickableIconWrapper({children}) {;
  return (
    <span key="game-menu-icons" className={styles.iconWrapper}>
        {children}
    </span>
  )
}

export default ClickableIconWrapper