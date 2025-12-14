import React from 'react';

export const metadata = {
    title: "About TBT Machining | Precision 5-Axis CNC Experts in Fremont, CA",
    description: "Learn about TBT Machining’s mission, vision, and commitment to high-precision 5-axis CNC machining, rapid prototyping, CNC milling, and tight-tolerance inspection in Fremont, CA. Serving engineers across Silicon Valley and the Bay Area with aerospace-grade quality and advanced manufacturing expertise.",
    keywords: [
        "about TBT Machining",
        "CNC machine shop Fremont CA",
        "5-axis CNC experts Bay Area",
        "precision machining Silicon Valley",
        "CNC machining mission vision",
        "Bay Area prototype machining",
        "high precision CNC Fremont",
        "CNC milling experts",
        "rapid prototyping Fremont",
        "aerospace machining Fremont",
        "CNC inspection Bay Area",
        "Silicon Valley advanced manufacturing",
        "TBT Machining mission and vision"
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1
        }
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_REAL_URL}/about`,
        languages: {
            "en-US": `${process.env.NEXT_PUBLIC_REAL_URL}/about`
        }
    },
    formatDetection: { telephone: true, email: true, address: true },
    openGraph: {
        title: "About TBT Machining | Precision 5-Axis CNC Experts in Fremont, CA",
        description: "Discover the mission and vision behind TBT Machining, a Fremont based CNC machine shop specializing in 5-axis CNC machining, CNC milling, rapid prototyping, and precision inspection for Silicon Valley and Bay Area engineering teams.",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_REAL_URL}/bg/5.png`,
                width: 1200,
                height: 630,
                alt: "About TBT Machining | Precision 5-Axis CNC machining company in Fremont, CA"
            }
        ],
        type: "website",
        siteName: "TBT Machining",
        locale: "en_US",
        url: `${process.env.NEXT_PUBLIC_REAL_URL}/about`
    },
    twitter: {
        card: "summary_large_image",
        title: "About TBT Machining | Precision 5-Axis CNC Experts in Fremont, CA",
        description: "TBT Machining’s vision and mission center around delivering high-precision 5-axis CNC machining, rapid prototyping, and engineering-grade inspection services for Bay Area innovators.",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_REAL_URL}/bg/5.png`,
                alt: "TBT Machining Mission and Vision | 5-Axis CNC Experts in Fremont"
            }
        ]
    }
};

export default function AboutLayout({children}) {
    return (
        <main className=''>
            {children}
        </main>
    )
}
