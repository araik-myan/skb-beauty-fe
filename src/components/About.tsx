"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Gem, Award } from "lucide-react";
import Image from "next/image";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="apropos" className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 divider-line" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-nude-light/20 to-transparent rounded-bl-full" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Visual block — 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
              {/* Background image */}
              <Image
                src="/images/about-bg.png"
                alt="SKB Beauty Marrakech - Institut de beauté"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />

              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/50 to-charcoal/75" />

              {/* Warm light effect */}
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse 300px 400px at 60% 40%, rgba(201,169,110,0.15) 0%, transparent 70%)`,
                }}
              />

              {/* Concentrated dark zone behind text */}
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse 70% 50% at 50% 55%, rgba(61,50,41,0.45) 0%, transparent 70%)`,
                }}
              />

              {/* Content inside visual */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center backdrop-blur-[1px]">
                <div className="w-20 h-20 rounded-full border border-gold-muted/30 flex items-center justify-center mb-6 animate-float backdrop-blur-sm bg-white/5">
                  <Gem size={28} className="text-gold-muted/90" strokeWidth={1.2} />
                </div>
                <p className="font-serif text-3xl text-white leading-snug mb-2" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.25)' }}>
                  L&apos;art de
                </p>
                <p className="font-serif text-3xl text-gold-muted italic leading-snug" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.2)' }}>
                  la beauté
                </p>
                <div className="w-12 h-px shimmer-gold mt-6" />
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease }}
              className="absolute -bottom-6 -right-4 lg:right-4 bg-white rounded-2xl p-5 shadow-xl shadow-sand/15 border border-sand-light/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-camel/15 to-gold-muted/10 flex items-center justify-center">
                  <Award size={20} className="text-gold-muted" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-serif text-lg text-charcoal">Excellence</p>
                  <p className="text-[10px] text-taupe uppercase tracking-[0.2em]">
                    Beauté & Bien-être
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Corner accents */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t border-l border-camel/15 rounded-tl-2xl" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b border-r border-camel/10 rounded-br-2xl" />
          </motion.div>

          {/* Right: Content — 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-camel" />
              <span className="text-camel text-[11px] uppercase tracking-[0.4em]">
                À Propos
              </span>
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-charcoal leading-[1.1] mb-8">
              Un havre de beauté
              <span className="block text-camel-dark italic font-light mt-1">
                au cœur de Guéliz
              </span>
            </h2>

            <div className="space-y-5 text-taupe leading-[1.8] text-[15px]">
              <p>
                Bienvenue chez{" "}
                <strong className="text-charcoal font-medium">
                  SKB Beauty Marrakech
                </strong>
                , votre destination beauté d&apos;exception au cœur du quartier Guéliz.
                Notre institut incarne l&apos;élégance et le raffinement, offrant un
                espace où chaque détail est pensé pour sublimer votre beauté naturelle.
              </p>
              <p>
                Dans un cadre chaleureux et luxueux, notre équipe de professionnelles
                passionnées vous accueille avec une attention particulière. Chaque soin
                est une expérience sur-mesure, conçue pour répondre à vos besoins
                uniques et révéler votre éclat intérieur.
              </p>
              <p className="text-charcoal/70 italic font-serif text-lg">
                Nous croyons que la beauté est un art — et que chaque femme mérite
                un moment de grâce et de sérénité pour se reconnecter à elle-même.
              </p>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-sand-light/50">
              {[
                { icon: Heart, label: "Passion", desc: "Du soin" },
                { icon: Gem, label: "Qualité", desc: "Premium" },
                { icon: Award, label: "Expertise", desc: "Confirmée" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sand-light/80 to-cream flex items-center justify-center group-hover:from-camel/15 group-hover:to-gold-muted/10 transition-all duration-500">
                    <item.icon
                      size={20}
                      className="text-camel-dark"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal text-sm tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-xs text-taupe">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
