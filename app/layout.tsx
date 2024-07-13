import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { getUser } from "@/actions/auth/user.action";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jeonjuSekki",
  description: "전주세끼에 오신 것을 환영합니다.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser({ serverComponent: true });

  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header user={user}>{children}</Header>
      </body>
    </html>
  );
}
