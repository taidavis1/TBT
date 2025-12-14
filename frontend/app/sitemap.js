export const dynamic = "force-static";
export default function sitemap(){

    return [
        {
            url: `${process.env.NEXT_PUBLIC_REAL_URL}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_REAL_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: `${process.env.NEXT_PUBLIC_REAL_URL}/equipment`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7
        },
        {
            url: `${process.env.NEXT_PUBLIC_REAL_URL}/resources`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5
        },
    ]
};