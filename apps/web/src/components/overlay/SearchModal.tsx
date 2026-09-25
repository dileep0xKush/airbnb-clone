'use client';

import { useState } from 'react';
import { X, Plus, Minus, Search } from 'lucide-react';
import { Button } from '@/components/common';
import { cn } from '@/lib/cn';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (filters: { location: string; guests: number }) => void;
}

export function SearchModal({ isOpen, onClose, onSearch }: SearchModalProps) {
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState(1);

  if (!isOpen) return null;

  const handleSearchSubmit = () => {
    onSearch({ location, guests });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center md:items-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-b-3xl md:rounded-3xl shadow-2xl p-6 flex flex-col gap-6 z-10 border border-gray-100 animate-in fade-in-50 slide-in-from-top-12 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-900">Search filters</h3>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Section 1: Location */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Where to?</label>
          <input
            type="text"
            placeholder="Search destinations (e.g. Malibu, Aspen)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-sm placeholder-gray-400"
          />
        </div>

        {/* Section 2: Dates Mock */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Check in</label>
            <input
              type="date"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Check out</label>
            <input
              type="date"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-700"
            />
          </div>
        </div>

        {/* Section 3: Guests Counter */}
        <div className="flex items-center justify-between py-2">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-700">Guests</span>
            <span className="text-xs text-gray-500">How many guests are coming?</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setGuests(Math.max(1, guests - 1))}
              disabled={guests <= 1}
              className={cn(
                "p-1.5 rounded-full border border-gray-300 flex items-center justify-center transition-colors cursor-pointer",
                guests <= 1 ? "opacity-50 cursor-not-allowed" : "hover:border-black"
              )}
            >
              <Minus className="w-4 h-4 text-gray-600" />
            </button>
            <span className="text-sm font-semibold text-gray-900 w-4 text-center">{guests}</span>
            <button
              onClick={() => setGuests(guests + 1)}
              className="p-1.5 rounded-full border border-gray-300 hover:border-black flex items-center justify-center transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <button
            onClick={() => {
              setLocation('');
              setGuests(1);
            }}
            className="text-sm font-semibold text-gray-600 hover:underline cursor-pointer"
          >
            Clear all
          </button>
          <Button
            onClick={handleSearchSubmit}
            className="bg-rose-500 hover:bg-rose-600 text-white flex items-center gap-2 px-6 py-2.5"
          >
            <Search className="w-4 h-4" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
