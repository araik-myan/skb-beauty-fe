"use client";

import { motion } from "framer-motion";
import {
  Sparkles, Calendar, Clock, User, Phone, Mail,
  MapPin, Bell, Shield, ChevronRight,
} from "lucide-react";
import { BookingState, formatDateFr, formatPrice } from "@/lib/booking-data";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface BookingSummaryProps {
  booking: BookingState;
  onConfirm: () => void;
  isSubmitting: boolean;
}

export default function BookingSummary({ booking, onConfirm, isSubmitting }: BookingSummaryProps) {
  const { service, date, time, client } = booking;

  if (!service || !date || !time || !client) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease }}
    >
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-3">
          Récapitulatif
        </h2>
        <p className="text-taupe text-sm leading-relaxed max-w-lg mx-auto">
          Vérifiez les détails avant de confirmer votre réservation.
        </p>
      </div>

      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-3xl border border-sand-light/40 shadow-xl shadow-sand/8 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-charcoal via-brown-dark to-charcoal p-6 text-center relative grain-overlay">
            <Sparkles size={16} className="text-gold-muted/80 mx-auto mb-2" strokeWidth={1.5} />
            <h3 className="font-serif text-xl text-cream-light">
              Votre rendez-vous
            </h3>
            <p className="text-sand/40 text-[10px] uppercase tracking-[0.3em] mt-1">
              SKB Beauty Marrakech
            </p>
          </div>

          {/* Details */}
          <div className="p-6 space-y-0">
            {/* Service */}
            <SummaryRow
              icon={<Sparkles size={16} className="text-camel-dark" strokeWidth={1.5} />}
              label="Soin"
              border
            >
              <p className="font-serif text-lg text-charcoal">{service.name}</p>
              <div className="flex items-center gap-4 mt-1">
                <span className="text-[11px] text-taupe/70 flex items-center gap-1">
                  <Clock size={10} strokeWidth={1.5} /> {service.duration} min
                </span>
                <span className="text-sm font-medium text-camel-dark">
                  {formatPrice(service.price, service.priceFrom)}
                </span>
              </div>
            </SummaryRow>

            {/* Date & Time */}
            <SummaryRow
              icon={<Calendar size={16} className="text-camel-dark" strokeWidth={1.5} />}
              label="Date & Heure"
              border
            >
              <p className="font-serif text-lg text-charcoal">{formatDateFr(date)}</p>
              <p className="text-camel-dark font-medium mt-0.5">à {time}</p>
            </SummaryRow>

            {/* Client */}
            <SummaryRow
              icon={<User size={16} className="text-camel-dark" strokeWidth={1.5} />}
              label="Client"
              border
            >
              <p className="font-serif text-lg text-charcoal">
                {client.firstName} {client.lastName}
              </p>
              <div className="mt-1 space-y-0.5">
                <p className="text-sm text-taupe flex items-center gap-2">
                  <Phone size={11} strokeWidth={1.5} /> {client.phone}
                </p>
                <p className="text-sm text-taupe flex items-center gap-2">
                  <Mail size={11} strokeWidth={1.5} /> {client.email}
                </p>
              </div>
            </SummaryRow>

            {/* Location */}
            <SummaryRow
              icon={<MapPin size={16} className="text-camel-dark" strokeWidth={1.5} />}
              label="Lieu"
              border
            >
              <p className="text-sm text-charcoal">SKB Beauty Marrakech</p>
              <p className="text-sm text-taupe">2 Rue Imam Malek, Guéliz</p>
            </SummaryRow>

            {/* Reminder */}
            <SummaryRow
              icon={<Bell size={16} className="text-camel-dark" strokeWidth={1.5} />}
              label="Rappel"
            >
              <p className="text-sm text-charcoal">Par email</p>
              <p className="text-[11px] text-taupe/70 mt-0.5">
                Confirmation immédiate + rappel 24h avant
              </p>
            </SummaryRow>

            {client.notes && (
              <div className="mt-5 p-4 rounded-xl bg-cream-light/50 border border-sand-light/30">
                <p className="text-[10px] uppercase tracking-[0.15em] text-taupe mb-1">Notes</p>
                <p className="text-sm text-charcoal italic">{client.notes}</p>
              </div>
            )}
          </div>

          {/* Confirm */}
          <div className="p-6 bg-cream-light/30">
            <div className="flex items-center justify-center gap-2 mb-5">
              <Shield size={12} className="text-camel-dark/60" strokeWidth={1.5} />
              <span className="text-[10px] text-taupe/60 tracking-[0.1em]">
                Réservation sécurisée — annulation gratuite 24h avant
              </span>
            </div>

            <button
              onClick={onConfirm}
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-charcoal text-cream-light rounded-xl text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-brown-dark transition-all duration-500 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-cream-light/20 border-t-cream-light rounded-full"
                />
              ) : (
                <>
                  Confirmer la réservation
                  <ChevronRight size={14} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SummaryRow({
  icon,
  label,
  border,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  border?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex items-start gap-4 py-5 ${border ? "border-b border-sand-light/25" : ""}`}>
      <div className="w-9 h-9 rounded-lg bg-camel/6 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-[10px] uppercase tracking-[0.15em] text-taupe/60 mb-1">{label}</p>
        {children}
      </div>
    </div>
  );
}
