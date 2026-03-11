"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, Droplets, Gem, Flower2, Sun, Waves, Heart,
  Scissors, Eye, Star, Palette, Crown, Leaf, Zap, Hand,
  Footprints, Paintbrush, Clock, ChevronRight, Loader2, AlertCircle,
} from "lucide-react";
import type { Service } from "@/lib/booking-data";
import { formatPrice } from "@/lib/booking-data";
import { fetchServices, type ApiCategory } from "@/lib/api";

const iconMap: Record<string, React.ElementType> = {
  sparkles: Sparkles, droplets: Droplets, gem: Gem, flower2: Flower2,
  sun: Sun, waves: Waves, heart: Heart, scissors: Scissors,
  eye: Eye, star: Star, palette: Palette, crown: Crown,
  leaf: Leaf, zap: Zap, hand: Hand, footprints: Footprints,
  paintbrush: Paintbrush,
};

const categoryIcons: Record<string, React.ElementType> = {
  "Sourcils": Eye,
  "Cils": Sparkles,
  "Épilation": Scissors,
  "Head Spa": Waves,
  "Massage": Heart,
  "Manucure": Hand,
  "Pédicure": Footprints,
  "Coiffure": Paintbrush,
};

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface ServiceSelectionProps {
  onSelect: (service: Service) => void;
  selected: Service | null;
  initialCategory?: string;
}

export default function ServiceSelection({ onSelect, selected, initialCategory }: ServiceSelectionProps) {
  const [categories, setCategories] = useState<ApiCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchServices()
      .then((data) => {
        setCategories(data);
        const matchingCategory = initialCategory
          ? data.find(
              (c) => c.name.toLowerCase() === initialCategory.toLowerCase()
            )
          : null;
        setActiveCategory(matchingCategory?.name || data[0]?.name || "");
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Impossible de charger les soins");
      })
      .finally(() => setLoading(false));
  }, [initialCategory]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <div className="w-12 h-12 rounded-full border border-camel/20 flex items-center justify-center mb-4">
          <Loader2 size={20} className="text-camel animate-spin" />
        </div>
        <p className="text-taupe text-sm">Chargement des soins...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-24 max-w-md mx-auto text-center">
        <div className="w-14 h-14 rounded-full bg-terracotta/8 flex items-center justify-center mb-5">
          <AlertCircle size={24} className="text-terracotta" strokeWidth={1.5} />
        </div>
        <p className="text-charcoal font-serif text-xl mb-2">Connexion impossible</p>
        <p className="text-taupe text-sm mb-6">{error}</p>
        <button
          onClick={() => { setLoading(true); setError(null); fetchServices().then(d => { setCategories(d); if (d[0]) setActiveCategory(d[0].name); }).catch(e => setError(e.message)).finally(() => setLoading(false)); }}
          className="px-8 py-3 bg-charcoal text-cream-light rounded-full text-[12px] uppercase tracking-[0.15em] hover:bg-brown-dark transition-all duration-500"
        >
          Réessayer
        </button>
      </div>
    );
  }

  const categoryNames = categories.map((c) => c.name);
  const activeData = categories.find((c) => c.name === activeCategory);
  const filteredServices = activeData?.services ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease }}
    >
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-3">
          Choisissez votre soin
        </h2>
        <p className="text-taupe text-sm leading-relaxed max-w-lg mx-auto">
          Sélectionnez le soin qui vous correspond parmi notre gamme de prestations d&apos;exception.
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categoryNames.map((cat) => {
          const Icon = categoryIcons[cat] || Star;
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[0.15em] transition-all duration-500 ${
                isActive
                  ? "bg-charcoal text-cream-light shadow-lg shadow-charcoal/10"
                  : "bg-white border border-sand-light/50 text-taupe hover:border-camel/30 hover:text-charcoal"
              }`}
            >
              <Icon size={13} strokeWidth={1.5} />
              <span className="hidden sm:inline">{cat}</span>
              <span className="sm:hidden">{cat.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Service cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease }}
          className="grid gap-3 max-w-3xl mx-auto"
        >
          {filteredServices.map((apiService) => {
            const service: Service = {
              id: apiService.id,
              category: activeCategory,
              name: apiService.name,
              description: apiService.description,
              duration: apiService.duration,
              price: apiService.price,
              priceFrom: apiService.priceFrom ?? false,
              icon: apiService.icon ?? "star",
            };
            const Icon = iconMap[service.icon] || Star;
            const isSelected = selected?.id === service.id;

            return (
              <motion.button
                key={service.id}
                onClick={() => onSelect(service)}
                whileTap={{ scale: 0.995 }}
                className={`group relative w-full text-left p-5 lg:p-6 rounded-2xl border transition-all duration-500 ${
                  isSelected
                    ? "border-camel/60 bg-gradient-to-r from-camel/5 to-gold-muted/5 shadow-lg shadow-camel/8"
                    : "border-sand-light/40 bg-white hover:border-camel/25 hover:shadow-md hover:shadow-sand/8"
                }`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                      isSelected
                        ? "bg-camel/12 text-camel-dark"
                        : "bg-sand-light/50 text-taupe group-hover:bg-camel/8 group-hover:text-camel-dark"
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-lg text-charcoal mb-1">
                          {service.name}
                        </h3>
                        <p className="text-taupe text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div
                        className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-500 mt-1 ${
                          isSelected
                            ? "border-camel bg-camel"
                            : "border-sand/50 group-hover:border-camel/30"
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className="w-1.5 h-1.5 rounded-full bg-white"
                          />
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-3">
                      <span className="flex items-center gap-1.5 text-[11px] text-taupe/70">
                        <Clock size={11} strokeWidth={1.5} />
                        {service.duration} min
                      </span>
                      <span className="text-sm font-medium text-camel-dark">
                        {formatPrice(service.price, service.priceFrom)}
                      </span>
                    </div>
                  </div>
                </div>

                {isSelected && (
                  <motion.div
                    layoutId="service-selected"
                    className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-camel to-gold-muted rounded-r-full"
                    transition={{ duration: 0.3, ease }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease }}
          className="text-center mt-8"
        >
          <p className="text-camel-dark text-sm flex items-center justify-center gap-2">
            <span className="font-serif italic">{selected.name}</span>
            sélectionné
            <ChevronRight size={14} />
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
