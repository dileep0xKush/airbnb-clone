'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useGalleryStore } from '@/stores/gallery';
import { cn } from '@/lib/cn';
import type { Image as ImageType } from '@/types';

interface HeroGalleryProps {
  images: ImageType[];
}

export function HeroGallery({ images }: HeroGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { openPhotoTour, setTotalImages } = useGalleryStore();

  const handleOpenPhotoTour = () => {
    setTotalImages(images.length);
    openPhotoTour();
  };

  if (images.length === 0) return null;

  const mainImage = images[0]!;
  const secondaryImages = images.slice(1, 5);

  return (
    <div className="relative w-full mb-12">
      <div className="relative bg-gray-100 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-4 gap-3 h-[550px]">
          {/* Main Image */}
          <div
            className="col-span-2 row-span-2 relative rounded-l-2xl overflow-hidden cursor-pointer group"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={handleOpenPhotoTour}
          >
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              fill
              className={`object-cover transition-transform duration-300 ${
                hoveredIndex === 0 ? 'scale-105' : 'scale-100'
              }`}
              priority
            />
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                hoveredIndex === 0 ? 'opacity-15' : 'opacity-0'
              }`}
            />
          </div>

          {/* Secondary Images */}
          {secondaryImages.map((img, idx) => (
            <div
              key={img.id}
              className={cn(
                'relative overflow-hidden cursor-pointer group',
                idx === 3 && 'rounded-r-2xl'
              )}
              onMouseEnter={() => setHoveredIndex(idx + 1)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={handleOpenPhotoTour}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={`object-cover transition-transform duration-300 ${
                  hoveredIndex === idx + 1 ? 'scale-105' : 'scale-100'
                }`}
              />
              <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                  hoveredIndex === idx + 1 ? 'opacity-15' : 'opacity-0'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Show All Photos Button */}
      <button
        onClick={handleOpenPhotoTour}
        className="absolute bottom-4 right-4 flex items-center gap-2 px-5 py-3 bg-white rounded-lg font-semibold text-sm text-gray-900 shadow-lg hover:shadow-xl transition-shadow"
      >
        <ChevronRight className="w-4 h-4" />
        Show all photos
      </button>
    </div>
  );
}
