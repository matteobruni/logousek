import React from "react";
import { useRouter } from "next/router";
import SidebarItem from "./side-bar-item";
import styles from "./styles.module.css";

function SidebarItemList({ itemList, setIsMenuShow }) {
  const router = useRouter();
  const arrayItemList = Array.isArray(itemList) ? itemList : [];
  const redirect = (link) => {
    setIsMenuShow(false);
    router.push(link);
  };
  return (
    <ul className={styles.welcomePageNavList}>
      {arrayItemList.map((item) => (
        <SidebarItem
          key={`sidebar-item-${item.name}`}
          onClick={() => redirect(item.link)}
          icon={item.icon}
          title={item.title}
          name={item.name}
        />
      ))}
    </ul>
  );
}

export default SidebarItemList;
