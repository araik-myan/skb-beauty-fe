"use client";

import { Instagram, Phone, Mail, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brown-dark relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-camel/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand — 5 cols */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <span className="font-serif text-2xl font-bold text-cream-light tracking-wider">
                SKB Beauty
              </span>
              <span className="block text-[9px] uppercase tracking-[0.4em] text-sand/40 mt-1">
                Marrakech
              </span>
            </div>
            <p className="text-sand/50 text-sm leading-[1.8] max-w-sm mb-8">
              Votre destination beauté d&apos;exception au cœur de Guéliz.
              Un espace où l&apos;élégance rencontre le savoir-faire pour
              sublimer votre beauté naturelle.
            </p>
            <a
              href="https://www.instagram.com/skbbeauty212/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold-muted/50 hover:text-gold-muted transition-colors duration-300 text-sm"
            >
              <Instagram size={16} strokeWidth={1.5} />
              @skbbeauty212
            </a>
          </div>

          {/* Quick links — 3 cols */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-sand/40 font-medium mb-6">
              Navigation
            </h4>
            <nav className="space-y-3.5">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "À Propos", href: "#apropos" },
                { label: "Nos Soins", href: "#soins" },
                { label: "Galerie", href: "#galerie" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sand/40 hover:text-gold-muted transition-colors duration-300 text-sm tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact — 4 cols */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-sand/40 font-medium mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+212634194996"
                className="flex items-center gap-3 text-sand/40 hover:text-gold-muted transition-colors duration-300 text-sm"
              >
                <Phone size={14} className="text-gold-muted/30" strokeWidth={1.5} />
                +212 6 34 19 49 96
              </a>
              <a
                href="mailto:contact@skbbeauty.ma"
                className="flex items-center gap-3 text-sand/40 hover:text-gold-muted transition-colors duration-300 text-sm"
              >
                <Mail size={14} className="text-gold-muted/30" strokeWidth={1.5} />
                contact@skbbeauty.ma
              </a>
              <div className="flex items-start gap-3 text-sand/40 text-sm">
                <MapPin
                  size={14}
                  className="text-gold-muted/30 shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <span>
                  2 Rue Imam Malek, Guéliz
                  <br />
                  Marrakech, Maroc
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.04]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sand/25 text-xs tracking-wider">
              &copy; {new Date().getFullYear()} SKB Beauty Marrakech. Tous droits réservés.
            </p>
            <p className="flex items-center gap-1.5 text-sand/25 text-xs tracking-wider">
              Fait avec{" "}
              <Heart size={10} className="text-rose-gold/40" />
              {" "}à Marrakech
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
