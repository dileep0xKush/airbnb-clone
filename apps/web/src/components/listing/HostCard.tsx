'use client';

import Image from 'next/image';
import { Badge, Divider } from '@/components/common';
import type { Host } from '@/types';

interface HostCardProps {
  host: Host;
  description: string;
}

export function HostCard({ host, description }: HostCardProps) {
  return (
    <>
      <div className="py-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={host.avatar}
                alt={host.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Hosted by {host.name}
              </h3>
              <p className="text-sm text-gray-600">
                {host.yearsHosting} years hosting
              </p>
            </div>
          </div>
          {host.isSuperhost && (
            <Badge variant="primary">Superhost</Badge>
          )}
        </div>

        <p className="text-base text-gray-700 mb-8 leading-relaxed max-w-2xl">
          {description}
        </p>

        <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-sm text-gray-900 hover:bg-gray-50 transition-colors">
          Contact Host
        </button>
      </div>
      <Divider className="my-8" />
    </>
  );
}
