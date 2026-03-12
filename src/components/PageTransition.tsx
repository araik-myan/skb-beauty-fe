"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {/* Branded loading screen */}
        <motion.div
          variants={{
            hidden: { opacity: 1 },
            visible: { opacity: 0, transition: { duration: 0.4, delay: 0.3, ease: "easeInOut" } },
          }}
          className="fixed inset-0 z-[100] bg-charcoal flex flex-col items-center justify-center pointer-events-none"
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

        {/* Page content */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.4, delay: 0.35, ease: "easeInOut" } },
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
