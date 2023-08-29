/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true,
    typedRoutes: false,
  },
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_PROVIDER: process.env.NEXTAUTH_PROVIDER,
    MAIN_API_URL: process.env.MAIN_API_URL,
    AUTH_API_URL: process.env.AUTH_API_URL,
    API_BASE_URL: process.env.API_BASE_URL,
    ENVIRONMENT: process.env.ENVIRONMENT,
    DATABASE_URL: process.env.DATABASE_URL,
  },
};

module.exports = nextConfig;
