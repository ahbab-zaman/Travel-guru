import type { Metadata } from "next";
import "./globals.css";
import { Great_Vibes, Inter, Kaushan_Script } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

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
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
