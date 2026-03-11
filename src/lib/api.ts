const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

export interface ApiService {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  priceFrom: boolean;
  icon: string | null;
  active: boolean;
  categoryId: string;
}

export interface ApiCategory {
  id: string;
  name: string;
  description: string | null;
  icon: string | null;
  sortOrder: number;
  services: ApiService[];
}

export interface ApiSlot {
  time: string;
  available: boolean;
}

export interface ApiSlotsResponse {
  date: string;
  serviceId: string;
  slots: ApiSlot[];
  availableCount: number;
  totalCount: number;
}

export interface BookingRequest {
  serviceId: string;
  date: string;
  time: string;
  client: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    notes?: string;
  };
}

export interface BookingResponse {
  reference: string;
  date: string;
  time: string;
  status: string;
  service: {
    name: string;
    duration: number;
    price: number;
    category: string;
  };
  client: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string | null;
  };
}

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  const data = await res.json();

  if (!data.success) {
    throw new Error(data.error?.message || "Erreur de connexion au serveur");
  }

  return data.data as T;
}

export async function fetchServices(): Promise<ApiCategory[]> {
  return apiFetch<ApiCategory[]>("/services");
}

export async function fetchSlots(serviceId: string, date: string): Promise<ApiSlotsResponse> {
  return apiFetch<ApiSlotsResponse>(`/slots?serviceId=${serviceId}&date=${date}`);
}

export async function createBooking(booking: BookingRequest): Promise<BookingResponse> {
  return apiFetch<BookingResponse>("/bookings", {
    method: "POST",
    body: JSON.stringify(booking),
  });
}

export async function cancelBooking(reference: string): Promise<void> {
  await apiFetch(`/bookings/${reference}/cancel`, { method: "PATCH" });
}
