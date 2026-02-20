import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "English Learning - Học Tiếng Anh Cấp 1 & 2",
  description: "Nền tảng học tiếng Anh cho học sinh cấp 1 (lớp 3, 4, 5) và cấp 2 (lớp 6, 7, 8, 9)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
