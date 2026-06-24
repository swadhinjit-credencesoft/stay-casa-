import { create } from "zustand";

export interface UiState {
  isMobileMenuOpen: boolean;
  activeRoomFilter: string;
  setMobileMenuOpen: (isOpen: boolean) => void;
  setActiveRoomFilter: (filter: string) => void;
}

export const useUiStore = create<UiState>((set) => ({
  isMobileMenuOpen: false,
  activeRoomFilter: "All",
  setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
  setActiveRoomFilter: (activeRoomFilter) => set({ activeRoomFilter }),
}));
