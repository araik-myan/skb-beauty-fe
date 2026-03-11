"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Mail, MessageSquare, Bell } from "lucide-react";
import { ClientInfo } from "@/lib/booking-data";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

interface ClientFormProps {
  onSubmit: (info: ClientInfo) => void;
  initial: ClientInfo | null;
}

export default function ClientForm({ onSubmit, initial }: ClientFormProps) {
  const [form, setForm] = useState<ClientInfo>(
    initial || {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      notes: "",
    }
  );

  const [errors, setErrors] = useState<Partial<Record<keyof ClientInfo, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ClientInfo, string>> = {};
    if (!form.firstName.trim()) newErrors.firstName = "Veuillez entrer votre prénom";
    if (!form.lastName.trim()) newErrors.lastName = "Veuillez entrer votre nom";
    if (!form.phone.trim()) {
      newErrors.phone = "Veuillez entrer votre numéro";
    } else if (!/^[+\d\s()-]{8,}$/.test(form.phone)) {
      newErrors.phone = "Numéro invalide";
    }
    if (!form.email.trim()) {
      newErrors.email = "L'email est requis pour recevoir votre confirmation";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Adresse email invalide";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(form);
    }
  };

  const updateField = (field: keyof ClientInfo, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const inputClass = (field: keyof ClientInfo) =>
    `w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border text-charcoal placeholder:text-sand/60 text-sm transition-all duration-500 outline-none ${
      errors[field]
        ? "border-terracotta/40 focus:border-terracotta focus:ring-1 focus:ring-terracotta/20"
        : "border-sand-light/40 focus:border-camel/40 focus:ring-1 focus:ring-camel/10"
    }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease }}
    >
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-3">
          Vos coordonnées
        </h2>
        <p className="text-taupe text-sm leading-relaxed max-w-lg mx-auto">
          Renseignez vos informations pour finaliser la réservation.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-5">
        {/* Name row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-2.5 font-medium">
              Prénom *
            </label>
            <div className="relative">
              <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-dark/60" strokeWidth={1.5} />
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
                placeholder="Votre prénom"
                className={inputClass("firstName")}
              />
            </div>
            {errors.firstName && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease }} className="text-terracotta text-[11px] mt-1.5">
                {errors.firstName}
              </motion.p>
            )}
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-2.5 font-medium">
              Nom *
            </label>
            <div className="relative">
              <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-dark/60" strokeWidth={1.5} />
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => updateField("lastName", e.target.value)}
                placeholder="Votre nom"
                className={inputClass("lastName")}
              />
            </div>
            {errors.lastName && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease }} className="text-terracotta text-[11px] mt-1.5">
                {errors.lastName}
              </motion.p>
            )}
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-2.5 font-medium">
            Téléphone *
          </label>
          <div className="relative">
            <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-dark/60" strokeWidth={1.5} />
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              placeholder="+212 6 XX XX XX XX"
              className={inputClass("phone")}
            />
          </div>
          {errors.phone && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease }} className="text-terracotta text-[11px] mt-1.5">
              {errors.phone}
            </motion.p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-2.5 font-medium">
            Email *
          </label>
          <div className="relative">
            <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-dark/60" strokeWidth={1.5} />
            <input
              type="email"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="votre@email.com"
              className={inputClass("email")}
            />
          </div>
          {errors.email && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease }} className="text-terracotta text-[11px] mt-1.5">
              {errors.email}
            </motion.p>
          )}
        </div>

        {/* Notes */}
        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-2.5 font-medium">
            Notes <span className="text-sand/50">(optionnel)</span>
          </label>
          <div className="relative">
            <MessageSquare size={14} className="absolute left-4 top-4 text-sand-dark/60" strokeWidth={1.5} />
            <textarea
              value={form.notes}
              onChange={(e) => updateField("notes", e.target.value)}
              placeholder="Allergies, préférences, demandes spéciales..."
              rows={3}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-sand-light/40 text-charcoal placeholder:text-sand/60 text-sm transition-all duration-500 outline-none focus:border-camel/40 focus:ring-1 focus:ring-camel/10 resize-none"
            />
          </div>
        </div>

        {/* Email reminder info */}
        <div className="p-5 rounded-2xl bg-white border border-sand-light/30">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-lg bg-camel/8 flex items-center justify-center">
              <Bell size={14} className="text-camel-dark" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-medium text-charcoal">
              Rappel automatique par email
            </span>
          </div>
          <p className="text-[11px] text-taupe/70 leading-relaxed pl-[42px]">
            Vous recevrez un email de confirmation immédiat ainsi qu&apos;un rappel 24 heures
            avant votre rendez-vous à l&apos;adresse indiquée ci-dessus.
          </p>
        </div>

        <input type="submit" id="client-form-submit" className="hidden" />
      </form>
    </motion.div>
  );
}
