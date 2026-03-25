import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudioMM",
  description: "Creative digital agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}