import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import colors from "../constants/colors.js";

const RouteWrapper = ({ children, colorScheme }) => {
  const router = useRouter();

  return (
    <motion.div
      className={styles.backgroundWapper}
      style={{
        background: colorScheme,
        position: "relative",
        transitionDuration: "0.5s",
      }}
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
        duration: 0.7,
      }}
      variants={{
        initialState: {
          opacity: 0,
        },
        animateState: {
          opacity: 1,
        },
        exitState: {
          opacity: 0,
        },
      }}
    >
      <motion.div
        className={styles.contentWrapper}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.7,
        }}
        variants={{
          initialState: {
            opacity: 0,
            x: 100,
          },
          animateState: {
            opacity: 1,
            x: 0,
          },
          exitState: {
            opacity: 0,
            x: -100,
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
export default RouteWrapper;
