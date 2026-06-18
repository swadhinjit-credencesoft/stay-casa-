"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, Hotel, ChevronRight } from "lucide-react";
import { useBookingStore } from "@/store/useBookingStore";
import { useUiStore } from "@/store/useUiStore";
import { roomsSuites } from "@/lib/mockData";
import { cn, formatDate } from "@/lib/utils";

export default function QuickBookingBar() {
  const router = useRouter();
  
  // Zustand Store
  const { checkIn, checkOut, guests, selectedRoom, setDates, setGuests, selectRoom } = useBookingStore();
  const { isQuickBookingOpen, setQuickBookingOpen } = useUiStore();

  // Local helper states for editing dates
  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value ? new Date(e.target.value) : null;
    setDates(date, checkOut);
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value ? new Date(e.target.value) : null;
    setDates(checkIn, date);
  };

  const handleGuestsChange = (adults: number, children: number) => {
    setGuests(adults, children);
  };

  const handleSearch = () => {
    setQuickBookingOpen(false);
    router.push("/booking");
  };

  // Set today's date and tomorrow's date as default on component mount if not set
  React.useEffect(() => {
    if (!checkIn) {
      const today = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 2);
      setDates(today, tomorrow);
    }
  }, [checkIn, setDates]);

  // Format dates for input field value (YYYY-MM-DD)
  const formatDateForInput = (date: Date | null) => {
    if (!date) return "";
    return date.toISOString().split("T")[0];
  };

  return (
    <AnimatePresence>
      {isQuickBookingOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => setQuickBookingOpen(false)}
            className="fixed inset-0 bg-neutral-950 z-50"
          />

          {/* Slider Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 w-full bg-white border-t border-neutral-200 z-50 p-6 lg:p-8 shadow-depth-xl max-w-[1920px] mx-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setQuickBookingOpen(false)}
              className="absolute right-6 top-6 p-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition-colors"
              aria-label="Close Booking Drawer"
            >
              <X className="w-5 h-5 text-neutral-800" />
            </button>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto mt-2">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <h3 className="text-sm font-semibold tracking-[0.3em] text-red-500 uppercase">
                    Select Your Dates
                  </h3>
                  <p className="text-2xl font-light text-neutral-900 tracking-wide mt-1">
                    Plan Your Perfect Stay
                  </p>
                </div>

                {/* Form fields */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1">
                  
                  {/* Check In */}
                  <div className="flex flex-col space-y-1.5 border border-neutral-200 rounded-sm p-3 focus-within:border-red-500 transition-colors">
                    <label className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-red-500" />
                      <span>Check In</span>
                    </label>
                    <input
                      type="date"
                      value={formatDateForInput(checkIn)}
                      onChange={handleCheckInChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-transparent text-sm text-neutral-800 font-medium tracking-wider outline-none border-none mt-1 cursor-pointer"
                    />
                  </div>

                  {/* Check Out */}
                  <div className="flex flex-col space-y-1.5 border border-neutral-200 rounded-sm p-3 focus-within:border-red-500 transition-colors">
                    <label className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-red-500" />
                      <span>Check Out</span>
                    </label>
                    <input
                      type="date"
                      value={formatDateForInput(checkOut)}
                      onChange={handleCheckOutChange}
                      min={checkIn ? formatDateForInput(checkIn) : new Date().toISOString().split("T")[0]}
                      className="w-full bg-transparent text-sm text-neutral-800 font-medium tracking-wider outline-none border-none mt-1 cursor-pointer"
                    />
                  </div>

                  {/* Room Selection */}
                  <div className="flex flex-col space-y-1.5 border border-neutral-200 rounded-sm p-3 focus-within:border-red-500 transition-colors">
                    <label className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase flex items-center space-x-1.5">
                      <Hotel className="w-3.5 h-3.5 text-red-500" />
                      <span>Suite Choice</span>
                    </label>
                    <select
                      value={selectedRoom?.id || ""}
                      onChange={(e) => {
                        const room = roomsSuites.find((r) => r.id === e.target.value) || null;
                        selectRoom(room);
                      }}
                      className="w-full bg-transparent text-sm text-neutral-800 font-medium tracking-wide outline-none border-none mt-1 cursor-pointer"
                    >
                      <option value="">Select a Suite (Optional)</option>
                      {roomsSuites.map((room) => (
                        <option key={room.id} value={room.id}>
                          {room.name} (${room.price}/n)
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Guests Selection */}
                  <div className="flex flex-col space-y-1.5 border border-neutral-200 rounded-sm p-3 focus-within:border-red-500 transition-colors">
                    <label className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase flex items-center space-x-1.5">
                      <Users className="w-3.5 h-3.5 text-red-500" />
                      <span>Occupants</span>
                    </label>
                    <div className="flex items-center justify-between mt-1.5">
                      <div className="flex items-center space-x-3 text-sm font-medium text-neutral-800">
                        <span>Adults:</span>
                        <div className="flex items-center space-x-1.5">
                          <button
                            type="button"
                            disabled={guests.adults <= 1}
                            onClick={() => handleGuestsChange(guests.adults - 1, guests.children)}
                            className="w-6 h-6 rounded-full border border-neutral-300 flex items-center justify-center text-xs hover:bg-neutral-100 disabled:opacity-40"
                          >
                            -
                          </button>
                          <span className="w-4 text-center">{guests.adults}</span>
                          <button
                            type="button"
                            disabled={guests.adults >= 6}
                            onClick={() => handleGuestsChange(guests.adults + 1, guests.children)}
                            className="w-6 h-6 rounded-full border border-neutral-300 flex items-center justify-center text-xs hover:bg-neutral-100 disabled:opacity-40"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 text-sm font-medium text-neutral-800">
                        <span>Kids:</span>
                        <div className="flex items-center space-x-1.5">
                          <button
                            type="button"
                            disabled={guests.children <= 0}
                            onClick={() => handleGuestsChange(guests.adults, guests.children - 1)}
                            className="w-6 h-6 rounded-full border border-neutral-300 flex items-center justify-center text-xs hover:bg-neutral-100 disabled:opacity-40"
                          >
                            -
                          </button>
                          <span className="w-4 text-center">{guests.children}</span>
                          <button
                            type="button"
                            disabled={guests.children >= 4}
                            onClick={() => handleGuestsChange(guests.adults, guests.children + 1)}
                            className="w-6 h-6 rounded-full border border-neutral-300 flex items-center justify-center text-xs hover:bg-neutral-100 disabled:opacity-40"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Submit Action */}
                <button
                  onClick={handleSearch}
                  className="bg-neutral-900 text-white hover:bg-red-600 px-8 py-5.5 rounded-sm flex items-center justify-center space-x-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 shrink-0 w-full lg:w-auto mt-4 lg:mt-0"
                >
                  <span>Check Rates</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
