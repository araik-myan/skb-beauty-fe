import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SKB Beauty Marrakech | Votre Destination Beauté à Guéliz",
  description:
    "Institut de beauté premium au cœur de Guéliz, Marrakech. Soins du visage, corps, maquillage, épilation et bien-être dans un cadre luxueux et raffiné.",
  keywords: [
    "beauté",
    "marrakech",
    "institut",
    "soins",
    "visage",
    "corps",
    "maquillage",
    "épilation",
    "guéliz",
    "luxe",
    "bien-être",
  ],
  openGraph: {
    title: "SKB Beauty Marrakech | Votre Destination Beauté",
    description:
      "Institut de beauté premium au cœur de Guéliz, Marrakech.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <SmoothScroll />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
