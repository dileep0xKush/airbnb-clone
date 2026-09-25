'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Rating } from '@/components/common';

interface BookingCardProps {
  id: string;
  price: number;
  rating: number;
  reviews: number;
  cleaningFee?: number;
  serviceFee?: number;
  taxFee?: number;
}

export function BookingCard({
  id,
  price,
  rating,
  reviews,
  cleaningFee = 0,
  serviceFee = 0,
  taxFee = 0,
}: BookingCardProps) {
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [checkIn, setCheckIn] = useState(new Date().toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState('');
  const [guestsCount, setGuestsCount] = useState(1);
  const [isReserved, setIsReserved] = useState(false);

  // Compute duration dynamically based on check-in and check-out selections
  let nights = 1;
  if (checkIn && checkOut) {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 0) {
      nights = diffDays;
    }
  }

  const subtotal = price * nights;
  const total = subtotal + cleaningFee + serviceFee + taxFee;

  const handleReserve = () => {
    if (!checkOut) {
      alert('Please select a Check-out date before reserving.');
      return;
    }
    
    const reservation = {
      id: Math.random().toString(36).substr(2, 9),
      listingId: id,
      checkIn,
      checkOut,
      guestsCount,
      nights,
      totalPrice: total,
      reservedAt: new Date().toISOString(),
    };

    try {
      const stored = localStorage.getItem('airbnb_reservations');
      const reservations = stored ? JSON.parse(stored) : [];
      reservations.push(reservation);
      localStorage.setItem('airbnb_reservations', JSON.stringify(reservations));
      setIsReserved(true);
      setTimeout(() => setIsReserved(false), 5000); // Reset confirm text after 5s
    } catch (err) {
      console.error('Failed to save reservation in localStorage:', err);
    }
  };

  return (
    <div className="sticky top-24 bg-white border border-gray-300 rounded-2xl shadow-lg p-8">
      {/* Price Header */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          <span className="text-lg text-gray-600">night</span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
        <Rating rating={rating} size="sm" showText={false} />
        <button className="text-sm font-semibold text-gray-900 hover:underline">
          {rating}
        </button>
        <span className="text-sm text-gray-600">·</span>
        <button className="text-sm font-semibold text-gray-900 hover:underline">
          {reviews} reviews
        </button>
      </div>

      {/* Date & Guest Selection */}
      <div className="space-y-3 mb-6">
        <div className="border border-gray-300 rounded-lg p-4">
          <p className="text-xs font-semibold text-gray-600 uppercase mb-2">
            Check-in
          </p>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full text-base text-gray-900 focus:outline-none"
          />
        </div>

        <div className="border border-gray-300 rounded-lg p-4">
          <p className="text-xs font-semibold text-gray-600 uppercase mb-2">
            Check-out
          </p>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full text-base text-gray-900 focus:outline-none"
          />
        </div>

        <div className="border border-gray-300 rounded-lg p-4">
          <p className="text-xs font-semibold text-gray-600 uppercase mb-2">
            Guests
          </p>
          <select 
            value={guestsCount}
            onChange={(e) => setGuestsCount(parseInt(e.target.value))}
            className="w-full text-base text-gray-900 focus:outline-none bg-white"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n} guest{n > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Reserve Button */}
      <button 
        onClick={handleReserve}
        className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 rounded-lg mb-4 transition-colors text-lg cursor-pointer"
      >
        {isReserved ? '✓ Reserved!' : 'Reserve'}
      </button>

      {isReserved && (
        <p className="text-center text-sm font-semibold text-emerald-600 mb-4 animate-pulse">
          ✓ Confirmed! Saved to browser Local Storage.
        </p>
      )}

      <p className="text-center text-sm text-gray-600 mb-6">
        You won't be charged yet
      </p>

      {/* Price Breakdown */}
      <button
        onClick={() => setShowBreakdown(!showBreakdown)}
        className="w-full flex items-center justify-between text-sm font-semibold text-gray-900 py-4 border-t border-gray-200"
      >
        <span>Show price details</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            showBreakdown ? 'rotate-180' : ''
          }`}
        />
      </button>

      {showBreakdown && (
        <div className="space-y-2 py-4 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>${price} × {nights} night{nights > 1 ? 's' : ''}</span>
            <span>${subtotal}</span>
          </div>
          {cleaningFee > 0 && (
            <div className="flex justify-between">
              <span>Cleaning fee</span>
              <span>${cleaningFee}</span>
            </div>
          )}
          {serviceFee > 0 && (
            <div className="flex justify-between">
              <span>Service fee</span>
              <span>${serviceFee}</span>
            </div>
          )}
          {taxFee > 0 && (
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>${taxFee}</span>
            </div>
          )}
          <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-gray-900 text-base">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      )}

      <button className="mt-6 text-sm font-semibold text-gray-700 hover:text-gray-900 w-full text-center py-2 underline cursor-pointer">
        Report this listing
      </button>
    </div>
  );
}
