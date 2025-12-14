import Head from 'next/head';
import React from 'react';

export const metadata = {
    title: "CNC Machining FAQ in Fremont, CA | TBT Machining",
    description: "Find answers to common CNC machining questions about 5-axis CNC, CNC milling, rapid prototyping, tolerances, materials, and lead times at TBT Machining in Fremont, CA. Supporting engineers and manufacturers across Silicon Valley and the Bay Area.",
    keywords: [
        "CNC machining FAQ",
        "5-axis CNC FAQ",
        "CNC machining questions",
        "CNC machining Fremont CA",
        "CNC milling FAQ",
        "rapid prototyping FAQ",
        "CNC tolerances Bay Area",
        "CNC materials FAQ",
        "prototype machining Fremont",
        "CNC machine shop Fremont",
        "Silicon Valley CNC machining FAQ",
        "Bay Area CNC prototyping",
        "TBT Machining FAQ"
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
        canonical: `${process.env.NEXT_PUBLIC_REAL_URL}/resources`,
        languages: {
            "en-US": `${process.env.NEXT_PUBLIC_REAL_URL}/resources`
        }
    },
    formatDetection: { telephone: true, email: true, address: true },
    openGraph: {
        title: "CNC Machining FAQ in Fremont, CA | TBT Machining",
        description: "CNC machining FAQ for 5-axis CNC, CNC milling, rapid prototyping, tolerances, and materials at TBT Machining in Fremont, CA. Built for engineers across Silicon Valley and the Bay Area.",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_REAL_URL}/bg/6.png`,
                width: 1200,
                height: 630,
                alt: "CNC machining FAQ and technical answers at TBT Machining in Fremont, CA"
            }
        ],
        type: "website",
        siteName: "TBT Machining",
        locale: "en_US",
        url: `${process.env.NXT_PUBLIC_REAL_URL}/resources`
    },
    twitter: {
        card: "summary_large_image",
        title: "CNC Machining FAQ in Fremont, CA | TBT Machining",
        description: "Get clear answers to CNC machining questions about 5-axis, milling, prototyping, tolerances, and materials from TBT Machining in Fremont, CA.",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_REAL_URL}/bg/6.png`,
                alt: "CNC machining FAQ for Bay Area engineers at TBT Machining"
            }
        ]
    }
};

const jsonLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${process.env.NEXT_PUBLIC_REAL_URL}/resources#faq`,
    "url": `${process.env.NEXT_PUBLIC_REAL_URL}/resources`,
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Do you offer rapid prototyping for Bay Area engineering teams?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We specialize in fast-turnaround CNC prototypes for R&D teams, startups, and manufacturers. Our Fremont location allows us to support companies throughout San Jose, Santa Clara, Milpitas, Mountain View, and the Bay Area."
            }
        },
        {
            "@type": "Question",
            "name": "What industries do you serve?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We support aerospace, robotics, EV & automotive, semiconductor, and medical device companies across Fremont and Silicon Valley. Our 5-axis and tight-tolerance capabilities are ideal for complex engineering projects."
            }
        },
        {
            "@type": "Question",
            "name": "Do you machine small batches or only production runs?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We primarily focus on prototyping and small-batch machining, providing accurate, ready-to-test components without requiring large production minimums."
            }
        },
        {
            "@type": "Question",
            "name": "How do I get a CNC machining quote?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Send your CAD files or project details to office@tbtmachining.com or call us at (669) 777-7797. Most quotes are provided within 24 hours."
            }
        },
        {
            "@type": "Question",
            "name": "What CNC machining services do you offer in Fremont, CA?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer rapid prototyping, 5-axis CNC machining, CNC milling, and full quality control/inspection. Our Fremont shop supports engineers and companies across Silicon Valley and the Bay Area with high-precision, tight-tolerance metal parts."
            }
        },
        {
            "@type": "Question",
            "name": "What materials do you work with?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We machine aluminum, stainless steel, steel alloys, titanium, plastics, and specialty engineering materials. Contact us at office@tbtmachining.com for material-specific questions."
            }
        },
        {
            "@type": "Question",
            "name": "Can I visit your Fremont CNC machine shop?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our shop is located at 45979 Warm Springs Blvd, Unit 3, Fremont, CA 94539. Visits are by appointment to ensure safety and machine availability."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide inspection reports and quality documentation?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We offer CMM inspection, dimensional reports, and quality documentation to ensure every prototype meets strict Bay Area engineering standards."
            }
        },
        {
            "@type": "Question",
            "name": "How fast can you complete a CNC prototype?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Lead times depend on complexity, but many prototypes can be completed in just a few days. We prioritize fast turnaround for Bay Area engineering teams needing quick iterations."
            }
        },
        {
            "@type": "Question",
            "name": "What tolerances can TBT Machining hold with 5-axis CNC machining?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We routinely achieve tight tolerances down to ±0.0005” depending on geometry, material, and feature size. Our advanced 5-axis equipment, skilled programmers, and full inspection workflow allow us to support demanding engineering requirements for aerospace, robotics, semiconductor, and medical device projects across Fremont and the Bay Area."
            }
        }
    ]
};

export default function ResourcesLayout({children}) {

    return (
        <>
            <Head>
                <script 
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
					type='application/ld+json'
				/>
            </Head>
            <main className=''>
                {children}
            </main>
        </>
    )
}
