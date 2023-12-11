import { Inter } from "next/font/google";

import { Footer } from "@/components/global/Footer";
import { Navbar } from "@/components/global/Navbar";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Vélo is a cycling tracker.",
  title: "Vélo"
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
