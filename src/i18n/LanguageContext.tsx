"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Lang } from "./translations";

type LanguageContextType = {
  lang: Lang;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleLang = useCallback(() => {
    setIsTransitioning(true);
    // Switch language at the midpoint of the animation (overlay fully opaque)
    setTimeout(() => {
      setLang((prev) => (prev === "fr" ? "en" : "fr"));
    }, 400);
    // Remove overlay after full animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 900);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}

      {/* Language transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-charcoal flex flex-col items-center justify-center"
          >
            {/* SVG diamond ornament */}
            <svg
              className="absolute w-52 h-52 md:w-64 md:h-64 opacity-[0.07]"
              viewBox="0 0 200 200"
              fill="none"
              style={{ transform: "rotate(45deg)" }}
            >
              <rect
                x="10" y="10" width="180" height="180" rx="4"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-gold-muted"
              />
              <rect
                x="30" y="30" width="140" height="140" rx="2"
                stroke="currentColor"
                strokeWidth="0.3"
                className="text-gold-muted"
              />
            </svg>

            {/* Brand name with shimmer */}
            <span
              className="font-serif text-[34px] md:text-[42px] text-transparent bg-clip-text font-bold tracking-[0.08em]"
              style={{
                backgroundImage: "linear-gradient(110deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.9) 35%, rgba(201,169,110,1) 50%, rgba(255,255,255,0.9) 65%, rgba(255,255,255,0.6) 100%)",
                backgroundSize: "250% 100%",
                animation: "textShimmer 1.8s ease-in-out infinite",
              }}
            >
              SKB Beauty
            </span>
            <span className="font-serif text-[13px] text-gold-muted/40 italic font-light mt-1 tracking-[0.15em]">
              Marrakech
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
