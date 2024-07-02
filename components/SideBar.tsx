import React from "react";

const SideBar = ({ children }) => {
  return (
    <div className="flex h-full">
      <nav className="w-[240px] border-r-[1px] border-x-black">
        <div>로고</div>
        <div>네이게이터</div>
      </nav>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default SideBar;
