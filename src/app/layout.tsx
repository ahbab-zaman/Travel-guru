import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import LayoutWrapper from "@/Components/LayoutWrapper";

export const metadata: Metadata = {
  title: "TravelGuru",
  description: "This is a travel website",
  icons: "./favicon.png",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen">
          <LayoutWrapper>{children}</LayoutWrapper>
        </div>
      </body>
    </html>
  );
}
