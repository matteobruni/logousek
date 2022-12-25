import React from "react";
import styles from "./styles.module.css";

function SidebarRectItem({ name, icon, title }) {
  return (
    <li className={styles.welcomePageNavListItem}>
      <div className={styles.picture}></div>
      <p>{title}</p>
    </li>
  );
}

export default SidebarRectItem;
