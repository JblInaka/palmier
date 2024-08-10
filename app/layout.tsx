import Navigation from "./components/navigation/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "./components/topbar/TopBar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Palmier",
  description: "Palmier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
        <TopBar/>
        <Navigation/>
        <br />
        {children}
        </>
        <br />
        <Footer/>
      </body>
    </html>
  );
}
