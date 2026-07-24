import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string(),
  avatar: z.string().url().optional(),
  bio: z.string().optional(),
  phone: z.string().optional(),
  verified: z.boolean().default(false),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof UserSchema>;

export const AmenitySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  icon: z.string(),
  category: z.string(),
});

export type Amenity = z.infer<typeof AmenitySchema>;

export const ImageSchema = z.object({
  id: z.string().uuid(),
  url: z.string().url(),
  altText: z.string().optional(),
});

export type Image = z.infer<typeof ImageSchema>;

export const ListingSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
  description: z.string(),
  hostId: z.string().uuid(),
  location: z.object({
    address: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    latitude: z.number(),
    longitude: z.number(),
  }),
  pricePerNight: z.number().positive(),
  currency: z.string().default('USD'),
  maxGuests: z.number().positive(),
  bedrooms: z.number().non-negative(),
  bathrooms: z.number().non-negative(),
  beds: z.number().non-negative(),
  amenities: z.array(z.string().uuid()),
  images: z.array(ImageSchema),
  rating: z.number().min(0).max(5).optional(),
  reviewCount: z.number().non-negative().default(0),
  available: z.boolean().default(true),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Listing = z.infer<typeof ListingSchema>;

export const ReviewSchema = z.object({
  id: z.string().uuid(),
  listingId: z.string().uuid(),
  guestId: z.string().uuid(),
  rating: z.number().min(1).max(5),
  comment: z.string().min(10),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Review = z.infer<typeof ReviewSchema>;

export const BookingSchema = z.object({
  id: z.string().uuid(),
  listingId: z.string().uuid(),
  guestId: z.string().uuid(),
  checkInDate: z.date(),
  checkOutDate: z.date(),
  numberOfGuests: z.number().positive(),
  totalPrice: z.number().positive(),
  currency: z.string().default('USD'),
  status: z.enum(['PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED']),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Booking = z.infer<typeof BookingSchema>;

export const HostSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  bio: z.string().optional(),
  verified: z.boolean().default(false),
  responseTime: z.string().optional(),
  acceptanceRate: z.number().min(0).max(100).optional(),
  listings: z.array(z.string().uuid()).default([]),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Host = z.infer<typeof HostSchema>;

export const CreateListingDTOSchema = ListingSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type CreateListingDTO = z.infer<typeof CreateListingDTOSchema>;

export const UpdateListingDTOSchema = CreateListingDTOSchema.partial();

export type UpdateListingDTO = z.infer<typeof UpdateListingDTOSchema>;

export const CreateBookingDTOSchema = BookingSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  status: true,
});

export type CreateBookingDTO = z.infer<typeof CreateBookingDTOSchema>;

export const ApiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional(),
  timestamp: z.date(),
});

export type ApiResponse<T = any> = Omit<z.infer<typeof ApiResponseSchema>, 'data'> & {
  data?: T;
};
