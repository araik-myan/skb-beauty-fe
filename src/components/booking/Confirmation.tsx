"use client";

import { motion } from "framer-motion";
import {
  CheckCircle, Calendar, MapPin, Phone,
  Instagram, Mail, Sparkles, ArrowLeft,
} from "lucide-react";
import type { BookingState } from "@/lib/booking-data";
import { formatDateFr, formatPrice } from "@/lib/booking-data";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface ConfirmationProps {
  booking: BookingState;
  bookingRef: string;
  onNewBooking: () => void;
}

export default function Confirmation({ booking, bookingRef, onNewBooking }: ConfirmationProps) {
  const { service, date, time, client } = booking;

  if (!service || !date || !time || !client) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease }}
    >
      <div className="max-w-lg mx-auto text-center">
        {/* Success animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 180, damping: 15 }}
          className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-camel/15 to-gold-muted/8 flex items-center justify-center mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 250 }}
          >
            <CheckCircle size={36} className="text-camel-dark" strokeWidth={1.3} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, ease }}
        >
          <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-3">
            Rendez-vous confirmé
          </h2>
          <p className="text-taupe text-sm leading-relaxed max-w-md mx-auto mb-3">
            Merci, <span className="text-charcoal font-medium">{client.firstName}</span>.
            Votre réservation a été enregistrée avec succès.
            Un email de confirmation a été envoyé à{" "}
            <span className="text-charcoal font-medium">{client.email}</span>.
          </p>
          <p className="text-[10px] text-taupe/50 uppercase tracking-[0.3em]">
            Référence : <span className="text-camel-dark font-medium">{bookingRef}</span>
          </p>
        </motion.div>

        {/* Booking card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, ease }}
          className="mt-10 bg-white rounded-3xl border border-sand-light/40 shadow-xl shadow-sand/8 overflow-hidden text-left"
        >
          {/* Gold bar */}
          <div className="h-1 shimmer-gold" />

          <div className="p-6 space-y-4">
            {/* Service */}
            <div className="flex items-center gap-3">
              <Sparkles size={14} className="text-camel-dark shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-serif text-lg text-charcoal">{service.name}</p>
                <p className="text-[11px] text-taupe/70">
                  {service.duration} min · {formatPrice(service.price, service.priceFrom)}
                </p>
              </div>
            </div>

            <div className="divider-line" />

            {/* Date & Time */}
            <div className="flex items-center gap-3">
              <Calendar size={14} className="text-camel-dark shrink-0" strokeWidth={1.5} />
              <p className="text-sm text-charcoal">
                {formatDateFr(date)} à <span className="font-medium">{time}</span>
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <MapPin size={14} className="text-camel-dark shrink-0" strokeWidth={1.5} />
              <p className="text-sm text-charcoal">
                2 Rue Imam Malek, Guéliz, Marrakech
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone size={14} className="text-camel-dark shrink-0" strokeWidth={1.5} />
              <a href="tel:+212634194996" className="text-sm text-camel-dark hover:underline">
                +212 6 34 19 49 96
              </a>
            </div>
          </div>

          {/* Reminder notice */}
          <div className="mx-6 mb-6 p-4 rounded-xl bg-cream-light/50 border border-sand-light/25">
            <div className="flex items-start gap-3">
              <Mail size={14} className="text-camel-dark shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-medium text-charcoal">Rappel par email</p>
                <p className="text-[11px] text-taupe/70 mt-1 leading-relaxed">
                  Un rappel vous sera envoyé 24 heures avant votre rendez-vous.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, ease }}
          className="mt-8 space-y-5"
        >
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+212634194996"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-charcoal text-cream-light rounded-xl text-[12px] uppercase tracking-[0.15em] hover:bg-brown-dark transition-all duration-500"
            >
              <Phone size={13} strokeWidth={1.5} />
              Contacter le salon
            </a>
            <a
              href="https://www.instagram.com/skbbeauty212/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-sand/40 text-charcoal rounded-xl text-[12px] uppercase tracking-[0.15em] hover:border-camel/40 hover:bg-camel/4 transition-all duration-500"
            >
              <Instagram size={13} strokeWidth={1.5} />
              Nous suivre
            </a>
          </div>

          <button
            onClick={onNewBooking}
            className="flex items-center justify-center gap-2 mx-auto text-sm text-taupe hover:text-camel-dark transition-colors duration-300"
          >
            <ArrowLeft size={13} />
            Réserver un autre soin
          </button>
        </motion.div>

        {/* Trust message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, ease }}
          className="mt-12 text-[11px] text-taupe/40 italic max-w-sm mx-auto leading-relaxed"
        >
          En cas d&apos;empêchement, merci de nous prévenir au moins 24 heures à l&apos;avance.
          Nous vous remercions de votre confiance.
        </motion.p>
      </div>
    </motion.div>
  );
}
