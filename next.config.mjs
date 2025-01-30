import path from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['images.unsplash.com'],
    },
    experimental: {
        optimizePackageImports: ['@prisma/client'],
    },
    webpack: (config) => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        };
        return config;
    },
    // Increase timeouts
    staticPageGenerationTimeout: 120,
    pageLoadTimeout: 60,
};
export default nextConfig;
