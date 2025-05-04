import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./sidebar"
import { fira } from '@/app/fonts'

export const metadata: Metadata = {
  title: "Michael Zheng's Website",
  description: "A Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fira.className} antialiased`}
      >
        <Sidebar/>
        {children}
        {//<p className="absolute bottom-0 right-0 text-gray-400 text-sm text-center">&copy; {new Date().getFullYear()} Michael Zheng. I guess this is copyrighted.</p>
        }
      </body>
    </html>
  );
}
