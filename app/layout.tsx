import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  weight: ["100", "200", "300", "400", "500", "600", "700"], // optional: specify weights
});

export const metadata: Metadata = {
  title: "GISD - Ghana Institute of Social Democracy",
  description:
    "Training and research institute of the National Democratic Congress (NDC)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(josefinSans.variable)}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
