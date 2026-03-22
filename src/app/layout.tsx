import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import SmoothScroll from "@/components/SmoothScroll";
import { LanguageProvider } from "@/i18n/LanguageContext";

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
  metadataBase: new URL("https://skbbeauty.ma"),
  title: {
    default: "SKB Beauty Marrakech | Institut de Beauté Premium Guéliz | Cils, Épilation, Massage",
    template: "%s | SKB Beauty Marrakech",
  },
  description:
    "SKB Beauty, votre institut de beauté premium à Guéliz, Marrakech. Extension de cils volume russe, épilation cire orientale, head spa, massage relaxant, manucure gel, pédicure, brow lift et coiffure. Réservez en ligne ou appelez le +212 6 34 19 49 96.",
  keywords: [
    "institut de beauté marrakech",
    "salon de beauté marrakech",
    "salon de beauté guéliz",
    "meilleur institut beauté marrakech",
    "extension de cils marrakech",
    "extension cils volume russe marrakech",
    "pose de cils marrakech",
    "épilation cire orientale marrakech",
    "épilation marrakech",
    "head spa marrakech",
    "massage relaxant marrakech",
    "massage marrakech guéliz",
    "manucure gel marrakech",
    "manucure semi permanent marrakech",
    "pédicure marrakech",
    "soins visage marrakech",
    "coiffure femme marrakech",
    "brushing marrakech",
    "coloration marrakech",
    "brow lift marrakech",
    "lash lift marrakech",
    "nail art marrakech",
    "beauté guéliz marrakech",
    "soin beauté marrakech pas cher",
    "institut beauté guéliz",
    "SKB Beauty",
    "SKB Beauty Marrakech",
    "مركز تجميل مراكش",
    "صالون تجميل مراكش كليز",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://skbbeauty.ma",
  },
  openGraph: {
    title: "SKB Beauty Marrakech | Institut de Beauté Premium à Guéliz",
    description:
      "Votre destination beauté d'exception au cœur de Guéliz, Marrakech. Extension de cils, épilation cire orientale, head spa, massage relaxant, manucure, pédicure et coiffure. Réservez en ligne.",
    url: "https://skbbeauty.ma",
    siteName: "SKB Beauty Marrakech",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/about-bg.webp",
        width: 1200,
        height: 630,
        alt: "SKB Beauty - Institut de Beauté Premium à Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SKB Beauty Marrakech | Institut de Beauté Premium à Guéliz",
    description:
      "Institut de beauté premium à Guéliz, Marrakech. Extension de cils, épilation, head spa, massage, manucure et coiffure. Réservez en ligne.",
    images: ["/images/about-bg.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "MA-07",
    "geo.placename": "Marrakech",
    "geo.position": "31.6345;-8.0135",
    "ICBM": "31.6345, -8.0135",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": "https://skbbeauty.ma/#salon",
  name: "SKB Beauty Marrakech",
  alternateName: ["SKB Beauty", "SKB Beauty Guéliz"],
  description:
    "Institut de beauté premium au cœur de Guéliz, Marrakech. Extension de cils volume russe, épilation cire orientale, head spa, massage relaxant, manucure gel, pédicure, brow lift et coiffure.",
  url: "https://skbbeauty.ma",
  telephone: "+212634194996",
  email: "skb.beauty212@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 Rue Imam Malek",
    addressLocality: "Marrakech",
    addressRegion: "Marrakech-Safi",
    addressCountry: "MA",
    postalCode: "40000",
    neighborhood: "Guéliz",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.6345,
    longitude: -8.0135,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "MAD",
  paymentAccepted: "Cash, Credit Card",
  image: "https://skbbeauty.ma/images/about-bg.webp",
  logo: "https://skbbeauty.ma/icon.svg",
  sameAs: [
    "https://www.instagram.com/skbbeauty212/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Soins Beauté",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Extension de cils Marrakech", description: "Poses naturelles 2D, volume russe 3D/4D ou maxi volume 5D/6D" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sourcils - Brow Lift Marrakech", description: "Épilation, teinture, brow lift, restructuration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Épilation cire orientale Marrakech", description: "Aisselles, jambes, maillots, visage ou forfait intégral" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Head Spa Marrakech", description: "Massage crânien, soins du cuir chevelu, huiles aromatiques" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Massage relaxant Marrakech", description: "Relaxant, tonique ou aux pierres chaudes" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manucure gel Marrakech", description: "Pose gel, semi-permanent, gainage, nail art" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pédicure Marrakech", description: "Beauté, nettoyage, restructuration, vernis semi-permanent" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coiffure femme Marrakech", description: "Coupes, brushings, colorations, balayages, lissages, soins kératine" } },
    ],
  },
  areaServed: [
    { "@type": "City", name: "Marrakech" },
    { "@type": "AdministrativeArea", name: "Guéliz" },
    { "@type": "AdministrativeArea", name: "Marrakech-Safi" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "120",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <LanguageProvider>
          <SmoothScroll />
          <PageTransition>{children}</PageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}
