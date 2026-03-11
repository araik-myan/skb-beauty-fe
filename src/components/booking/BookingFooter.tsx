"use client";

import { Phone, MapPin, Instagram, Heart } from "lucide-react";

export default function BookingFooter() {
  return (
    <footer className="bg-charcoal mt-auto">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-muted/10 to-transparent" />
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand */}
          <div>
            <span className="font-serif text-lg font-bold text-cream-light tracking-wider">
              SKB Beauty
            </span>
            <span className="text-[8px] uppercase tracking-[0.35em] text-sand/30 ml-2">
              Marrakech
            </span>
          </div>

          {/* Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sand/35 text-xs">
            <a
              href="tel:+212634194996"
              className="flex items-center gap-1.5 hover:text-gold-muted/60 transition-colors duration-300"
            >
              <Phone size={11} strokeWidth={1.5} />
              +212 6 34 19 49 96
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={11} strokeWidth={1.5} />
              2 Rue Imam Malek, Guéliz
            </span>
            <a
              href="https://www.instagram.com/skbbeauty212/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gold-muted/60 transition-colors duration-300"
            >
              <Instagram size={11} strokeWidth={1.5} />
              @skbbeauty212
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/[0.04] text-center">
          <p className="flex items-center justify-center gap-1.5 text-sand/20 text-xs">
            &copy; {new Date().getFullYear()} SKB Beauty Marrakech
            <Heart size={9} className="text-rose-gold/30" />
          </p>
        </div>
      </div>
    </footer>
  );
}
