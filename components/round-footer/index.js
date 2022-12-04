import React,{ useContext} from "react";
import styles from "./styles.module.css";
import { ThemeContext } from "styled-components";
import { motion } from "framer-motion";
import colors from "../../constants/colors";

function RoundFooter({
  activityTypes = [],
  activeActivityName,
  selectNewActivity,
  children,
}) {
  const themeContext = useContext(ThemeContext);
  const activityTypesButtons = activityTypes.map((activityType) => {
    const isActiveActivity = activityType.name === activeActivityName;
    let customStyles = {};

    if (activityType.disabled) {
      customStyles = { color: "#aaa", cursor: "default" };
    } else if(activityType.clickable === false) {
      customStyles = { cursor: "default" };
    }else if (isActiveActivity) {
      customStyles = { color: themeContext?.colors[activityType.color] };
    }
    const _selectNewActivity = () => selectNewActivity(activityType.name);
    const onClick =
      activityType.disabled || activityType.clickable === false
        ? undefined
        : activityType.onClick || _selectNewActivity;
    return (
      <a
        key={`activityTypeButton-${activityType.name}`}
        onClick={onClick}
        style={customStyles}
        className={styles.nav_link}
      >
        <i className={`${styles.nav_icon} material-icons`}>
          {activityType.icon}
        </i>
        <span className={styles.nav_text}>
          {activityType.shortTitle || activityType.title}
        </span>
      </a>
    );
  });

  return (
    <footer className={styles.footerWraper}>
      <motion.div
        initial="initialState"
        animate="animateState"
        transition={{
          duration: 1.4,
        }}
        variants={{
          initialState: {
            y: 100,
          },
          animateState: {
            y: 0,
          },
        }}
        className={styles.navbarWrapper}
      >
        <nav className={styles.nav}>{children || activityTypesButtons}</nav>
      </motion.div>
    </footer>
  );
}

export default RoundFooter;
