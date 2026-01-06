export const runtime = 'nodejs'

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api',
                    '/_next',
                    '/admin',
                    '/dashboard',
                ],
            },
        ],
        sitemap: 'https://renowebhq.com/sitemap.xml',
        // sitemap: 'https://localhost:3000/sitemap.xml',
    }
}
