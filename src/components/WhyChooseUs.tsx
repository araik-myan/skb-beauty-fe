"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Award,
  Gem,
  Sun,
  Eye,
  MapPin,
  UserCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Expertise Confirmée",
    description:
      "Une équipe qualifiée et passionnée, formée aux dernières techniques de beauté et de bien-être.",
    gridClass: "lg:col-span-7",
  },
  {
    icon: Gem,
    title: "Expérience Luxe",
    description:
      "Un cadre raffiné et élégant où chaque visite se transforme en un moment de grâce et de sérénité.",
    gridClass: "lg:col-span-5",
  },
  {
    icon: Sun,
    title: "Ambiance Chaleureuse",
    description:
      "Une atmosphère accueillante qui vous enveloppe dès votre arrivée, pour un bien-être total.",
    gridClass: "lg:col-span-5",
  },
  {
    icon: Eye,
    title: "Souci du Détail",
    description:
      "Chaque soin est exécuté avec une précision méticuleuse pour des résultats impeccables.",
    gridClass: "lg:col-span-7",
  },
  {
    icon: MapPin,
    title: "Emplacement Privilégié",
    description:
      "Au cœur de Guéliz, le quartier moderne et vivant de Marrakech, facilement accessible.",
    gridClass: "lg:col-span-6",
  },
  {
    icon: UserCheck,
    title: "Soins Personnalisés",
    description:
      "Des protocoles adaptés à votre type de peau et vos besoins spécifiques, sur-mesure.",
    gridClass: "lg:col-span-6",
  },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 lg:py-36 relative overflow-hidden">
      {/* Dark premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brown-dark via-charcoal to-brown-dark" />

      {/* Warm ambient glows */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 500px 500px at 15% 20%, rgba(201,169,110,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 400px 400px at 85% 80%, rgba(196,125,90,0.06) 0%, transparent 70%)
          `,
        }}
      />

      {/* Grain texture */}
      <div className="absolute inset-0 grain-overlay" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-muted/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-muted/60" />
            <span className="text-gold-muted/80 text-[11px] uppercase tracking-[0.4em]">
              Pourquoi Nous
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-muted/60" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-cream-light leading-[1.1] mb-6">
            L&apos;excellence à chaque
            <span className="block text-gold-muted italic font-light mt-1">
              instant
            </span>
          </h2>
          <p className="text-sand/50 leading-relaxed text-[15px] max-w-lg mx-auto">
            Nous nous engageons à offrir une expérience beauté incomparable,
            alliant savoir-faire, qualité et attention.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index, ease }}
              className={`group relative p-8 lg:p-10 rounded-2xl lg:rounded-3xl overflow-hidden bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.07] hover:border-gold-muted/20 hover:-translate-y-1 transition-all duration-500 ${reason.gridClass}`}
            >
              {/* Large background number */}
              <span className="absolute top-4 right-6 font-serif text-7xl lg:text-8xl text-white/[0.03] font-bold select-none pointer-events-none leading-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-muted/15 to-camel/10 flex items-center justify-center mb-6 border border-gold-muted/10 group-hover:border-gold-muted/20 transition-all duration-500">
                <reason.icon
                  size={24}
                  className="text-gold-muted group-hover:text-gold-light transition-colors duration-300"
                  strokeWidth={1.3}
                />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl lg:text-2xl text-cream-light mb-3 group-hover:text-white transition-colors duration-300">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-sand/50 text-sm leading-relaxed">
                {reason.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-muted/15 to-transparent group-hover:via-gold-muted/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
