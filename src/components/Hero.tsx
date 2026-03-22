"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations.hero;

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Multi-layered background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brown-dark via-charcoal to-taupe-dark" />
        {/* Warm ambient light spots */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 600px 600px at 20% 30%, rgba(201,169,110,0.12) 0%, transparent 70%),
              radial-gradient(ellipse 500px 500px at 80% 70%, rgba(196,125,90,0.08) 0%, transparent 70%),
              radial-gradient(ellipse 800px 400px at 50% 100%, rgba(74,55,40,0.4) 0%, transparent 70%)
            `,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      {/* Subtle grain texture */}
      <div className="absolute inset-0 grain-overlay" />

      {/* Decorative geometric elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Corner accents */}
        <div className="absolute top-16 left-8 lg:left-20 w-24 h-px bg-gradient-to-r from-gold-muted/30 to-transparent" />
        <div className="absolute top-16 left-8 lg:left-20 w-px h-24 bg-gradient-to-b from-gold-muted/30 to-transparent" />
        <div className="absolute bottom-16 right-8 lg:right-20 w-24 h-px bg-gradient-to-l from-gold-muted/30 to-transparent" />
        <div className="absolute bottom-16 right-8 lg:right-20 w-px h-24 bg-gradient-to-t from-gold-muted/30 to-transparent" />

        {/* Floating rings — more visible */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 2.5, delay: 0.5, ease }}
          className="absolute top-1/4 right-[15%] w-80 h-80 rounded-full border border-gold-muted/50"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 2.5, delay: 0.8, ease }}
          className="absolute bottom-1/4 left-[10%] w-56 h-56 rounded-full border border-camel/40"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-gold-muted/60" />
            <span className="text-gold-muted/90 text-[11px] uppercase tracking-[0.5em] font-light">
              {t.tagline[lang]}
            </span>
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-gold-muted/60" />
          </div>
        </motion.div>

        {/* Main heading */}
        <div className="mb-4" style={{ clipPath: "inset(-10% -10% -15% -10%)" }}>
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-8xl lg:text-9xl text-white font-bold leading-[1.05] tracking-tight"
          >
            SKB Beauty
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.span
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="block font-serif text-3xl md:text-5xl lg:text-6xl text-gold-muted font-light italic"
          >
            Marrakech
          </motion.span>
        </div>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1, ease }}
          className="w-20 h-px mx-auto mb-8 shimmer-gold"
          style={{ transformOrigin: "center" }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
          className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-4 leading-relaxed font-light"
        >
          {t.subtitle[lang]}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25, ease }}
          className="text-white/40 text-sm max-w-md mx-auto mb-14 leading-relaxed"
        >
          {t.description[lang]}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-2 sm:px-0"
        >
          <a
            href="https://booking.beautynow.ma/69b83820e4d068d34960102e"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 md:px-10 py-3.5 md:py-4 bg-gold-muted text-charcoal rounded-full text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-gold-light hover:shadow-xl hover:shadow-gold-muted/20 hover:-translate-y-0.5 w-full sm:w-auto text-center"
          >
            <span className="relative z-10">{t.bookOnline[lang]}</span>
          </a>
          <a
            href="#soins"
            className="group flex items-center justify-center gap-3 px-8 md:px-10 py-3.5 md:py-4 border border-white/20 text-white/80 rounded-full text-[12px] md:text-[13px] uppercase tracking-[0.2em] transition-all duration-500 hover:border-white/40 hover:text-white hover:bg-white/5 w-full sm:w-auto"
          >
            {t.discoverServices[lang]}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">
          {t.scroll[lang]}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
