import "@/styles/globals.css";
import type { Metadata } from "next";
import clsx from "clsx";

import { Header } from "@/components/header";
import { iranSansExtraFont } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "سامان دانایی",
  description: "وب سایت سامان دانایی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl" className="dark">
      <body className={clsx(iranSansExtraFont.className, "p-6")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
