import { create } from "zustand";
import { RoomSuite } from "@/lib/mockData";

export interface BookingState {
  checkIn: Date | null;
  checkOut: Date | null;
  guests: {
    adults: number;
    children: number;
  };
  selectedRoom: RoomSuite | null;
  promoCode: string;
  isConfirmed: boolean;
  setDates: (checkIn: Date | null, checkOut: Date | null) => void;
  setGuests: (adults: number, children: number) => void;
  selectRoom: (room: RoomSuite | null) => void;
  setPromoCode: (code: string) => void;
  confirmBooking: () => void;
  resetBooking: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  checkIn: null,
  checkOut: null,
  guests: {
    adults: 2,
    children: 0,
  },
  selectedRoom: null,
  promoCode: "",
  isConfirmed: false,
  setDates: (checkIn, checkOut) => set({ checkIn, checkOut }),
  setGuests: (adults, children) => set({ guests: { adults, children } }),
  selectRoom: (room) => set({ selectedRoom: room }),
  setPromoCode: (promoCode) => set({ promoCode }),
  confirmBooking: () => set({ isConfirmed: true }),
  resetBooking: () =>
    set({
      checkIn: null,
      checkOut: null,
      guests: { adults: 2, children: 0 },
      selectedRoom: null,
      promoCode: "",
      isConfirmed: false,
    }),
}));
