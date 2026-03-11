"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  { number: 1, label: "Soin" },
  { number: 2, label: "Date" },
  { number: 3, label: "Heure" },
  { number: 4, label: "Coordonnées" },
  { number: 5, label: "Confirmation" },
];

interface StepIndicatorProps {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-14">
      <div className="flex items-center justify-between relative">
        {/* Background line */}
        <div className="absolute top-5 left-0 right-0 h-px bg-sand-light/40" />
        {/* Active line */}
        <motion.div
          className="absolute top-5 left-0 h-px bg-gradient-to-r from-camel to-gold-muted"
          initial={{ width: "0%" }}
          animate={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {steps.map((step) => {
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;

          return (
            <div
              key={step.number}
              className="relative flex flex-col items-center z-10"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-500 ${
                  isCompleted
                    ? "bg-gradient-to-br from-camel to-camel-dark text-white shadow-md shadow-camel/15"
                    : isCurrent
                    ? "bg-charcoal text-cream-light ring-4 ring-camel/15 shadow-md"
                    : "bg-cream-light border border-sand/40 text-taupe/60"
                }`}
              >
                {isCompleted ? (
                  <Check size={15} strokeWidth={2.5} />
                ) : (
                  <span className="text-[13px]">{step.number}</span>
                )}
              </motion.div>
              <span
                className={`mt-3 text-[10px] uppercase tracking-[0.15em] transition-colors duration-300 hidden sm:block ${
                  isCurrent
                    ? "text-charcoal font-medium"
                    : isCompleted
                    ? "text-camel"
                    : "text-taupe/40"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
