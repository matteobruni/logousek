import React from "react";
import { LoaderScreen } from "./styled";

const LoaderScreenPage = () => {
  return (
    <div id={"loaderScreenWrapper"}>
      <LoaderScreen className="loader">
        <div />
        <div />
      </LoaderScreen>
    </div>
  );
};

export default LoaderScreenPage;
