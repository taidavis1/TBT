import Head from 'next/head';
import React from 'react';

export const metadata = {
    title: "CNC Equipment & 5-Axis Machines in Fremont, CA | TBT Machining",
    description: "Explore the advanced CNC equipment at TBT Machining in Fremont, CA, including 5-axis Doosan DVF 5000 and Haas UMC-750 machining centers, YCM NXV 1020A milling, and ZEISS Spectrum CMM inspection for tight-tolerance prototypes across Silicon Valley and the Bay Area.",
    keywords: [
        "CNC equipment Fremont",
        "5-axis CNC machines Fremont CA",
        "Doosan DVF 5000 Fremont",
        "Haas UMC-750 Bay Area",
        "YCM NXV 1020A CNC milling",
        "ZEISS Spectrum CMM inspection",
        "CNC machine shop Fremont CA",
        "precision CNC equipment Silicon Valley",
        "5-axis machining centers Bay Area",
        "CMM inspection Fremont",
        "prototype machining equipment",
        "high-precision CNC Fremont",
        "TBT Machining equipment"
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
        canonical: `${process.env.NEXT_PUBLIC_REAL_URL}/equipment`,
        languages: {
            "en-US": `${process.env.NEXT_PUBLIC_REAL_URL}/equipment`
        }
    },
    formatDetection: { telephone: true, email: true, address: true },
    openGraph: {
        title: "CNC Equipment & 5-Axis Machines in Fremont, CA | TBT Machining",
        description: "See the 5-axis CNC machining centers, vertical milling, and ZEISS Spectrum CMM inspection equipment that power high-precision prototypes at TBT Machining in Fremont, CA, serving engineers across Silicon Valley and the Bay Area.",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_REAL_URL}/bg/7.png`,
                width: 1200,
                height: 630,
                alt: "Advanced 5-axis CNC machines and ZEISS CMM equipment at TBT Machining in Fremont, CA"
            }
        ],
        type: "website",
        siteName: "TBT Machining",
        locale: "en_US",
        url: `${process.env.NEXT_PUBLIC_REAL_URL}/equipment`
    },
    twitter: {
        card: "summary_large_image",
        title: "CNC Equipment & 5-Axis Machines in Fremont, CA | TBT Machining",
        description: "High-precision 5-axis CNC machines, milling centers, and ZEISS CMM inspection equipment at TBT Machining in Fremont, CA, supporting Bay Area engineering teams.",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_REAL_URL}/bg/7.png`,
                alt: "5-axis CNC machining centers and CMM inspection equipment at TBT Machining"
            }
        ]
    }
};

export const equipmentJsonLD = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${process.env.NEXT_PUBLIC_REAL_URL}/equipment#equipment`,
    "url": `${process.env.NEXT_PUBLIC_REAL_URL}/equipment`,
    "name": "CNC Equipment at TBT Machining",
    "description": "Advanced 5-axis CNC machines, vertical milling centers, and CMM inspection equipment used at TBT Machining in Fremont, CA, supporting high-precision prototypes across Silicon Valley and the Bay Area.",
    "itemListElement": [
        {
            "@type": "Product",
            "position": 1,
            "name": "Doosan DVF 5000",
            "brand": "Doosan",
            "image": `${process.env.NEXT_PUBLIC_REAL_URL}/equipmentImg/1.png`,
            "description": "High-performance 5-axis machining center ideal for complex, tight-tolerance parts.",
            "provider": {
                "@id": `${process.env.NEXT_PUBLIC_REAL_URL}#tbtmachining`
            },
            "additionalProperty": [
                { "@type": "PropertyValue", "name": "Spindle Speed", "value": "20,000 RPM" },
                { "@type": "PropertyValue", "name": "X Travel", "value": "24.60 in" },
                { "@type": "PropertyValue", "name": "Y Travel", "value": "17.70 in" },
                { "@type": "PropertyValue", "name": "Z Travel", "value": "15.70 in" }
            ]
        },
        {
            "@type": "Product",
            "position": 2,
            "name": "YCM NXV 1020A",
            "brand": "YCM",
            "image": `${process.env.NEXT_PUBLIC_REAL_URL}/equipmentImg/2.png`,
            "description": "High-rigidity CNC vertical milling machine optimized for accuracy and stability.",
            "provider": {
                "@id": `${process.env.NEXT_PUBLIC_REAL_URL}#tbtmachining`
            },
            "additionalProperty": [
                { "@type": "PropertyValue", "name": "Spindle Speed", "value": "12,000 RPM (15,000 optional)" },
                { "@type": "PropertyValue", "name": "X Travel", "value": "40.16 in" },
                { "@type": "PropertyValue", "name": "Y Travel", "value": "20.47 in" },
                { "@type": "PropertyValue", "name": "Z Travel", "value": "21.26 in" }
            ]
        },
        {
            "@type": "Product",
            "position": 3,
            "name": "Haas UMC-750",
            "brand": "Haas Automation",
            "image": `${process.env.NEXT_PUBLIC_REAL_URL}/equipmentImg/3.png`,
            "description": "Versatile 5-axis machining center for multi-sided, complex precision components.",
            "provider": {
                "@id": `${process.env.NEXT_PUBLIC_REAL_URL}#tbtmachining`
            },
            "additionalProperty": [
                { "@type": "PropertyValue", "name": "Spindle Speed", "value": "10,000 RPM" },
                { "@type": "PropertyValue", "name": "X Travel", "value": "30.00 in" },
                { "@type": "PropertyValue", "name": "Y Travel", "value": "20.00 in" },
                { "@type": "PropertyValue", "name": "Z Travel", "value": "20.00 in" }
            ]
        },
        {
            "@type": "Product",
            "position": 4,
            "name": "ZEISS Spectrum CMM",
            "brand": "ZEISS",
            "image": `${process.env.NEXT_PUBLIC_REAL_URL}/equipmentImg/4.png`,
            "description": "High-precision ZEISS Spectrum CMM for dimensional inspection and tight-tolerance verification.",
            "provider": {
                "@id": `${process.env.NEXT_PUBLIC_REAL_URL}#tbtmachining`
            },
            "additionalProperty": [
                { "@type": "PropertyValue", "name": "Type", "value": "Bridge CMM in measuring room" },
                { "@type": "PropertyValue", "name": "Accuracy", "value": "1.8 + L/250 µm" },
                { "@type": "PropertyValue", "name": "Scanner", "value": "ZEISS LineScan One" },
                { "@type": "PropertyValue", "name": "Step Angle", "value": "5° - 5,184 possible positions" }
            ]
        }
    ]
};


export default function EquipmentLayout({children}) {
    return (
        <>
            <Head>
                <script 
					dangerouslySetInnerHTML={{ __html: JSON.stringify(equipmentJsonLD) }}
					type='application/ld+json'
				/>
            </Head>
            <main className=''>
                {children}
            </main>
        </>
    )
}
