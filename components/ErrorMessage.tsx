import React from "react";
import { CircleLoader } from "react-spinners";

const ErrorMessage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <CircleLoader color="red" />
      <span className=" text-5xl">😟 어이쿠...</span>
      <span>잠시 후 확인해주세요.</span>
    </div>
  );
};

export default ErrorMessage;
