import RenowebWaterfallPage from '@/components/services/frameworks/RenowebWaterfallPage'

export const metadata = {
    title: 'Renoweb Content Waterfall OS — Proprietary Repurposing Engine | Renoweb Digital Solutions',
    description: 'A structured system that takes one core piece of source content and cascades it into 30 distinct content expressions across formats, platforms, and audience temperatures.',
    openGraph: {
        title: 'Renoweb Content Waterfall OS — Proprietary Repurposing Engine | Renoweb Digital Solutions',
        description: 'A structured system that takes one core piece of source content and cascades it into 30 distinct content expressions across formats, platforms, and audience temperatures.',
        url: 'https://renowebhq.com/services/frameworks/renoweb-waterfall',
        siteName: 'Renoweb Digital Solutions',
        images: [
            {
                url: '/renoweb_logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Renoweb Content Waterfall OS',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
}

export default function RenowebWaterfallRoute() {
    return <RenowebWaterfallPage />
}
