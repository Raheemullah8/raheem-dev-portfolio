import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raheem Ullah | Full Stack Developer",
  description:
    "Portfolio of Raheem Ullah - Full Stack Developer specialized in React, Next.js, TypeScript, Node.js, and modern web applications.",
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/icon.png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full bg-black`}>
      <body className="min-h-full bg-black text-white antialiased overflow-x-hidden selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
