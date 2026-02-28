/** @type {import('next').NextConfig} */
const nextConfig = {
  /* This ensures we stay on stable Webpack and avoid the Turbopack panic */
    experimental: {
    turbo: false,
    },
};

export default nextConfig;