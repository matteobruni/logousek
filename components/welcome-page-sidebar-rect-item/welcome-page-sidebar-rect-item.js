import React from "react";
import styles from "./styles.module.css";

function WelcomePageSidebarItem({ name, icon, title }) {
  return (
    <li className={styles.welcomePageNavListItem}>
      <div className={styles.picture}></div>
      <p>{title}</p>
    </li>
  );
}

export default WelcomePageSidebarItem;
