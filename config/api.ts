export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const API_ENDPOINTS = {
  login: `${API_URL}/auth/login`,
  verify: `${API_URL}/auth/verify`,
  register: `${API_URL}/auth/register`,
} as const; 