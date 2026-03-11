// Types shared across the booking flow.
// All data now comes from the backend API — no mock data here.

export interface Service {
  id: string;
  category: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  priceFrom: boolean;
  icon: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface BookingState {
  service: Service | null;
  date: Date | null;
  time: string | null;
  client: ClientInfo | null;
}

export interface ClientInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  notes: string;
}

export function formatDateFr(date: Date): string {
  const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  const months = [
    "janvier", "février", "mars", "avril", "mai", "juin",
    "juillet", "août", "septembre", "octobre", "novembre", "décembre",
  ];
  return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

export function formatPrice(price: number, priceFrom?: boolean): string {
  if (priceFrom) return `à partir de ${price} DH`;
  return `${price} DH`;
}
