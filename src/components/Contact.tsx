"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock, Instagram, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations.contact;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-16 md:py-28 lg:py-36 bg-charcoal relative overflow-hidden grain-overlay">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-muted/20 to-transparent" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 500px 500px at 15% 85%, rgba(201,169,110,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 400px 400px at 85% 15%, rgba(196,125,90,0.04) 0%, transparent 70%)
          `,
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="max-w-2xl mb-12 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold-muted/40" />
            <span className="text-gold-muted/80 text-[11px] uppercase tracking-[0.4em]">
              {t.label[lang]}
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-cream-light leading-[1.1] mb-4 md:mb-6">
            {t.heading1[lang]}
            <span className="text-gold-muted italic font-light"> {t.heading2[lang]}</span>
          </h2>
          <p className="text-sand/70 leading-relaxed text-[15px] max-w-md">
            {t.description[lang]}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="lg:col-span-5 space-y-6"
          >
            <a
              href="tel:+212634194996"
              className="group flex items-start gap-5 p-5 rounded-2xl border border-white/[0.06] hover:border-gold-muted/20 transition-all duration-500 hover:bg-white/[0.02]"
            >
              <div className="w-11 h-11 rounded-xl bg-gold-muted/8 flex items-center justify-center shrink-0 group-hover:bg-gold-muted/15 transition-colors duration-500">
                <Phone size={18} className="text-gold-muted/80" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-base text-cream-light mb-1">
                  {t.phone[lang]}
                </h4>
                <p className="text-sand/70 text-sm group-hover:text-gold-light transition-colors duration-300">
                  +212 6 34 19 49 96
                </p>
                <span className="inline-flex items-center gap-1 text-[10px] text-gold-muted/40 mt-2 group-hover:text-gold-muted/70 transition-colors uppercase tracking-wider">
                  {t.tapToCall[lang]}
                  <ArrowUpRight size={10} />
                </span>
              </div>
            </a>

            <a
              href="mailto:contact@skbbeauty.ma"
              className="group flex items-start gap-5 p-5 rounded-2xl border border-white/[0.06] hover:border-gold-muted/20 transition-all duration-500 hover:bg-white/[0.02]"
            >
              <div className="w-11 h-11 rounded-xl bg-gold-muted/8 flex items-center justify-center shrink-0 group-hover:bg-gold-muted/15 transition-colors duration-500">
                <Mail size={18} className="text-gold-muted/80" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-base text-cream-light mb-1">
                  {t.email[lang]}
                </h4>
                <p className="text-sand/70 text-sm group-hover:text-gold-light transition-colors duration-300">
                  contact@skbbeauty.ma
                </p>
                <span className="inline-flex items-center gap-1 text-[10px] text-gold-muted/40 mt-2 group-hover:text-gold-muted/70 transition-colors uppercase tracking-wider">
                  {t.sendEmail[lang]}
                  <ArrowUpRight size={10} />
                </span>
              </div>
            </a>

            <div className="flex items-start gap-5 p-5 rounded-2xl border border-white/[0.06]">
              <div className="w-11 h-11 rounded-xl bg-gold-muted/8 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-gold-muted/80" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-base text-cream-light mb-1">
                  {t.address[lang]}
                </h4>
                <p className="text-sand/70 text-sm">
                  2 Rue Imam Malek, Guéliz
                  <br />
                  Marrakech, Maroc
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-5 rounded-2xl border border-white/[0.06]">
              <div className="w-11 h-11 rounded-xl bg-gold-muted/8 flex items-center justify-center shrink-0">
                <Clock size={18} className="text-gold-muted/80" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-base text-cream-light mb-1">
                  {t.hours[lang]}
                </h4>
                <p className="text-sand/70 text-sm">
                  {t.weekdays[lang]}
                  <br />
                  <span className="text-sand/40">{t.sunday[lang]}</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex-1 rounded-2xl lg:rounded-3xl overflow-hidden border border-white/[0.06] min-h-[320px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0!2d-8.0135!3d31.6345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM4JzA0LjIiTiA4wrAwMCc0OC42Ilc!5e0!3m2!1sfr!2sma!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                allowFullScreen
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                title="SKB Beauty Marrakech - Localisation"
                className="absolute inset-0 w-full h-full grayscale-[40%] contrast-[1.1] opacity-90"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-5">
              <a
                href="tel:+212634194996"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-gold-muted text-charcoal rounded-xl text-[12px] uppercase tracking-[0.15em] font-medium hover:bg-gold-light transition-all duration-500 hover:shadow-lg hover:shadow-gold-muted/10"
              >
                <Phone size={14} />
                {t.callBtn[lang]}
              </a>
              <a
                href="https://www.instagram.com/skbbeauty212/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 border border-gold-muted/25 text-gold-muted rounded-xl text-[12px] uppercase tracking-[0.15em] hover:bg-gold-muted/8 transition-all duration-500"
              >
                <Instagram size={14} />
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
