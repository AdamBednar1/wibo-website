import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Wibo — Budujte svoju značku a nájdite talent rýchlo",
  description:
    "Vytvorte si pútavý, mobilne optimalizovaný profil za pár minút. Prispôsobte si svoju stránku tak, aby prezentovala vašu jedinečnú značku.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
