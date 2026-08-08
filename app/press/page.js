import PressPage from '@/components/Press/PressPage'

export const metadata = {
    title: 'Press | Renoweb Digital Solutions',
    description: 'Read what leading publications are saying about Renoweb Digital Solutions — our story, our impact, and the vision driving us forward.',
    openGraph: {
        title: 'Press | Renoweb Digital Solutions',
        description: 'Renoweb Digital Solutions in the news. Read our latest press coverage and media features.',
        url: 'https://renowebhq.com/press',
        siteName: 'Renoweb Digital Solutions',
        locale: 'en_US',
        type: 'website',
    },
}

const page = () => {
    return <PressPage />
}

export default page
