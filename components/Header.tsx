"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LuAlignJustify } from "react-icons/lu";

const Header = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };
  return (
    <div className="flex flex-col h-full ">
      <header className="flex justify-between h-min-[60px] mx-10 p-2  items-center">
        <section
          onClick={goToHome}
          className=" flex w-full justify-between cursor-pointer"
        >
          <Image
            src="/main-logo-removebg.png"
            width={150}
            height={150}
            alt="전주세끼 로고"
          />
        </section>

        <section className="flex items-center">
          <LuAlignJustify size={50} />
        </section>
      </header>
      <section className="h-full">{children}</section>
    </div>
  );
};

export default Header;
