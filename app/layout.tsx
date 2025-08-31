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
  title: "Landmark Logistics Ltd",
  description: "Landmark Logistics is one of the prominent professional clearing and forwarding logistics Companies in the East African region, we have been in operations for the last 20 Years, from different Regional Offices at every Customs Borders in different East African  Countries.",
  openGraph: {
    title: "Landmark Logistics Ltd",
    description: "Landmark Logistics is one of the prominent professional clearing and forwarding logistics Companies in the East African region, we have been in operations for the last 20 Years, from different Regional Offices at every Customs Borders in different East African  Countries.",
    url: "https://landmarklogisticsltd.com",
    siteName: "Landmark Logistics Ltd",
    images: [
      {
        url: "https://landmark-logistics.vercel.app/landmark.jpeg",
        width: 1200,
        height: 630,
        alt: "Landmark Logistics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landmark Logistics Ltd",
    description: "Landmark Logistics is one of the prominent professional clearing and forwarding logistics Companies in the East African region, we have been in operations for the last 20 Years, from different Regional Offices at every Customs Borders in different East African  Countries.",
    images: ["https://landmark-logistics.vercel.app/landmark.jpeg"],
    site: "@landmarklogisticsltd",
    creator: "@landmarklogisticsltd",
  },
  metadataBase: new URL("https://landmarklogisticsltd.com"),
  authors: [
    { name: "Landmark Logistics Ltd", url: "https://landmarklogisticsltd.com" },
    { name: "Niyubwayo Irakoze Elie", url: "https://iraelie.vercel.app" },
  ],
  keywords: [
    "Landmark Logistics Ltd",
    "Landmark Logistics",
    "Logistics Company",
    "Clearing and Forwarding",
    "Freight Forwarding",
    "Shipping Services",
    "Air Freight",
    "Ocean Freight",
    "Warehousing Solutions",
    "Customs Brokerage",
    "Supply Chain Management",
    "Transportation Services",
    "Cargo Handling",
    "Import Export Services",
    "Logistics Solutions East Africa",
    "Freight Services Kenya",
    "Logistics Company Uganda",
    "Tanzania Freight Forwarding",
    "Rwanda Logistics Services",
    "Burundi Shipping Solutions",
  ],
  applicationName: "Landmark Logistics Ltd",
  category: "Business",
  generator: "Next.js",
  publisher: "Landmark Logistics Ltd",
  robots: "index, follow",
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
