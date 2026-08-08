import ServicesPage from '@/components/services/ServicesPage'

export const metadata = {
    title: 'Our Services | Renoweb Digital Solutions',
    description: 'End-to-end digital growth services — LinkedIn OS, Dev OS, Organic OS, SMM OS, Branding OS, Lead Gen OS, Community OS, and Performance OS. Build your brand, drive leads, and scale revenue sustainably.',
    openGraph: {
        title: 'Our Services | Renoweb Digital Solutions',
        description: 'End-to-end digital growth services — from strategy to execution — designed to build your brand, drive leads, and scale revenue sustainably.',
        url: 'https://renowebhq.com/services',
        siteName: 'Renoweb Digital Solutions',
        images: [
            {
                url: '/renoweb_logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Renoweb Services',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
}

export default function ServicesRoute() {
    return <ServicesPage />
}
