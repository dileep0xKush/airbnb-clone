'use client';

import { useState } from 'react';
import { ChevronRight, Wifi, Wind, Flame, Waves, UtensilsCrossed, Dumbbell, Car, Monitor, ArrowUp, Droplets } from 'lucide-react';
import { Divider } from '@/components/common';
import type { Amenity } from '@/types';

interface AmenitiesProps {
  amenities: Amenity[];
}

const iconMap: Record<string, React.ElementType> = {
  Wifi,
  Wind,
  Flame,
  Waves,
  UtensilsCrossed,
  Dumbbell,
  Car,
  Monitor,
  ArrowUp,
  Droplets,
};

export function Amenities({ amenities }: AmenitiesProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleAmenities = showAll ? amenities : amenities.slice(0, 6);

  return (
    <>
      <div className="py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Amenities</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleAmenities.map((amenity) => {
            const IconComponent = iconMap[amenity.icon] || Wifi;
            return (
              <div key={amenity.id} className="flex items-center gap-4">
                <IconComponent className="w-6 h-6 text-gray-900 flex-shrink-0" />
                <span className="text-base text-gray-900">{amenity.name}</span>
              </div>
            );
          })}
        </div>
        {!showAll && amenities.length > 6 && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-8 px-6 py-3 border border-gray-300 rounded-lg font-semibold text-sm text-gray-900 hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            Show all {amenities.length} amenities
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
      <Divider className="my-8" />
    </>
  );
}
