import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = localFont({
  src: "./fonts/Poppins-Light.ttf",
  variable: "--font-poppins",
  weight: "100 200 300 400 500 700 800 900",
})

const playFair = localFont({
  src: "./fonts/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-playfair",
  weight: "100 200 300 400 500 700 800 900",
})

export const metadata: Metadata = {
  title: "Landmark Logistics",
  description: "Landmark Logistics is one of the prominent professional clearing and forwarding logistics Companies in the East African region, we have been in operations for the last 20 Years, from different Regional Offices at every Customs Borders in different East African  Countries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playFair.variable} ${poppins.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
