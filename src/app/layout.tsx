import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";

const sofiaSans = Sofia_Sans({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Кристалл доставка",
  description: "",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${sofiaSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
