import React from "react";
import styles from "./styles.module.css";

function WelcomePageSidebarItem({ name, icon, title }) {
  return (
    <li className={styles.welcomePageNavListItem}>
      <a href={`#${name}`} className={styles.welcomePageNavListItemLink}>
        <i className={["material-icons", styles.welcomePageNavListItemIcon].join(" ")}>{icon}</i>
        <span>{title}</span>
      </a>
    </li>
  );
}

export default WelcomePageSidebarItem;
