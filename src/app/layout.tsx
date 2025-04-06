import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  title: "TravelGuru",
  description: "This is a travel website",
  icons: "./favicon.png",
};
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"], // Add other weights if needed
  variable: "--font-lato",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <body>
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
