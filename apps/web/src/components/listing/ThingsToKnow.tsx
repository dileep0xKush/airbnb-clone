'use client';

import { CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { Divider } from '@/components/common';

interface ThingsToKnowProps {
  houseRules: string[];
  safetyFeatures: string[];
  cancellationPolicy: string;
}

export function ThingsToKnow({
  houseRules,
  safetyFeatures,
  cancellationPolicy,
}: ThingsToKnowProps) {
  return (
    <>
      <div className="py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Things to know
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* House Rules */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-gray-900 flex-shrink-0" />
              <h3 className="text-lg font-semibold text-gray-900">House rules</h3>
            </div>
            <ul className="space-y-3">
              {houseRules.map((rule, idx) => (
                <li key={idx} className="text-sm text-gray-700">
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          {/* Safety Features */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-gray-900 flex-shrink-0" />
              <h3 className="text-lg font-semibold text-gray-900">
                Safety & property
              </h3>
            </div>
            <ul className="space-y-3">
              {safetyFeatures.map((feature, idx) => (
                <li key={idx} className="text-sm text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Cancellation Policy */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-gray-900 flex-shrink-0" />
              <h3 className="text-lg font-semibold text-gray-900">
                Cancellation policy
              </h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{cancellationPolicy}</p>
          </div>
        </div>
      </div>
      <Divider className="my-8" />
    </>
  );
}
