import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faztro | Affordable Delivery Services in Puducherry",
  description:
    "Your trusted delivery partner in Puducherry. Order anything, from anywhere within the city. Launching February 14th!",
  icons: {
    icon: "/faztro.png",
    apple: "/faztro.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
