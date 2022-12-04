import React from 'react';
import styles from "./styles.module.css";


function ClickableIcon({onClick, icon}) {
  return (
    <a className={styles.icon} onClick={typeof onClick === "function" ? onClick : undefined}>
      <i className={`material-icons`}>{icon}</i>
    </a>
  )
}

export default ClickableIcon