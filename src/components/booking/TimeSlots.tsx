"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Sun, Sunset, Loader2, AlertCircle } from "lucide-react";
import type { TimeSlot } from "@/lib/booking-data";
import { formatDateFr } from "@/lib/booking-data";
import { fetchSlots } from "@/lib/api";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface TimeSlotsProps {
  date: Date;
  serviceId: string;
  selected: string | null;
  onSelect: (time: string) => void;
}

export default function TimeSlots({ date, serviceId, selected, onSelect }: TimeSlotsProps) {
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchSlots(serviceId, dateStr)
      .then((data) => {
        setSlots(data.slots);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Impossible de charger les créneaux");
      })
      .finally(() => setLoading(false));
  }, [serviceId, dateStr]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <div className="w-12 h-12 rounded-full border border-camel/20 flex items-center justify-center mb-4">
          <Loader2 size={20} className="text-camel animate-spin" />
        </div>
        <p className="text-taupe text-sm">Chargement des créneaux...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-24 max-w-md mx-auto text-center">
        <div className="w-14 h-14 rounded-full bg-terracotta/8 flex items-center justify-center mb-5">
          <AlertCircle size={24} className="text-terracotta" strokeWidth={1.5} />
        </div>
        <p className="text-charcoal font-serif text-xl mb-2">Erreur</p>
        <p className="text-taupe text-sm mb-6">{error}</p>
        <button
          onClick={() => { setLoading(true); setError(null); fetchSlots(serviceId, dateStr).then(d => setSlots(d.slots)).catch(e => setError(e.message)).finally(() => setLoading(false)); }}
          className="px-8 py-3 bg-charcoal text-cream-light rounded-full text-[12px] uppercase tracking-[0.15em] hover:bg-brown-dark transition-all duration-500"
        >
          Réessayer
        </button>
      </div>
    );
  }

  const morningSlots = slots.filter((s) => {
    const hour = parseInt(s.time.split(":")[0]);
    return hour < 12;
  });
  const afternoonSlots = slots.filter((s) => {
    const hour = parseInt(s.time.split(":")[0]);
    return hour >= 12;
  });

  const availableCount = slots.filter((s) => s.available).length;

  if (slots.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease }}
        className="text-center py-20"
      >
        <p className="font-serif text-xl text-charcoal mb-2">
          Institut fermé ce jour
        </p>
        <p className="text-taupe text-sm">
          Veuillez choisir un autre jour. Nous sommes ouverts du lundi au samedi.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease }}
    >
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-3">
          Choisissez un horaire
        </h2>
        <p className="text-taupe text-sm leading-relaxed max-w-lg mx-auto">
          {formatDateFr(date)} — {availableCount} créneaux disponibles
        </p>
      </div>

      <div className="max-w-lg mx-auto space-y-8">
        {morningSlots.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Sun size={14} className="text-gold-muted" strokeWidth={1.5} />
              <span className="text-[11px] uppercase tracking-[0.2em] text-taupe font-medium">
                Matin
              </span>
              <div className="h-px flex-1 bg-sand-light/40" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
              {morningSlots.map((slot) => (
                <SlotButton
                  key={slot.time}
                  slot={slot}
                  isSelected={selected === slot.time}
                  onSelect={onSelect}
                />
              ))}
            </div>
          </div>
        )}

        {afternoonSlots.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Sunset size={14} className="text-terracotta/60" strokeWidth={1.5} />
              <span className="text-[11px] uppercase tracking-[0.2em] text-taupe font-medium">
                Après-midi
              </span>
              <div className="h-px flex-1 bg-sand-light/40" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
              {afternoonSlots.map((slot) => (
                <SlotButton
                  key={slot.time}
                  slot={slot}
                  isSelected={selected === slot.time}
                  onSelect={onSelect}
                />
              ))}
            </div>
          </div>
        )}

        <div className="flex items-start gap-3 p-4 rounded-xl bg-sand-light/20 border border-sand-light/30">
          <Clock size={14} className="text-taupe/60 shrink-0 mt-0.5" strokeWidth={1.5} />
          <p className="text-[11px] text-taupe/70 leading-relaxed">
            Les créneaux sont mis à jour en temps réel. Si un créneau n&apos;est
            plus disponible, il apparaîtra grisé.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function SlotButton({
  slot,
  isSelected,
  onSelect,
}: {
  slot: TimeSlot;
  isSelected: boolean;
  onSelect: (time: string) => void;
}) {
  return (
    <button
      onClick={() => slot.available && onSelect(slot.time)}
      disabled={!slot.available}
      className={`relative py-3 px-3 rounded-xl text-sm transition-all duration-500 ${
        isSelected
          ? "bg-charcoal text-cream-light shadow-lg shadow-charcoal/15 font-medium scale-[1.03]"
          : slot.available
          ? "bg-white border border-sand-light/40 text-charcoal hover:border-camel/30 hover:bg-camel/4"
          : "bg-cream/30 border border-sand-light/20 text-sand/40 line-through cursor-not-allowed"
      }`}
    >
      {slot.time}
      {isSelected && (
        <motion.div
          layoutId="time-selected"
          className="absolute inset-0 rounded-xl ring-2 ring-camel/25"
          transition={{ duration: 0.2, ease }}
        />
      )}
    </button>
  );
}
