'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/cn';
import type { Listing } from '@/types';

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(listing.isGuestFavorite || false);

  const images = listing.images && listing.images.length > 0
    ? listing.images
    : [{ id: 'fallback', src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop', alt: 'Fallback image' }];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  // Generate realistic-looking dates based on listing ID for design realism
  const getMockDates = (id: string) => {
    const dates: Record<string, string> = {
      '1': '10–15 Aug',
      '2': '1–6 Sep',
      '3': '12–17 Oct',
      '4': '22–27 Nov',
      '5': '5–10 Dec',
      '6': '14–19 Jan',
      '7': '3–8 Feb',
      '8': '20–25 Mar',
      '9': '11–16 Apr',
    };
    return dates[id] || 'Available next month';
  };

  return (
    <Link href={`/listing/${listing.id}`} className="group block cursor-pointer">
      <div className="flex flex-col gap-2 w-full">
        {/* Image Container with Carousel controls */}
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
          {/* Carousel Slider */}
          <div className="relative w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[activeImageIndex]?.src || ''}
              alt={images[activeImageIndex]?.alt || listing.title}
              className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>

          {/* Wishlist Heart Icon */}
          <button
            onClick={handleToggleFavorite}
            className="absolute top-3 right-3 p-1 rounded-full bg-transparent hover:scale-110 active:scale-95 transition cursor-pointer z-10"
          >
            <Heart
              className={cn(
                'w-6 h-6 stroke-white stroke-[1.8px] transition-all',
                isFavorite ? 'fill-rose-500 stroke-rose-500' : 'fill-black/30'
              )}
            />
          </button>

          {/* Carousel Left/Right navigation buttons (Visible on group hover) */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/90 hover:bg-white border border-gray-200 text-gray-800 shadow-md group-hover:opacity-100 opacity-0 transition-opacity duration-200 cursor-pointer z-10 hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/90 hover:bg-white border border-gray-200 text-gray-800 shadow-md group-hover:opacity-100 opacity-0 transition-opacity duration-200 cursor-pointer z-10 hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Carousel Pagination Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5 z-10">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'w-1.5 h-1.5 rounded-full transition-all duration-200',
                    idx === activeImageIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/50'
                  )}
                />
              ))}
            </div>
          )}
        </div>

        {/* Listing Details */}
        <div className="flex flex-col text-sm pt-1">
          {/* Row 1: Location & Rating */}
          <div className="flex flex-row items-center justify-between">
            <span className="font-semibold text-gray-900 truncate pr-2">{listing.location}</span>
            <span className="flex items-center gap-1 font-medium text-gray-900 flex-shrink-0">
              <Star className="w-3.5 h-3.5 fill-black stroke-black" />
              <span>{listing.rating.toFixed(2)}</span>
            </span>
          </div>

          {/* Row 2: Host Info */}
          <div className="text-gray-500 truncate mt-0.5">
            Stay with {listing.host.name} • {listing.host.isSuperhost ? 'Superhost' : 'Host'}
          </div>

          {/* Row 3: Available dates */}
          <div className="text-gray-500 mt-0.5">
            {getMockDates(listing.id)}
          </div>

          {/* Row 4: Price */}
          <div className="flex items-center gap-1 mt-1 text-gray-900">
            <span className="font-bold">${listing.price}</span>
            <span className="font-normal text-gray-500">night</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
