// app/sitemap.js
import { case_studies_data } from '@/components/data/case_studies'
// Import your other data files when ready
// import { products } from '@/components/data/products'
// import { blogs } from '@/components/data/blogs'

const baseUrl = 'https://renowebhq.com'

export default function sitemap() {
    // Static routes
    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/products`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/case-studies`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact-us`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/press`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/legal`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]

    // Dynamic case study routes
    const caseStudyRoutes = case_studies_data.map((study) => ({
        url: `${baseUrl}/case-studies/${study.id}`,
        lastModified: study.updatedAt ? new Date(study.updatedAt) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }))

    // Dynamic product routes - manually list your product slugs
    const productSlugs = [
        'growth-os',
        'quantum-accelerator',
        // Add more product slugs as you create pages
    ]

    const productRoutes = productSlugs.map((slug) => ({
        url: `${baseUrl}/products/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }))

    // Dynamic blog routes (uncomment when you add blogs)
    // const blogRoutes = blogs.map((blog) => ({
    //   url: `${baseUrl}/blogs/${blog.slug}`,
    //   lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.6,
    // }))

    return [
        ...staticRoutes,
        ...caseStudyRoutes,
        ...productRoutes,  // Now included
        // ...blogRoutes,     // Uncomment when ready
    ]
}