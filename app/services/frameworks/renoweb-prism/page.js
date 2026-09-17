import RenowebPrismPage from '@/components/services/frameworks/RenowebPrismPage'

export const metadata = {
    title: 'Renoweb Prism — Founder-Voice Content Creator | Renoweb Digital Solutions',
    description: 'Renoweb Prism is a raw-moment capture and conversion system that turns lived founder moments into publishable content using a repeatable Story Arc — without losing your authentic voice.',
    openGraph: {
        title: 'Renoweb Prism — Founder-Voice Content Creator | Renoweb Digital Solutions',
        description: 'A raw-moment capture and conversion system that stops founders from losing their best content ideas to a busy day, and turns lived moments into publishable posts.',
        url: 'https://renowebhq.com/services/frameworks/renoweb-prism',
        siteName: 'Renoweb Digital Solutions',
        images: [
            {
                url: '/renoweb_logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Renoweb Prism Framework',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
}

export default function RenowebPrismRoute() {
    return <RenowebPrismPage />
}
