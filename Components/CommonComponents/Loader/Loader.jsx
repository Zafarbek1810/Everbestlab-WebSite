import React from "react";
import { LoaderWrapper } from "./Loader.style";

const Loader = ({ loading2 }) => {
  return (
    <LoaderWrapper
      style={{ opacity: loading2 ? 1 : 0, transition: "opacity 0.1s  ease-in" }}
    >
      <img src="/images/logo.svg" alt="Loading" />
    </LoaderWrapper>
  );
};

export default Loader;
