"use client";

import { Phone, Instagram } from "lucide-react";

export default function BookingNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-light/90 backdrop-blur-xl border-b border-sand-light/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-wider text-charcoal">
              SKB Beauty
            </span>
            <span className="text-[8px] uppercase tracking-[0.35em] text-taupe -mt-0.5">
              Marrakech
            </span>
          </a>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/skbbeauty212/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-taupe/60 hover:text-camel transition-colors duration-300 hidden sm:block"
            >
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a
              href="tel:+212634194996"
              className="flex items-center gap-2 px-5 py-2 bg-charcoal text-cream-light rounded-full text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-brown-dark transition-all duration-500"
            >
              <Phone size={11} />
              <span className="hidden sm:inline">+212 6 34 19 49 96</span>
              <span className="sm:hidden">Appeler</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
