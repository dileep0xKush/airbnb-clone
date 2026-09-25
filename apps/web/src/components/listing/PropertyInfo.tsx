'use client';

import { Users, Bed, Bath } from 'lucide-react';


interface PropertyInfoProps {
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}

export function PropertyInfo({
  guests,
  bedrooms,
  beds,
  bathrooms,
}: PropertyInfoProps) {
  return (
    <>
      <div className="flex items-center gap-8 py-8 border-b border-gray-200">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-5 h-5 text-gray-900" />
            <span className="text-sm text-gray-600 font-medium">Guests</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">{guests}</p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <Bed className="w-5 h-5 text-gray-900" />
            <span className="text-sm text-gray-600 font-medium">Bedrooms</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">{bedrooms}</p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <Bed className="w-5 h-5 text-gray-900" />
            <span className="text-sm text-gray-600 font-medium">Beds</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">{beds}</p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <Bath className="w-5 h-5 text-gray-900" />
            <span className="text-sm text-gray-600 font-medium">Bathrooms</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">{bathrooms}</p>
        </div>
      </div>
    </>
  );
}
