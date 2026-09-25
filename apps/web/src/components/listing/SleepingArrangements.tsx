'use client';

import { Bed } from 'lucide-react';
import { Divider } from '@/components/common';
import type { Bedroom } from '@/types';

interface SleepingArrangementsProps {
  bedrooms: Bedroom[];
}

export function SleepingArrangements({ bedrooms }: SleepingArrangementsProps) {
  return (
    <>
      <div className="py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Where you'll sleep</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bedrooms.map((bedroom) => (
            <div
              key={bedroom.id}
              className="border border-gray-300 rounded-2xl p-6 hover:border-gray-400 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {bedroom.name}
              </h3>
              <div className="space-y-3">
                {bedroom.beds.map((bed) => (
                  <div key={bed.id} className="flex items-center gap-3">
                    <Bed className="w-5 h-5 text-gray-700" />
                    <span className="text-base text-gray-700">
                      {bed.count}x {bed.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Divider className="my-8" />
    </>
  );
}
