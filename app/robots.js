export const runtime = 'nodejs'

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                disallow: [
                    '/api',
                    '/_next',
                    '/admin',
                    '/dashboard',
                ],
            },
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: 'https://renowebhq.com/sitemap.xml',
    }
}
