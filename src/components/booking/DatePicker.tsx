"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const DAYS_FR = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const MONTHS_FR = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface DatePickerProps {
  selected: Date | null;
  onSelect: (date: Date) => void;
}

export default function DatePicker({ selected, onSelect }: DatePickerProps) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
  const startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(viewYear, viewMonth, day);
    if (date < today) return true;
    if (date.getDay() === 0) return true;
    const maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + 60);
    if (date > maxDate) return true;
    return false;
  };

  const isSelected = (day: number) => {
    if (!selected) return false;
    return (
      selected.getDate() === day &&
      selected.getMonth() === viewMonth &&
      selected.getFullYear() === viewYear
    );
  };

  const isToday = (day: number) => {
    return (
      today.getDate() === day &&
      today.getMonth() === viewMonth &&
      today.getFullYear() === viewYear
    );
  };

  const canGoPrev = viewYear > today.getFullYear() || viewMonth > today.getMonth();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease }}
    >
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-3">
          Choisissez une date
        </h2>
        <p className="text-taupe text-sm leading-relaxed max-w-lg mx-auto">
          Sélectionnez le jour qui vous convient le mieux pour votre rendez-vous.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-3xl border border-sand-light/40 shadow-xl shadow-sand/8 p-6 lg:p-8">
          {/* Month navigation */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={prevMonth}
              disabled={!canGoPrev}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                canGoPrev
                  ? "text-charcoal hover:bg-sand-light/50"
                  : "text-sand/30 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <div className="text-center">
              <h3 className="font-serif text-xl text-charcoal">
                {MONTHS_FR[viewMonth]}
              </h3>
              <span className="text-[10px] text-taupe/60 tracking-[0.2em]">{viewYear}</span>
            </div>
            <button
              onClick={nextMonth}
              className="w-10 h-10 rounded-full flex items-center justify-center text-charcoal hover:bg-sand-light/50 transition-all duration-300"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-3">
            {DAYS_FR.map((day) => (
              <div
                key={day}
                className="text-center text-[10px] uppercase tracking-[0.15em] text-taupe/40 font-medium py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: startDay }).map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const disabled = isDateDisabled(day);
              const sel = isSelected(day);
              const tod = isToday(day);

              return (
                <button
                  key={day}
                  onClick={() => {
                    if (!disabled) {
                      onSelect(new Date(viewYear, viewMonth, day));
                    }
                  }}
                  disabled={disabled}
                  className={`aspect-square rounded-xl flex items-center justify-center text-sm transition-all duration-300 relative ${
                    sel
                      ? "bg-charcoal text-cream-light font-medium shadow-md shadow-charcoal/15"
                      : disabled
                      ? "text-sand/30 cursor-not-allowed"
                      : "text-charcoal hover:bg-camel/8 hover:text-camel-dark"
                  }`}
                >
                  {day}
                  {tod && !sel && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-camel" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-sand-light/30">
            <div className="flex items-center gap-2 text-[10px] text-taupe/60">
              <span className="w-2.5 h-2.5 rounded-full bg-charcoal" />
              Sélectionné
            </div>
            <div className="flex items-center gap-2 text-[10px] text-taupe/60">
              <span className="w-2.5 h-2.5 rounded-full border border-sand/30" />
              Disponible
            </div>
            <div className="flex items-center gap-2 text-[10px] text-taupe/60">
              <Calendar size={10} className="text-camel" />
              Aujourd&apos;hui
            </div>
          </div>
        </div>

        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease }}
            className="text-center mt-6"
          >
            <p className="text-camel-dark text-sm">
              <span className="font-serif italic">
                {DAYS_FR[selected.getDay() === 0 ? 6 : selected.getDay() - 1]}{" "}
                {selected.getDate()} {MONTHS_FR[selected.getMonth()]}
              </span>{" "}
              sélectionné
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
