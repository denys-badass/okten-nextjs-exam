import type { Metadata } from "next";
import "./globals.css";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "MovieHub",
  description: "MovieHub root metadata",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
