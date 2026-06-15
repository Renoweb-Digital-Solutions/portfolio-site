import ResourcePage from '@/components/Resources/ResourcePage';

export const metadata = {
    title: 'Resources | Renoweb Digital Solutions',
    description: 'Explore our latest case studies, blog posts, and research reports.',
    openGraph: {
        title: 'Resources | Renoweb Digital Solutions',
        description: 'Explore our latest case studies, blog posts, and research reports.',
        url: 'https://renowebhq.com/resources',
        siteName: 'Renoweb Digital Solutions',
        locale: 'en_US',
        type: 'website',
    },
};

export default function Page() {
    return <ResourcePage />;
}
