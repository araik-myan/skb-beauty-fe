"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const navKeys = ["home", "about", "services", "gallery", "contact"] as const;
const navHrefs = ["#accueil", "#apropos", "#soins", "#galerie", "#contact"];

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const t = translations.nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const navLinks = navKeys.map((key, i) => ({
    label: t[key][lang],
    href: navHrefs[i],
  }));

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-cream-light/90 backdrop-blur-xl shadow-[0_1px_0_rgba(212,197,181,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-22">
            {/* Logo */}
            <a href="#accueil" className="group flex flex-col relative">
              <span
                className={`font-serif text-[22px] font-bold tracking-[0.05em] transition-colors duration-500 ${
                  isScrolled ? "text-charcoal" : "text-white"
                }`}
              >
                SKB Beauty
              </span>
              <span
                className={`text-[9px] uppercase tracking-[0.35em] -mt-0.5 transition-colors duration-500 ${
                  isScrolled ? "text-taupe" : "text-white/50"
                }`}
              >
                Marrakech
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-[12px] uppercase tracking-[0.2em] transition-colors duration-300 hover:text-camel group ${
                    isScrolled ? "text-charcoal/80" : "text-white/80"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-camel group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-5">
              {/* Language toggle */}
              <button
                onClick={toggleLang}
                className={`text-[11px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 hover:text-camel ${
                  isScrolled ? "text-charcoal/60" : "text-white/60"
                }`}
              >
                {lang === "fr" ? "EN" : "FR"}
              </button>
              <a
                href="https://www.instagram.com/skbbeauty212/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 hover:text-camel ${
                  isScrolled ? "text-charcoal/60" : "text-white/60"
                }`}
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://booking.beautynow.ma/69b83820e4d068d34960102e"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:-translate-y-px ${
                  isScrolled
                    ? "bg-charcoal text-cream-light hover:bg-brown-dark hover:shadow-lg"
                    : "bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20"
                }`}
              >
                <Phone size={12} />
                {t.book[lang]}
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className={`lg:hidden transition-colors ${
                isScrolled ? "text-charcoal" : "text-white"
              }`}
              aria-label={t.openMenu[lang]}
            >
              <Menu size={26} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-cream-light"
          >
            {/* Decorative accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-camel/5 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-nude/10 to-transparent rounded-tr-full" />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="relative flex flex-col items-center justify-center h-full"
            >
              <button
                onClick={() => setIsMobileOpen(false)}
                className="absolute top-6 right-6 text-charcoal/60 hover:text-charcoal transition-colors"
                aria-label={t.closeMenu[lang]}
              >
                <X size={26} strokeWidth={1.5} />
              </button>

              <div className="mb-14">
                <span className="font-serif text-3xl font-bold text-charcoal tracking-wider">
                  SKB Beauty
                </span>
                <span className="block text-[10px] uppercase tracking-[0.4em] text-taupe text-center mt-1">
                  Marrakech
                </span>
              </div>

              {/* Language toggle mobile */}
              <button
                onClick={toggleLang}
                className="mb-8 text-[12px] uppercase tracking-[0.2em] text-camel font-medium border border-camel/30 px-5 py-2 rounded-full hover:bg-camel/5 transition-colors"
              >
                {lang === "fr" ? "English" : "Français"}
              </button>

              <div className="flex flex-col items-center gap-7">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.15 + i * 0.06,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="text-lg tracking-[0.2em] text-charcoal/80 hover:text-camel transition-colors uppercase"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-14 flex flex-col items-center gap-5"
              >
                <a
                  href="https://booking.beautynow.ma/69b83820e4d068d34960102e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-10 py-3.5 bg-charcoal text-cream-light rounded-full text-[12px] uppercase tracking-[0.2em] font-medium"
                >
                  <Phone size={14} strokeWidth={1.5} />
                  {t.book[lang]}
                </a>
                <div className="flex items-center gap-6 mt-2">
                  <a
                    href="tel:+212634194996"
                    className="flex items-center gap-2 text-taupe hover:text-camel transition-colors"
                  >
                    <Phone size={14} strokeWidth={1.5} />
                    <span className="text-xs tracking-wider">{t.call[lang]}</span>
                  </a>
                  <a
                    href="https://www.instagram.com/skbbeauty212/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-taupe hover:text-camel transition-colors"
                  >
                    <Instagram size={14} strokeWidth={1.5} />
                    <span className="text-xs tracking-wider">@skbbeauty212</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
