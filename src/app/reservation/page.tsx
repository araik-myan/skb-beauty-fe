import type { Metadata } from "next";
import { Suspense } from "react";
import BookingFlow from "@/components/booking/BookingFlow";
import BookingNavbar from "@/components/booking/BookingNavbar";
import BookingFooter from "@/components/booking/BookingFooter";

export const metadata: Metadata = {
  title: "Réservation | SKB Beauty Marrakech",
  description:
    "Réservez votre rendez-vous beauté en ligne chez SKB Beauty Marrakech. Soins du visage, corps, maquillage, épilation et bien-être.",
};

export default function ReservationPage() {
  return (
    <div className="min-h-screen bg-cream-light flex flex-col">
      <BookingNavbar />

      {/* Hero banner */}
      <div className="relative bg-gradient-to-br from-charcoal via-brown-dark to-taupe-dark pt-28 pb-20 text-center overflow-hidden grain-overlay">
        {/* Decorative elements */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 400px 400px at 30% 40%, rgba(201,169,110,0.08) 0%, transparent 70%),
              radial-gradient(ellipse 300px 300px at 70% 60%, rgba(196,125,90,0.05) 0%, transparent 70%)
            `,
          }}
        />

        {/* Corner accents */}
        <div className="absolute top-16 left-8 lg:left-16 w-16 h-px bg-gradient-to-r from-gold-muted/20 to-transparent" />
        <div className="absolute top-16 left-8 lg:left-16 w-px h-16 bg-gradient-to-b from-gold-muted/20 to-transparent" />

        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <p className="text-gold-muted/60 text-[11px] uppercase tracking-[0.5em] mb-5">
            Réservation en ligne
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-5 leading-[1.05]">
            Réservez votre
            <span className="block text-gold-muted font-light italic mt-1">
              moment de beauté
            </span>
          </h1>
          <div className="w-16 h-px shimmer-gold mx-auto mb-5" />
          <p className="text-white/40 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            En quelques étapes, planifiez votre rendez-vous dans notre institut
            et laissez-nous prendre soin de vous.
          </p>
        </div>
      </div>

      {/* Booking flow */}
      <div className="flex-1 max-w-5xl w-full mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <Suspense>
          <BookingFlow />
        </Suspense>
      </div>

      <BookingFooter />
    </div>
  );
}
