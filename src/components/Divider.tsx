"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

export default function Divider() {
  const { lang } = useLanguage();
  const t = translations.divider;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="relative py-20 lg:py-24 overflow-hidden bg-cream-light">
      <div className="absolute inset-0 bg-gradient-to-r from-cream-light via-sand-light/30 to-cream-light" />
      <div className="absolute top-0 left-0 right-0 divider-line" />
      <div className="absolute bottom-0 left-0 right-0 divider-line" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-center justify-center gap-6"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ transformOrigin: "right" }}
            className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-camel/30"
          />
          <span className="font-serif text-lg lg:text-xl text-camel-dark/80 italic tracking-wide">
            {t.text[lang]}
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ transformOrigin: "left" }}
            className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-camel/30"
          />
        </motion.div>
      </div>
    </div>
  );
}
