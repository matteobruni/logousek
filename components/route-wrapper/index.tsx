import React from "react";
import Head from 'next/head'
import { useRouter } from "next/router";

import PrivateRoute from '@components/auth/private-route'
import OnlyPublicRoute from '@components/auth/only-public-route'
import PublicRoute from '@components/auth/public-route'
import Tutorial from "@components/tutorial";
import * as S from "./styled";

type RouteWrapperProps = {
  title: string,
  children: React.ReactElement | React.ReactElement[];
  colorScheme: string;
  type?: "private" | "onlyPublic" | "all"
};

const BACKGROUND_VARIANTS = {
  initialState: {
    opacity: 0,
  },
  animateState: {
    opacity: 1,
  },
  exitState: {
    opacity: 0,
  },
}

const CONTENT_VARIANTS = {
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
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({
  title,
  children,
  colorScheme,
  type = "all"
}) => {
  const router = useRouter();

  const AuthWrapper = type === "private" ? PrivateRoute : type === "onlyPublic" ? OnlyPublicRoute : PublicRoute
  return (
    <AuthWrapper>
      <Head>
        <title>{title}</title>
      </Head>
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
        variants={BACKGROUND_VARIANTS}
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
          variants={CONTENT_VARIANTS}
        >
          {children}
          <Tutorial />
        </S.ContentWrapper>
      </S.BackgroundWapper>
    </AuthWrapper>
  );
};
export default RouteWrapper;
