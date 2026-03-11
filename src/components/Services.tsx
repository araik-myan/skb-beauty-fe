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
import Link from "next/link";

const services = [
  {
    icon: Eye,
    title: "Sourcils",
    subtitle: "Le regard sublimé",
    description:
      "Épilation, teinture, brow lift — des techniques précises pour des sourcils parfaitement dessinés.",
    gradient: "from-[#3D3229] via-[#5A4D42] to-[#4A3728]",
    accent: "#C9A96E",
    size: "large",
  },
  {
    icon: Sparkles,
    title: "Cils",
    subtitle: "L'éclat du regard",
    description:
      "Poses naturelles 2D, volume 3D/4D ou maxi volume 5D/6D pour un regard intense et captivant.",
    gradient: "from-[#4A3728] via-[#5A4D42] to-[#3D3229]",
    accent: "#D4BC9A",
    size: "large",
  },
  {
    icon: Scissors,
    title: "Épilation",
    subtitle: "Douceur absolue",
    description:
      "Cire orientale pour une peau parfaitement lisse. Aisselles, jambes, maillots ou forfait intégral.",
    gradient: "from-[#5A4D42] via-[#4A3728] to-[#3D3229]",
    accent: "#C47D5A",
    size: "medium",
  },
  {
    icon: Waves,
    title: "Head Spa",
    subtitle: "Rituel exclusif",
    description:
      "Massage crânien relaxant, soins du cuir chevelu et huiles aromatiques pour une détente absolue.",
    gradient: "from-[#3D3229] via-[#4A3728] to-[#5A4D42]",
    accent: "#DBC48A",
    size: "medium",
  },
  {
    icon: Heart,
    title: "Massage",
    subtitle: "Voyage sensoriel",
    description:
      "Relaxants, toniques ou aux pierres chaudes. Libérez les tensions et retrouvez la sérénité.",
    gradient: "from-[#4A3728] via-[#3D3229] to-[#5A4D42]",
    accent: "#D4977A",
    size: "medium",
  },
  {
    icon: Hand,
    title: "Manucure",
    subtitle: "Mains sublimes",
    description:
      "Pose gel, semi-permanent, gainage ou nails art. Des ongles impeccables grâce à notre expertise.",
    gradient: "from-[#5A4D42] via-[#3D3229] to-[#4A3728]",
    accent: "#C4A77D",
    size: "small",
  },
  {
    icon: Footprints,
    title: "Pédicure",
    subtitle: "Soins des pieds",
    description:
      "Beauté, nettoyage, restructuration et vernis semi-permanent pour des pieds soignés et élégants.",
    gradient: "from-[#3D3229] via-[#5A4D42] to-[#4A3728]",
    accent: "#A69882",
    size: "small",
  },
  {
    icon: Paintbrush,
    title: "Coiffure",
    subtitle: "L'art capillaire",
    description:
      "Coupes, brushings, colorations, balayages, soins botox et lissages au service de votre beauté.",
    gradient: "from-[#4A3728] via-[#5A4D42] to-[#3D3229]",
    accent: "#D4BC9A",
    size: "small",
  },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="soins" className="py-28 lg:py-36 bg-cream-light relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 right-0 divider-line" />
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-gradient-to-br from-camel/5 to-transparent blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-nude/10 to-transparent blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl mb-20 lg:mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-camel" />
            <span className="text-camel text-[11px] uppercase tracking-[0.4em]">
              Nos Soins
            </span>
          </div>
          <h2 className="font-serif text-5xl lg:text-6xl xl:text-7xl text-charcoal leading-[1.05] mb-6">
            Des soins d&apos;exception
            <span className="block text-camel-dark italic font-light mt-1">
              pour révéler votre éclat
            </span>
          </h2>
          <p className="text-taupe leading-relaxed text-base lg:text-lg max-w-xl">
            Découvrez notre gamme complète de soins beauté et bien-être,
            conçus avec passion et expertise pour sublimer chaque femme.
          </p>
        </motion.div>

        {/* Editorial bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5">
          {services.map((service, index) => {
            const colSpan =
              service.size === "large"
                ? "lg:col-span-6"
                : service.size === "medium"
                ? "lg:col-span-4"
                : "lg:col-span-4";

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.08 * index,
                  ease,
                }}
                className={`group relative ${colSpan}`}
              >
                <Link href={`/reservation?category=${encodeURIComponent(service.title)}`}>
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
                          {service.subtitle}
                        </p>
                        <h3 className="font-serif text-2xl lg:text-3xl text-white mb-3 leading-tight">
                          {service.title}
                        </h3>

                        {/* Description - revealed on hover */}
                        <div className="overflow-hidden">
                          <motion.p
                            className="text-white/50 text-sm leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                          >
                            {service.description}
                          </motion.p>
                        </div>

                        {/* Hover arrow */}
                        <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                          <span
                            className="text-[11px] uppercase tracking-[0.2em]"
                            style={{ color: service.accent }}
                          >
                            Découvrir
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
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9, ease }}
          className="mt-16 lg:mt-20 flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="/reservation"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-charcoal text-cream-light rounded-full text-[13px] uppercase tracking-[0.2em] hover:bg-brown-dark transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5"
          >
            Prendre Rendez-vous
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
          <div className="h-px w-12 bg-sand hidden sm:block" />
          <p className="text-taupe text-sm italic">
            Consultez nos tarifs lors de la réservation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
