"use client";

import React from "react";
import LogInButton from "./LogInButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = ({ children, user }: { children: React.ReactNode }) => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };
  return (
    <div className="flex flex-col h-full">
      <header className="flex justify-between h-min-[60px] mx-4 py-2 border-b-[1px] items-center">
        <section onClick={goToHome} className="cursor-pointer">
          <Image
            src="/main-logo.jpg"
            width={50}
            height={50}
            alt="전주세끼 로고"
          />
        </section>
        <section>
          <LogInButton user={user} />
        </section>
      </header>
      <section className="h-full">{children}</section>
    </div>
  );
};

export default Header;
