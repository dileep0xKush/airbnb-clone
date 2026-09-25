export interface Image {
  id: string;
  src: string;
  alt: string;
}

export interface Bedroom {
  id: string;
  name: string;
  beds: Bed[];
}

export interface Bed {
  id: string;
  type: string;
  count: number;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

export interface Host {
  id: string;
  name: string;
  avatar: string;
  isSuperhost: boolean;
  yearsHosting: number;
}

export interface Listing {
  id: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  isGuestFavorite: boolean;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  type: string;
  description: string;
  images: Image[];
  host: Host;
  amenities: Amenity[];
  bedrooms_data: Bedroom[];
  reviews_data: Review[];
  price: number;
  pricePerNight?: number;
  cleaningFee?: number;
  serviceFee?: number;
  taxFee?: number;
  cancellationPolicy: string;
  houseRules: string[];
  safetyFeatures: string[];
  mapEmbedUrl?: string;
  latitude: number;
  longitude: number;
  aboutSection: string;
  category?: string;
}

export interface BookingState {
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
}
