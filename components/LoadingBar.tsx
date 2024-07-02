import React from "react";
import { BarLoader } from "react-spinners";

const LoadingBar = () => {
  return (
    <div className=" w-full">
      <BarLoader cssOverride={{ width: "100%" }} color="orange" />
    </div>
  );
};

export default LoadingBar;
