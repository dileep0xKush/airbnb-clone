export const API_ENDPOINTS = {
  AUTH: {
    SIGN_IN: '/auth/sign-in',
    SIGN_UP: '/auth/sign-up',
    SIGN_OUT: '/auth/sign-out',
    REFRESH: '/auth/refresh',
    VERIFY_EMAIL: '/auth/verify-email',
    RESEND_VERIFICATION: '/auth/resend-verification',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  USERS: {
    ROOT: '/users',
    PROFILE: '/users/me',
    DETAIL: (id: string) => `/users/${id}`,
    UPDATE: '/users/me',
  },
  LISTINGS: {
    ROOT: '/listings',
    DETAIL: (id: string) => `/listings/${id}`,
    CREATE: '/listings',
    UPDATE: (id: string) => `/listings/${id}`,
    DELETE: (id: string) => `/listings/${id}`,
    SEARCH: '/listings/search',
    FEATURED: '/listings/featured',
  },
  BOOKINGS: {
    ROOT: '/bookings',
    DETAIL: (id: string) => `/bookings/${id}`,
    CREATE: '/bookings',
    CANCEL: (id: string) => `/bookings/${id}/cancel`,
  },
  REVIEWS: {
    ROOT: '/reviews',
    DETAIL: (id: string) => `/reviews/${id}`,
    CREATE: '/reviews',
    UPDATE: (id: string) => `/reviews/${id}`,
    DELETE: (id: string) => `/reviews/${id}`,
  },
  HEALTH: '/health',
} as const;

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
