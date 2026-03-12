"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const images = [
  "/images/instagram/IMG1.webp",
  "/images/instagram/IMG2.webp",
  "/images/instagram/IMG3.webp",
  "/images/instagram/IMG4.webp",
  "/images/instagram/IMG5.webp",
  "/images/instagram/IMG6.webp",
  "/images/instagram/IMG7.webp",
  "/images/instagram/IMG8.webp",
  "/images/instagram/IMG9.webp",
];

const overlayGradients = [
  "linear-gradient(135deg, rgba(61,50,41,0.30), rgba(90,77,66,0.20), rgba(74,55,40,0.30))",
  "linear-gradient(135deg, rgba(74,55,40,0.30), rgba(90,77,66,0.20), rgba(61,50,41,0.30))",
  "linear-gradient(135deg, rgba(90,77,66,0.30), rgba(74,55,40,0.20), rgba(61,50,41,0.30))",
  "linear-gradient(135deg, rgba(61,50,41,0.30), rgba(74,55,40,0.20), rgba(90,77,66,0.30))",
  "linear-gradient(135deg, rgba(74,55,40,0.30), rgba(61,50,41,0.20), rgba(90,77,66,0.30))",
  "linear-gradient(135deg, rgba(90,77,66,0.30), rgba(61,50,41,0.20), rgba(74,55,40,0.30))",
  "linear-gradient(135deg, rgba(61,50,41,0.30), rgba(90,77,66,0.20), rgba(74,55,40,0.30))",
  "linear-gradient(135deg, rgba(74,55,40,0.30), rgba(61,50,41,0.20), rgba(90,77,66,0.30))",
  "linear-gradient(135deg, rgba(90,77,66,0.30), rgba(74,55,40,0.20), rgba(61,50,41,0.30))",
];

const heights = [
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[3/4]",
];

export default function Gallery() {
  const { lang } = useLanguage();
  const t = translations.gallery;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="galerie" className="py-28 lg:py-36 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 divider-line" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-camel" />
              <span className="text-camel text-[11px] uppercase tracking-[0.4em]">
                {t.label[lang]}
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-charcoal leading-[1.1]">
              {t.heading1[lang]}
              <span className="text-camel-dark italic font-light">{t.heading2[lang]}</span>
            </h2>
          </div>
          <p className="text-taupe leading-relaxed text-[15px] max-w-sm">
            {t.description[lang]}
          </p>
        </motion.div>

        {/* Gallery — 3 columns masonry */}
        <div className="columns-2 lg:columns-3 gap-3 lg:gap-4 space-y-3 lg:space-y-4">
          {images.map((src, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/skbbeauty212/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer block break-inside-avoid ${heights[index]}`}
            >
              <Image
                src={src}
                alt="SKB Beauty Marrakech"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className={`object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[0.1] sepia-[0.3] brightness-[1] ${index === 6 ? "object-bottom" : ""}`}
                loading="lazy"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: overlayGradients[index] }}
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-500 text-center">
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center mx-auto mb-2 group-hover:border-white/50 transition-colors">
                    <ExternalLink size={16} className="text-white" strokeWidth={1.5} />
                  </div>
                  <span className="text-white text-[10px] uppercase tracking-[0.25em] font-light">
                    {t.viewOnInstagram[lang]}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7, ease }}
          className="mt-12 lg:mt-16 text-center"
        >
          <a
            href="https://www.instagram.com/skbbeauty212/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-charcoal/15 text-charcoal rounded-full text-[12px] uppercase tracking-[0.2em] hover:bg-charcoal hover:text-cream-light transition-all duration-500"
          >
            {t.followUs[lang]}
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
