import { getResearchBySlug } from '@/lib/db'

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = await getResearchBySlug(slug);

    if (!article) {
        return {
            title: 'Report Not Found',
        };
    }

    const seo = article.seo || {};

    return {
        title: seo.metaTitle || article.title,
        description: seo.metaDescription || article.abstract,
        alternates: {
            canonical: seo.canonicalUrl,
        },
        openGraph: {
            title: seo.ogTitle || seo.metaTitle || article.title,
            description: seo.ogDescription || seo.metaDescription || article.abstract,
            images: seo.ogImageUrl ? [seo.ogImageUrl] : (article.bannerUrl ? [article.bannerUrl] : []),
        },
    };
}

export default function ResearchLayout({ children }) {
    return <>{children}</>;
}
