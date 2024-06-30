import { sleep } from "@/lib/utils";
import React from "react";

const layout = ({ children }) => {
  sleep(3000);

  return <div>layout{children}</div>;
};

export default layout;
