import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajvir Kaur - Verzorgende IG",
  description: "Portfolio van Rajvir Kaur, ervaren verzorgende IG en ZZP in thuiszorg. Beschikbaar voor huishoudelijke hulp en persoonlijke zorg in Amsterdam en omgeving.",
  keywords: "verzorgende, thuiszorg, hulp, amsterdam, zorg",
  openGraph: {
    title: "Rajvir Kaur - Verzorgende IG",
    description: "Ervaren verzorgende IG beschikbaar voor thuiszorg",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
