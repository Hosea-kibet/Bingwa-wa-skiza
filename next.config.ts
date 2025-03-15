import type { NextConfig } from 'next';

const nextConfig = {
    env: {
      THIRD_PARTY_AUTH_KEY: process.env.THIRD_PARTY_AUTH_KEY,
      THIRD_PARTY_AUTH_BASE_URL: process.env.THIRD_PARTY_AUTH_BASE_URL,
    },
  };

export default nextConfig;
