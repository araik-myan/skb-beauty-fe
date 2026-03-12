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
    default: "SKB Beauty Marrakech | Institut de Beauté Premium à Guéliz",
    template: "%s | SKB Beauty Marrakech",
  },
  description:
    "Institut de beauté premium à Guéliz, Marrakech. Soins visage, extension de cils, épilation cire orientale, head spa, massage, manucure, pédicure et coiffure. Prenez rendez-vous au +212 6 34 19 49 96.",
  keywords: [
    "institut de beauté marrakech",
    "salon de beauté guéliz",
    "extension de cils marrakech",
    "épilation cire orientale marrakech",
    "head spa marrakech",
    "massage marrakech",
    "manucure marrakech",
    "pédicure marrakech",
    "soins visage marrakech",
    "coiffure marrakech",
    "beauté marrakech",
    "soin beauté guéliz",
    "brow lift marrakech",
    "volume russe cils marrakech",
    "SKB Beauty",
  ],
  icons: {
    icon: "/icon.svg",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://skbbeauty.ma",
  },
  openGraph: {
    title: "SKB Beauty Marrakech | Institut de Beauté Premium à Guéliz",
    description:
      "Votre destination beauté d'exception au cœur de Guéliz, Marrakech. Extension de cils, épilation, head spa, massage, manucure et coiffure.",
    url: "https://skbbeauty.ma",
    siteName: "SKB Beauty Marrakech",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SKB Beauty Marrakech | Institut de Beauté Premium",
    description:
      "Institut de beauté premium à Guéliz, Marrakech. Soins visage, cils, épilation, massage et bien-être.",
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
  verification: {
    // google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "SKB Beauty Marrakech",
  alternateName: "SKB Beauty",
  description:
    "Institut de beauté premium au cœur de Guéliz, Marrakech. Soins visage, extension de cils, épilation cire orientale, head spa, massage, manucure, pédicure et coiffure.",
  url: "https://skbbeauty.ma",
  telephone: "+212634194996",
  email: "contact@skbbeauty.ma",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 Rue Imam Malek, Guéliz",
    addressLocality: "Marrakech",
    addressCountry: "MA",
    postalCode: "40000",
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
  image: "https://skbbeauty.ma/icon.svg",
  sameAs: [
    "https://www.instagram.com/skbbeauty212/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Soins Beauté",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Extension de cils", description: "Poses naturelles 2D, volume 3D/4D ou maxi volume 5D/6D" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sourcils", description: "Épilation, teinture, brow lift" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Épilation cire orientale", description: "Aisselles, jambes, maillots ou forfait intégral" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Head Spa", description: "Massage crânien, soins du cuir chevelu, huiles aromatiques" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Massage", description: "Relaxant, tonique ou aux pierres chaudes" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manucure", description: "Pose gel, semi-permanent, gainage, nails art" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pédicure", description: "Beauté, nettoyage, restructuration, vernis semi-permanent" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coiffure", description: "Coupes, brushings, colorations, balayages, lissages" } },
    ],
  },
  areaServed: {
    "@type": "City",
    name: "Marrakech",
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
