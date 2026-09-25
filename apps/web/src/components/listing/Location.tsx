'use client';

import { MapPin } from 'lucide-react';
import { Divider } from '@/components/common';

interface LocationProps {
  location: string;
  latitude: number;
  longitude: number;
}

export function Location({ location, latitude, longitude }: LocationProps) {
  return (
    <>
      <div className="py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Where you'll be</h2>

        {/* Map Placeholder */}
        <div className="relative bg-gray-200 rounded-2xl overflow-hidden mb-8 h-96 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-lg text-gray-600 font-medium">{location}</p>
            <p className="text-sm text-gray-500 mt-2">
              {latitude.toFixed(4)}, {longitude.toFixed(4)}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {location}
          </h3>
          <p className="text-base text-gray-700 leading-relaxed mb-6 max-w-2xl">
            Located in the heart of the city, this vibrant neighborhood offers
            easy access to public transportation, local attractions, restaurants,
            and shops. It's the perfect base for exploring everything the city
            has to offer.
          </p>
        </div>
      </div>
      <Divider className="my-8" />
    </>
  );
}
