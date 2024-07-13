"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AuthUI from "./AuthUI";
import { User } from "@supabase/supabase-js";
import LoginForm from "./LoginForm";

interface HeaderProps {
  user?: User | null;
}

const LogInButton = ({ user }: HeaderProps) => {
  const isLogin = !!user?.email;
  return (
    <Dialog>
      <DialogTrigger className=" bg-orange-500 w-[80px] h-[40px] rounded-xl text-white">
        {isLogin ? "로그아웃" : "로그인"}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>로그인</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <AuthUI />
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
};

export default LogInButton;
