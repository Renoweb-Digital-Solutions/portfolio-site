import RenowebBlueprintPage from '@/components/services/frameworks/RenowebBlueprintPage'

export const metadata = {
    title: 'The Renoweb Brand Blueprint — The Comprehensive Brand Map | Renoweb Digital Solutions',
    description: 'A structured diagnostic that forces a business to articulate its Why/What/How, brand attributes, benefit statements, and messaging before a single piece of website copy or ad creative is written.',
    openGraph: {
        title: 'The Renoweb Brand Blueprint — The Comprehensive Brand Map | Renoweb Digital Solutions',
        description: 'A structured diagnostic that replaces guesswork with a documented foundation. We document your brand’s blueprint before we build on top of it.',
        url: 'https://renowebhq.com/services/frameworks/renoweb-blueprint',
        siteName: 'Renoweb Digital Solutions',
        images: [
            {
                url: '/renoweb_logo.jpg',
                width: 1200,
                height: 630,
                alt: 'The Renoweb Brand Blueprint',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
}

export default function RenowebBlueprintRoute() {
    return <RenowebBlueprintPage />
}
