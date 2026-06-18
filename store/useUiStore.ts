import { create } from "zustand";

export interface UiState {
  isMobileMenuOpen: boolean;
  isQuickBookingOpen: boolean;
  activeRoomFilter: string;
  setMobileMenuOpen: (isOpen: boolean) => void;
  setQuickBookingOpen: (isOpen: boolean) => void;
  setActiveRoomFilter: (filter: string) => void;
}

export const useUiStore = create<UiState>((set) => ({
  isMobileMenuOpen: false,
  isQuickBookingOpen: false,
  activeRoomFilter: "All",
  setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
  setQuickBookingOpen: (isOpen) => set({ isQuickBookingOpen: isOpen }),
  setActiveRoomFilter: (activeRoomFilter) => set({ activeRoomFilter }),
}));
