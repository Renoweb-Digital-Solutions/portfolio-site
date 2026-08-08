/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['flowbite.com', 'ifolrlareviovjvbavok.supabase.co'],
    },
    async rewrites() {
        return [
            {
                source: '/api/contact',
                destination: 'https://renowebbots.shop/contacthq/api/contact',
            },
        ];
    },
};

export default nextConfig;
