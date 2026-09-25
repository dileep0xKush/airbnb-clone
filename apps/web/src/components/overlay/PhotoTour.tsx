'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconButton } from '@/components/common';
import { useGalleryStore } from '@/stores/gallery';
import { useFocusTrap } from '@/hooks';
import type { Image as ImageType } from '@/types';

interface PhotoTourProps {
  images: ImageType[];
}

export function PhotoTour({ images }: PhotoTourProps) {
  const { photoTourOpen, closePhotoTour, openLightbox } = useGalleryStore();
  const focusTrapRef = useFocusTrap(photoTourOpen);

  useEffect(() => {
    if (photoTourOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [photoTourOpen]);

  if (!photoTourOpen) return null;

  return (
    <AnimatePresence>
      {photoTourOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white"
          ref={focusTrapRef}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Photos</h1>
            <IconButton
              variant="ghost"
              onClick={closePhotoTour}
              aria-label="Close photo tour"
            >
              <X className="w-6 h-6" />
            </IconButton>
          </div>

          {/* Image Grid */}
          <div className="overflow-y-auto h-[calc(100vh-73px)]">
            <div className="max-w-[1400px] mx-auto px-6 py-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, idx) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group bg-gray-100"
                    onClick={() => openLightbox(idx)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 flex items-center justify-center group-hover:flex">
                      <ChevronRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
