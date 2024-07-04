import React from "react";

const SideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full">
      <nav className="w-[200px] border-r-[1px] border-x-black">
        <div>네이게이터</div>
      </nav>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default SideBar;
