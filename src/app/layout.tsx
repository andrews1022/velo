import { Inter } from "next/font/google";

import { Footer } from "@/components/global/footer";
import { Navbar } from "@/components/global/navbar";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Velo is a cycling tracker.",
  title: "Velo"
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
