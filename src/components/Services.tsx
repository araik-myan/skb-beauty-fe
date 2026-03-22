"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Eye,
  Sparkles,
  Scissors,
  Waves,
  Heart,
  Hand,
  Footprints,
  Paintbrush,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const servicesMeta = [
  { icon: Eye, gradient: "from-[#3D3229] via-[#5A4D42] to-[#4A3728]", accent: "#C9A96E", size: "large" },
  { icon: Sparkles, gradient: "from-[#4A3728] via-[#5A4D42] to-[#3D3229]", accent: "#D4BC9A", size: "large" },
  { icon: Scissors, gradient: "from-[#5A4D42] via-[#4A3728] to-[#3D3229]", accent: "#C47D5A", size: "medium" },
  { icon: Waves, gradient: "from-[#3D3229] via-[#4A3728] to-[#5A4D42]", accent: "#DBC48A", size: "medium" },
  { icon: Heart, gradient: "from-[#4A3728] via-[#3D3229] to-[#5A4D42]", accent: "#D4977A", size: "medium" },
  { icon: Hand, gradient: "from-[#5A4D42] via-[#3D3229] to-[#4A3728]", accent: "#C4A77D", size: "small" },
  { icon: Footprints, gradient: "from-[#3D3229] via-[#5A4D42] to-[#4A3728]", accent: "#A69882", size: "small" },
  { icon: Paintbrush, gradient: "from-[#4A3728] via-[#5A4D42] to-[#3D3229]", accent: "#D4BC9A", size: "small" },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Services() {
  const { lang } = useLanguage();
  const t = translations.services;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="soins" className="py-16 md:py-28 lg:py-36 bg-cream-light relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 right-0 divider-line" />
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-gradient-to-br from-camel/5 to-transparent blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-nude/10 to-transparent blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl mb-12 md:mb-20 lg:mb-24"
        >
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-px w-12 bg-camel" />
            <span className="text-camel text-[11px] uppercase tracking-[0.4em]">
              {t.label[lang]}
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-charcoal leading-[1.05] mb-4 md:mb-6">
            {t.heading1[lang]}
            <span className="block text-camel-dark italic font-light mt-1">
              {t.heading2[lang]}
            </span>
          </h2>
          <p className="text-taupe leading-relaxed text-sm md:text-base lg:text-lg max-w-xl">
            {t.description[lang]}
          </p>
        </motion.div>

        {/* Mobile: scrollable cards / Desktop: bento grid */}
        {/* Mobile layout */}
        <div className="flex md:hidden flex-col gap-3">
          {servicesMeta.map((service, index) => {
            const item = t.items[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.06 * index,
                  ease,
                }}
              >
                <div
                  className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${service.gradient}`}
                >
                  {/* Subtle pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,169,110,0.8) 0.5px, transparent 0)`,
                      backgroundSize: "24px 24px",
                    }}
                  />

                  {/* Content */}
                  <div className="relative p-5 flex gap-4">
                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${service.accent}15` }}
                    >
                      <service.icon
                        size={20}
                        style={{ color: service.accent }}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-[9px] uppercase tracking-[0.3em] mb-1"
                        style={{ color: `${service.accent}99` }}
                      >
                        {item.subtitle[lang]}
                      </p>
                      <h3 className="font-serif text-lg text-white mb-2 leading-tight">
                        {item.title[lang]}
                      </h3>
                      <p className="text-white/50 text-xs leading-relaxed mb-3">
                        {item.description[lang]}
                      </p>
                      <a
                        href="https://booking.beautynow.ma/69b83820e4d068d34960102e"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5"
                      >
                        <span
                          className="text-[10px] uppercase tracking-[0.2em]"
                          style={{ color: service.accent }}
                        >
                          {t.discover[lang]}
                        </span>
                        <ArrowRight size={12} style={{ color: service.accent }} />
                      </a>
                    </div>
                  </div>

                  {/* Side accent line */}
                  <div
                    className="absolute left-0 top-1/4 bottom-1/4 w-[2px]"
                    style={{ backgroundColor: service.accent }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop: bento grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5">
          {servicesMeta.map((service, index) => {
            const item = t.items[index];
            const colSpan =
              service.size === "large"
                ? "lg:col-span-6"
                : "lg:col-span-4";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.08 * index,
                  ease,
                }}
                className={`group relative ${colSpan}`}
              >
                <a
                  href="https://booking.beautynow.ma/69b83820e4d068d34960102e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`relative rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-700 ease-out cursor-pointer
                      ${service.size === "large" ? "h-72 lg:h-80" : service.size === "medium" ? "h-64 lg:h-72" : "h-56 lg:h-64"}`}
                  >
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-all duration-700`}
                    />

                    {/* Subtle pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,169,110,0.8) 0.5px, transparent 0)`,
                        backgroundSize: "24px 24px",
                      }}
                    />

                    {/* Hover light effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: `radial-gradient(ellipse 300px 300px at 70% 30%, ${service.accent}15, transparent 70%)`,
                      }}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 p-7 lg:p-9 flex flex-col justify-between">
                      {/* Top: Icon and number */}
                      <div className="flex items-start justify-between">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                          style={{ backgroundColor: `${service.accent}15` }}
                        >
                          <service.icon
                            size={22}
                            style={{ color: service.accent }}
                            strokeWidth={1.5}
                          />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-light">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Bottom: Text */}
                      <div>
                        <p
                          className="text-[10px] uppercase tracking-[0.3em] mb-2 transition-colors duration-500"
                          style={{ color: `${service.accent}99` }}
                        >
                          {item.subtitle[lang]}
                        </p>
                        <h3 className="font-serif text-2xl lg:text-3xl text-white mb-3 leading-tight">
                          {item.title[lang]}
                        </h3>

                        {/* Description - revealed on hover */}
                        <div className="overflow-hidden">
                          <motion.p
                            className="text-white/50 text-sm leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                          >
                            {item.description[lang]}
                          </motion.p>
                        </div>

                        {/* Hover arrow */}
                        <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                          <span
                            className="text-[11px] uppercase tracking-[0.2em]"
                            style={{ color: service.accent }}
                          >
                            {t.discover[lang]}
                          </span>
                          <ArrowRight size={14} style={{ color: service.accent }} />
                        </div>
                      </div>
                    </div>

                    {/* Bottom gradient fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

                    {/* Side accent line */}
                    <div
                      className="absolute left-0 top-1/4 bottom-1/4 w-[2px] scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom"
                      style={{ backgroundColor: service.accent }}
                    />
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9, ease }}
          className="mt-10 md:mt-16 lg:mt-20 flex flex-col sm:flex-row items-center gap-4 md:gap-6"
        >
          <a
            href="https://booking.beautynow.ma/69b83820e4d068d34960102e"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 md:px-10 py-3.5 md:py-4 bg-charcoal text-cream-light rounded-full text-[12px] md:text-[13px] uppercase tracking-[0.2em] hover:bg-brown-dark transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            {t.bookCta[lang]}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
          <div className="h-px w-12 bg-sand hidden sm:block" />
          <p className="text-taupe text-xs md:text-sm italic text-center sm:text-left">
            {t.bookNote[lang]}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
