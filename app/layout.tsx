import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import {
  ClerkProvider,
} from '@clerk/nextjs';

import "./globals.css";
import NextTopLoader from 'nextjs-toploader';

const outfit = Outfit({
  variable: "--font-Outfit-sans",
  subsets: ["latin"],
});

const OutfitMono = Outfit({
  variable: "--font-Outfit-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin EzQuintana",
  description: "Rental Cars App Admin Panel by EzQuintana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider>
    <html lang="en">
      <body
        className={`${outfit.variable} ${OutfitMono.variable} antialiased`}
      >
         
        <NextTopLoader color="#000" />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
