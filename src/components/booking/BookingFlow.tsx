"use client";

import { useState, useCallback, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Service, ClientInfo, BookingState } from "@/lib/booking-data";
import { createBooking, type BookingResponse } from "@/lib/api";
import StepIndicator from "./StepIndicator";
import ServiceSelection from "./ServiceSelection";
import DatePicker from "./DatePicker";
import TimeSlots from "./TimeSlots";
import ClientForm from "./ClientForm";
import BookingSummary from "./BookingSummary";
import Confirmation from "./Confirmation";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const stepVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
};

export default function BookingFlow() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || undefined;
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState<BookingState>({
    service: null,
    date: null,
    time: null,
    client: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState<string>("");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const clientFormRef = useRef<ClientInfo | null>(null);

  const canProceed = useCallback(() => {
    switch (step) {
      case 1:
        return booking.service !== null;
      case 2:
        return booking.date !== null;
      case 3:
        return booking.time !== null;
      case 4:
        return booking.client !== null;
      case 5:
        return true;
      default:
        return false;
    }
  }, [step, booking]);

  const handleNext = () => {
    if (step === 4 && !booking.client) {
      const submitBtn = document.getElementById(
        "client-form-submit"
      ) as HTMLInputElement;
      if (submitBtn) submitBtn.click();
      return;
    }
    if (canProceed() && step < 5) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setSubmitError(null);
      setStep((s) => s - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleServiceSelect = (service: Service) => {
    setBooking((prev) => ({ ...prev, service, time: null }));
  };

  const handleDateSelect = (date: Date) => {
    setBooking((prev) => ({ ...prev, date, time: null }));
  };

  const handleTimeSelect = (time: string) => {
    setBooking((prev) => ({ ...prev, time }));
  };

  const handleClientSubmit = (info: ClientInfo) => {
    clientFormRef.current = info;
    setBooking((prev) => ({ ...prev, client: info }));
    setStep(5);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleConfirm = async () => {
    if (
      !booking.service ||
      !booking.date ||
      !booking.time ||
      !booking.client
    )
      return;

    setIsSubmitting(true);
    setSubmitError(null);

    const dateStr = `${booking.date.getFullYear()}-${String(booking.date.getMonth() + 1).padStart(2, "0")}-${String(booking.date.getDate()).padStart(2, "0")}`;

    try {
      const response: BookingResponse = await createBooking({
        serviceId: booking.service.id,
        date: dateStr,
        time: booking.time,
        client: {
          firstName: booking.client.firstName,
          lastName: booking.client.lastName,
          phone: booking.client.phone,
          email: booking.client.email,
          notes: booking.client.notes || undefined,
        },
      });

      setBookingRef(response.reference);
      setIsConfirmed(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue lors de la réservation"
      );
    } finally {
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNewBooking = () => {
    setBooking({ service: null, date: null, time: null, client: null });
    setStep(1);
    setIsConfirmed(false);
    setBookingRef("");
    setSubmitError(null);
    clientFormRef.current = null;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isConfirmed) {
    return (
      <div className="py-12">
        <Confirmation
          booking={booking}
          bookingRef={bookingRef}
          onNewBooking={handleNewBooking}
        />
      </div>
    );
  }

  return (
    <div className="py-8">
      <StepIndicator currentStep={step} />

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          variants={stepVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease }}
          className="min-h-[400px]"
        >
          {step === 1 && (
            <ServiceSelection
              onSelect={handleServiceSelect}
              selected={booking.service}
              initialCategory={initialCategory}
            />
          )}
          {step === 2 && (
            <DatePicker selected={booking.date} onSelect={handleDateSelect} />
          )}
          {step === 3 && booking.date && booking.service && (
            <TimeSlots
              date={booking.date}
              serviceId={booking.service.id}
              selected={booking.time}
              onSelect={handleTimeSelect}
            />
          )}
          {step === 4 && (
            <ClientForm
              onSubmit={handleClientSubmit}
              initial={clientFormRef.current}
            />
          )}
          {step === 5 && (
            <>
              <BookingSummary
                booking={booking}
                onConfirm={handleConfirm}
                isSubmitting={isSubmitting}
              />
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-lg mx-auto mt-4 p-4 rounded-xl bg-terracotta/8 border border-terracotta/15 text-center"
                >
                  <p className="text-terracotta text-sm">{submitError}</p>
                  <p className="text-taupe text-xs mt-1">
                    Veuillez réessayer ou choisir un autre créneau.
                  </p>
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {step < 5 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-between max-w-3xl mx-auto mt-14 pt-8 border-t border-sand-light/30"
        >
          <button
            onClick={handleBack}
            disabled={step === 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[12px] uppercase tracking-[0.15em] transition-all duration-500 ${
              step === 1
                ? "text-sand/40 cursor-not-allowed"
                : "text-charcoal hover:bg-sand-light/40"
            }`}
          >
            <ArrowLeft size={14} />
            Retour
          </button>

          <button
            onClick={handleNext}
            disabled={step !== 4 && !canProceed()}
            className={`flex items-center gap-2 px-8 py-3.5 rounded-xl text-[12px] uppercase tracking-[0.2em] font-medium transition-all duration-500 ${
              step === 4 || canProceed()
                ? "bg-charcoal text-cream-light hover:bg-brown-dark hover:shadow-lg hover:-translate-y-px"
                : "bg-sand/20 text-sand/50 cursor-not-allowed"
            }`}
          >
            {step === 4 ? "Vérifier" : "Continuer"}
            <ArrowRight size={14} />
          </button>
        </motion.div>
      )}
    </div>
  );
}
