"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Instagram, ArrowUpRight, ExternalLink } from "lucide-react";
import type { InstagramPost } from "@/app/api/instagram/route";

const fallbackItems = [
  {
    gradient: "from-[#3D3229] via-[#5A4D42] to-[#4A3728]",
    label: "Soins Visage",
    size: "large" as const,
  },
  {
    gradient: "from-[#C47D5A]/30 via-[#BBA98F]/30 to-[#C4A77D]/30",
    label: "Ambiance Luxe",
    size: "small" as const,
  },
  {
    gradient: "from-[#D4B99A]/30 via-[#D4BC9A]/30 to-[#DBC48A]/20",
    label: "Maquillage",
    size: "small" as const,
  },
  {
    gradient: "from-[#4A3728] via-[#3D3229] to-[#5A4D42]",
    label: "Bien-être",
    size: "medium" as const,
  },
  {
    gradient: "from-[#8B7D6B]/30 via-[#BBA98F]/25 to-[#C4A77D]/20",
    label: "Institut",
    size: "small" as const,
  },
  {
    gradient: "from-[#5A4D42] via-[#4A3728] to-[#3D3229]",
    label: "Résultats",
    size: "medium" as const,
  },
];

const sizePatterns = ["large", "small", "small", "medium", "small", "medium"] as const;

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/instagram")
      .then((res) => res.json())
      .then((data) => {
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts.slice(0, 6));
        }
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  const hasRealPosts = posts.length > 0;

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
                Galerie
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-charcoal leading-[1.1]">
              L&apos;univers
              <span className="text-camel-dark italic font-light"> SKB Beauty</span>
            </h2>
          </div>
          <p className="text-taupe leading-relaxed text-[15px] max-w-sm">
            Plongez dans notre univers de beauté et découvrez l&apos;atmosphère
            raffinée qui vous attend.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-4">
          {hasRealPosts
            ? posts.map((post, index) => {
                const size = sizePatterns[index % sizePatterns.length];
                const gridClass =
                  size === "large"
                    ? "col-span-2 lg:col-span-6 aspect-[16/10]"
                    : size === "medium"
                    ? "col-span-1 lg:col-span-4 aspect-[4/5]"
                    : "col-span-1 lg:col-span-3 aspect-square";

                return (
                  <motion.a
                    key={post.id}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.08 * index, ease }}
                    className={`group relative rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer ${gridClass}`}
                  >
                    {/* Real Instagram image */}
                    <img
                      src={post.thumbnail_url || post.media_url}
                      alt={post.caption?.slice(0, 100) || "SKB Beauty Marrakech"}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-all duration-600 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-500 text-center">
                        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mx-auto mb-3 group-hover:border-white/50 transition-colors">
                          <ExternalLink size={20} className="text-white" strokeWidth={1.5} />
                        </div>
                        <span className="text-white text-xs uppercase tracking-[0.25em] font-light">
                          Voir sur Instagram
                        </span>
                      </div>
                    </div>
                  </motion.a>
                );
              })
            : fallbackItems.map((item, index) => {
                const gridClass =
                  item.size === "large"
                    ? "col-span-2 lg:col-span-6 aspect-[16/10]"
                    : item.size === "medium"
                    ? "col-span-1 lg:col-span-4 aspect-[4/5]"
                    : "col-span-1 lg:col-span-3 aspect-square";

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.08 * index, ease }}
                    className={`group relative rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer ${gridClass}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(circle at ${30 + index * 12}% ${40 + index * 8}%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
                      }}
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-all duration-600 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-500 text-center">
                        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mx-auto mb-3 group-hover:border-white/50 transition-colors">
                          <Instagram size={20} className="text-white" strokeWidth={1.5} />
                        </div>
                        <span className="text-white text-xs uppercase tracking-[0.25em] font-light">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
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
            <Instagram size={16} strokeWidth={1.5} />
            Suivez-nous sur Instagram
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
