import React from "react";
import { BackLoader, StyledLoader, LoaderBar, Ball } from "./styles";
export default function Loader() {
  return (
    <BackLoader>
      <StyledLoader>
        <LoaderBar />
        <LoaderBar />
        <LoaderBar />
        <LoaderBar />
        <LoaderBar />
        <Ball />
      </StyledLoader>
    </BackLoader>
  );
}
