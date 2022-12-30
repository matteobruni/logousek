import React from "react";
import * as S from "./styled";
import { useRouter } from "next/router";

type RouteWrapperProps = {
  children: React.ReactElement | React.ReactElement[];
  colorScheme: string;
};

const RouteWrapper: React.FC<RouteWrapperProps> = ({
  children,
  colorScheme,
}) => {
  const router = useRouter();

  return (
    <S.BackgroundWapper
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
      <S.ContentWrapper
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
      </S.ContentWrapper>
    </S.BackgroundWapper>
  );
};
export default RouteWrapper;
