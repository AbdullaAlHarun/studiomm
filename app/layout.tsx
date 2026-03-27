import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Ommino",
  description: "Creative digital agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f7f7f2] text-[#111111]">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}