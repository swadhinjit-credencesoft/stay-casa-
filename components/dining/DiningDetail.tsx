import { motion, AnimatePresence } from "framer-motion";
import { Clock, ChefHat, User } from "lucide-react";
import type { Restaurant } from "@/lib/mockData";

interface DiningDetailProps {
  activeRestaurant: Restaurant;
}

export default function DiningDetail({
  activeRestaurant,
}: DiningDetailProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={activeRestaurant.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="py-16 px-6 bg-[#FCFCFF]"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl overflow-hidden h-80">
            <img
              src={activeRestaurant.image}
              alt={activeRestaurant.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <span className="text-[9px] font-bold tracking-widest text-red-500 uppercase">
                {activeRestaurant.cuisine}
              </span>
              <h2 className="text-3xl font-light text-neutral-900 mt-1">
                {activeRestaurant.name}
              </h2>
              <p className="text-neutral-500 font-light mt-2 leading-relaxed">
                {activeRestaurant.description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-neutral-500">
                <Clock className="w-4 h-4 text-red-400 shrink-0" />
                <span>{activeRestaurant.hours}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-500">
                <ChefHat className="w-4 h-4 text-red-400 shrink-0" />
                <span>Chef {activeRestaurant.chef}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-500">
                <User className="w-4 h-4 text-red-400 shrink-0" />
                <span>Dress: {activeRestaurant.dressCode}</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-4">
                Signature Dishes
              </h3>
              <div className="space-y-3">
                {activeRestaurant.menuHighlights.map((item) => (
                  <div
                    key={item.name}
                    className="border border-neutral-100 rounded-xl p-4 bg-white hover:shadow-soft-premium transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <p className="font-medium text-neutral-900 text-sm">
                        {item.name}
                      </p>
                      {item.price && (
                        <span className="text-sm font-semibold text-red-600 ml-2 shrink-0">
                          {item.price}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-400 mt-1 font-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
