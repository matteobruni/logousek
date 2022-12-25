import React from "react";
import SidebarItem from "./side-bar-rect-item/index";
import styles from "./styles.module.css";

function SidebarItemRectList({ itemList }) {
  const arrayItemList = Array.isArray(itemList) ? itemList : [];
  return (
    <ul className={styles.welcomePageNavList}>
      {arrayItemList.map((item) => (
        <SidebarItem
          key={`side-bar-rect-item-${item.name}`}
          icon={item.icon}
          title={item.title}
          name={item.name}
        />
      ))}
    </ul>
  );
}

export default SidebarItemRectList;
