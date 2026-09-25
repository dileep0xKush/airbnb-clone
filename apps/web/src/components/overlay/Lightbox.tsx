'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconButton } from '@/components/common';
import { useGalleryStore } from '@/stores/gallery';
import { useKeyboardNavigation, useFocusTrap } from '@/hooks';
import type { Image as ImageType } from '@/types';

interface LightboxProps {
  images: ImageType[];
}

export function Lightbox({ images }: LightboxProps) {
  const {
    lightboxOpen,
    closeLightbox,
    currentImageIndex,
    nextImage,
    prevImage,
    totalImages,
  } = useGalleryStore();
  const focusTrapRef = useFocusTrap(lightboxOpen);

  useKeyboardNavigation({
    onEscape: closeLightbox,
    onArrowLeft: prevImage,
    onArrowRight: nextImage,
  });

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  if (!lightboxOpen || images.length === 0) return null;

  const currentImage = images[currentImageIndex]!;

  return (
    <AnimatePresence>
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          ref={focusTrapRef}
        >
          {/* Close Button */}
          <IconButton
            variant="dark"
            size="lg"
            className="absolute top-6 right-6"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </IconButton>

          {/* Main Image */}
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full h-full max-w-6xl"
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Navigation Arrows */}
          {currentImageIndex > 0 && (
            <IconButton
              variant="dark"
              size="lg"
              className="absolute left-6"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </IconButton>
          )}

          {currentImageIndex < totalImages - 1 && (
            <IconButton
              variant="dark"
              size="lg"
              className="absolute right-6"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </IconButton>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
            {currentImageIndex + 1} / {totalImages}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
