"use client";

import { Instagram, Phone, Mail, MapPin, Heart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const navKeys = ["home", "about", "services", "gallery", "contact"] as const;
const navHrefs = ["#accueil", "#apropos", "#soins", "#galerie", "#contact"];

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations.footer;
  const nav = translations.nav;

  return (
    <footer className="bg-brown-dark relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-camel/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand */}
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
              {t.description[lang]}
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

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-sand/40 font-medium mb-6">
              {t.navigation[lang]}
            </h4>
            <nav className="space-y-3.5">
              {navKeys.map((key, i) => (
                <a
                  key={navHrefs[i]}
                  href={navHrefs[i]}
                  className="block text-sand/40 hover:text-gold-muted transition-colors duration-300 text-sm tracking-wider"
                >
                  {nav[key][lang]}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-sand/40 font-medium mb-6">
              {t.contact[lang]}
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
                href="mailto:skb.beauty212@gmail.com"
                className="flex items-center gap-3 text-sand/40 hover:text-gold-muted transition-colors duration-300 text-sm"
              >
                <Mail size={14} className="text-gold-muted/30" strokeWidth={1.5} />
                skb.beauty212@gmail.com
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
              &copy; {new Date().getFullYear()} {t.copyright[lang]}
            </p>
            <p className="flex items-center gap-1.5 text-sand/25 text-xs tracking-wider">
              {t.madeWith[lang]}{" "}
              <Heart size={10} className="text-rose-gold/40" />
              {" "}{t.inMarrakech[lang]}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
