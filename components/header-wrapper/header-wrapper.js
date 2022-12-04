import React from "react";
import styles from "./styles.module.css";

function HeaderWrapper({children}) {
  return (
    <header className={styles.headerWriper}>
      {children}
    </header>
  );
}

export default HeaderWrapper;
