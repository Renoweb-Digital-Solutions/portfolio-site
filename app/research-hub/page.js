import ResearchHubPage from '@/components/ResearchHub/ResearchHubPage'

export const metadata = {
    title: 'Research Hub | Renoweb Digital Solutions',
    description: 'Original research, industry benchmarks, and data-backed insights on digital marketing, SEO, consumer behaviour, and more — crafted by the Renoweb team.',
    openGraph: {
        title: 'Research Hub | Renoweb Digital Solutions',
        description: 'Data-driven reports and insights to help you make smarter digital decisions.',
        url: 'https://renowebhq.com/research-hub',
        siteName: 'Renoweb Digital Solutions',
        locale: 'en_US',
        type: 'website',
    },
}

const page = () => {
    return <ResearchHubPage />
}

export default page
