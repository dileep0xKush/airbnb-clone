export const APP_CONFIG = {
  NAME: 'Airbnb Clone',
  DESCRIPTION: 'A production-ready Airbnb-style application',
  VERSION: '1.0.0',
  AUTHOR: 'Your Name',
  LANGUAGE: 'en',
  TIMEZONE: 'UTC',
} as const;

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

export const CURRENCY = {
  DEFAULT: 'USD',
  SYMBOL: {
    USD: '$',
    EUR: '€',
    GBP: '£',
  },
} as const;

export const DATE_FORMAT = {
  SHORT: 'MMM dd, yyyy',
  LONG: 'MMMM dd, yyyy',
  FULL: 'EEEE, MMMM dd, yyyy',
  TIME: 'HH:mm',
  DATETIME: "MMM dd, yyyy 'at' HH:mm",
} as const;

export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
  EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_PATTERN: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
} as const;

export const BOOKING_STATUS = {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED',
} as const;

export const AMENITIES = [
  { id: '1', name: 'WiFi', icon: 'wifi', category: 'amenity' },
  { id: '2', name: 'Air Conditioning', icon: 'air', category: 'amenity' },
  { id: '3', name: 'Heating', icon: 'heat', category: 'amenity' },
  { id: '4', name: 'Kitchen', icon: 'chef-hat', category: 'amenity' },
  { id: '5', name: 'Washing Machine', icon: 'washing-machine', category: 'amenity' },
  { id: '6', name: 'TV', icon: 'tv', category: 'amenity' },
  { id: '7', name: 'Pool', icon: 'waves', category: 'amenity' },
  { id: '8', name: 'Hot Tub', icon: 'droplets', category: 'amenity' },
  { id: '9', name: 'Gym', icon: 'dumbbell', category: 'amenity' },
  { id: '10', name: 'Workspace', icon: 'monitor', category: 'amenity' },
] as const;

export const PROPERTY_TYPES = [
  'Entire place',
  'Private room',
  'Shared room',
  'Hotel room',
] as const;
