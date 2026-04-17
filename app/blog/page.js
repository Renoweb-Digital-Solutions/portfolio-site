import BlogPage from '@/components/Blog/BlogPage'

export const metadata = {
    title: 'Blog | Renoweb Digital Solutions',
    description: 'Practical insights, proven frameworks, and honest takes on digital marketing — written by the Renoweb team and tested with real clients.',
    openGraph: {
        title: 'Blog | Renoweb Digital Solutions',
        description: 'Practical insights on SEO, content, growth, and digital marketing strategy from the Renoweb team.',
        url: 'https://renowebhq.com/blog',
        siteName: 'Renoweb Digital Solutions',
        locale: 'en_US',
        type: 'website',
    },
}

const page = () => {
    return <BlogPage />
}

export default page
