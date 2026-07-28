import { getBlogBySlug } from '@/lib/db'

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getBlogBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    const seo = post.seo || {};

    return {
        title: seo.metaTitle || post.title,
        description: seo.metaDescription || post.excerpt,
        alternates: {
            canonical: seo.canonicalUrl,
        },
        openGraph: {
            title: seo.ogTitle || seo.metaTitle || post.title,
            description: seo.ogDescription || seo.metaDescription || post.excerpt,
            images: seo.ogImageUrl ? [seo.ogImageUrl] : (post.bannerUrl ? [post.bannerUrl] : []),
        },
    };
}

export default function BlogLayout({ children }) {
    return <>{children}</>;
}
