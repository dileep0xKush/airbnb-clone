import { create } from 'zustand';

interface GalleryStore {
  photoTourOpen: boolean;
  lightboxOpen: boolean;
  currentImageIndex: number;
  openPhotoTour: () => void;
  closePhotoTour: () => void;
  openLightbox: (index: number) => void;
  closeLightbox: () => void;
  nextImage: () => void;
  prevImage: () => void;
  setCurrentImage: (index: number) => void;
  totalImages: number;
  setTotalImages: (total: number) => void;
}

export const useGalleryStore = create<GalleryStore>((set) => ({
  photoTourOpen: false,
  lightboxOpen: false,
  currentImageIndex: 0,
  totalImages: 0,
  openPhotoTour: () => set({ photoTourOpen: true }),
  closePhotoTour: () => set({ photoTourOpen: false }),
  openLightbox: (index: number) =>
    set({ lightboxOpen: true, currentImageIndex: index }),
  closeLightbox: () => set({ lightboxOpen: false }),
  nextImage: () =>
    set((state) => ({
      currentImageIndex:
        (state.currentImageIndex + 1) % state.totalImages,
    })),
  prevImage: () =>
    set((state) => ({
      currentImageIndex:
        (state.currentImageIndex - 1 + state.totalImages) %
        state.totalImages,
    })),
  setCurrentImage: (index: number) =>
    set({ currentImageIndex: index }),
  setTotalImages: (total: number) => set({ totalImages: total }),
}));
