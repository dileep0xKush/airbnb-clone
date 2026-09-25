'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Rating, Divider } from '@/components/common';
import type { Review } from '@/types';

interface ReviewsProps {
  reviews: Review[];
  overallRating: number;
}

export function Reviews({ reviews, overallRating }: ReviewsProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews.slice(0, 6);

  return (
    <>
      <div className="py-8">
        <div className="flex items-center gap-3 mb-8">
          <Rating rating={overallRating} size="md" showText={false} />
          <span className="text-2xl font-bold text-gray-900">
            {overallRating}
          </span>
          <span className="text-lg text-gray-600">·</span>
          <button className="text-lg font-semibold text-gray-900 hover:underline">
            {reviews.length} reviews
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {visibleReviews.map((review) => (
            <div key={review.id} className="pb-8 border-b border-gray-200 last:border-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {review.author}
                  </p>
                  <p className="text-xs text-gray-600">{review.date}</p>
                </div>
              </div>
              <Rating rating={review.rating} size="sm" showText={false} />
              <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {!showAll && reviews.length > 6 && (
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-sm text-gray-900 hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            Show all {reviews.length} reviews
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
      <Divider className="my-8" />
    </>
  );
}
