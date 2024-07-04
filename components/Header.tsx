import React from "react";
import LogInButton from "./LogInButton";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full">
      <header className="h-min-[60px] mx-4 py-2 border-b-[1px]">
        <section>JeonjuSekkiLogo</section>
        <section>
          <LogInButton />
        </section>
      </header>
      <section className="h-full">{children}</section>
    </div>
  );
};

export default Header;
