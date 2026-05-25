/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['flowbite.com'],
    },
    async rewrites() {
        return [
            {
                source: '/api/contact',
                destination: 'http://localhost:5004/api/contact',
            },
        ];
    },
};

export default nextConfig;
