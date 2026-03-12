"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Coffee, Heart, Leaf } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Refreshment() {
  const { lang } = useLanguage();
  const t = translations.refreshment;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 lg:py-36 bg-cream-light relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 divider-line" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-camel/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/boissons1.webp"
                alt="Espace rafraîchissement SKB Beauty"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-charcoal/35 via-charcoal/25 to-charcoal/45" />
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse 250px 300px at 50% 50%, rgba(201,169,110,0.1) 0%, transparent 70%)`,
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                <div className="relative mb-8">
                  <div className="w-28 h-28 rounded-full border border-gold-muted/20 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border border-gold-muted/15 flex items-center justify-center">
                      <Coffee size={28} className="text-gold-muted/80" strokeWidth={1.2} />
                    </div>
                  </div>
                </div>
                <p className="font-serif text-2xl lg:text-3xl text-cream-light/90 leading-snug mb-2" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.25)' }}>
                  {t.overlayTitle1[lang]}
                </p>
                <p className="font-serif text-2xl lg:text-3xl text-gold-muted italic leading-snug mb-6" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.2)' }}>
                  {t.overlayTitle2[lang]}
                </p>
                <div className="w-16 h-px shimmer-gold mb-6" />
                <p className="text-sand/50 text-sm leading-relaxed max-w-xs" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>
                  {t.overlayDesc[lang]}
                  <br />
                  {t.overlayDesc2[lang]}
                </p>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border border-camel/10 rounded-2xl -z-10" />
            <div className="absolute -top-3 -left-3 w-14 h-14 border border-gold-muted/10 rounded-xl -z-10" />
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-camel" />
              <span className="text-camel text-[11px] uppercase tracking-[0.4em]">
                {t.label[lang]}
              </span>
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-charcoal leading-[1.1] mb-6">
              {t.heading1[lang]}
              <span className="block text-camel-dark italic font-light mt-1">
                {t.heading2[lang]}
              </span>
            </h2>

            <p className="text-taupe leading-[1.8] text-[15px] mb-10 max-w-lg">
              {t.description[lang]}
            </p>

            {/* Drinks list */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Leaf size={14} className="text-camel-dark" strokeWidth={1.5} />
                <span className="text-[11px] uppercase tracking-[0.3em] text-charcoal font-medium">
                  {t.drinksLabel[lang]}
                </span>
              </div>
              <div className="space-y-0">
                {t.drinks.map((drink, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.08, ease }}
                    className="group flex items-center justify-between py-3.5 border-b border-sand-light/40 last:border-b-0"
                  >
                    <span className="text-charcoal text-sm group-hover:text-camel-dark transition-colors duration-300">
                      {drink.name[lang]}
                    </span>
                    <span className="text-[11px] text-taupe/60 tracking-wider italic">
                      {drink.detail[lang]}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Comfort feature */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-sand-light/40">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-camel/10 to-gold-muted/10 flex items-center justify-center shrink-0">
                <Heart size={18} className="text-camel-dark" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-base text-charcoal mb-1">
                  {t.comfortTitle[lang]}
                </h3>
                <p className="text-taupe text-sm leading-relaxed">
                  {t.comfortDesc[lang]}
                </p>
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease }}
              className="relative mt-10 pl-6 border-l-2 border-camel/25"
            >
              <p className="font-serif text-lg text-charcoal/75 italic leading-relaxed">
                &laquo; {t.quote[lang]} &raquo;
              </p>
              <p className="text-camel-dark text-[10px] uppercase tracking-[0.3em] mt-3">
                {t.quoteAuthor[lang]}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
