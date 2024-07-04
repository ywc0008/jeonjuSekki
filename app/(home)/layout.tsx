import SideBar from "@/components/SideBar";
import { sleep } from "@/lib/utils";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SideBar>{children}</SideBar>
    </div>
  );
};

export default layout;
