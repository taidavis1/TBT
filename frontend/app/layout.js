import {Inter, Orbitron, Rajdhani} from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/redux/StoreProvider";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatBtn } from "@/components/FloatBtn";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";


const fontTitle = Orbitron({
	weight: ["400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	variable: "--font-title",
});

const montFont = Rajdhani({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-navbar",
});

const fontContent = Inter({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	variable: "--font-inter",
});


export const metadata = {
	title: "TBT Machining | Precision 5-Axis CNC Machining in Fremont, CA",
	description: "TBT Machining specializes in precision 5-axis CNC machining, rapid prototyping, CNC milling, and tight-tolerance inspection in Fremont, CA. We support engineers, startups, and manufacturers across Silicon Valley and the Bay Area with high-precision components for aerospace, robotics, semiconductor, EV, and medical applications.",
	keywords: [
		"5-axis CNC machining Fremont",
		"CNC machining Fremont CA",
		"precision CNC machining Bay Area",
		"rapid prototyping Fremont",
		"CNC milling Fremont CA",
		"tight tolerance CNC machining",
		"prototype machining Silicon Valley",
		"aerospace machining Bay Area",
		"robotics machining Fremont",
		"semiconductor machining Fremont",
		"EV machining Silicon Valley",
		"CNC machine shop Fremont",
		"TBT Machining"
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
		canonical: `${process.env.NEXT_PUBLIC_REAL_URL}`,
		languages: {
			"en-US": `${process.env.NEXT_PUBLIC_REAL_URL}`,
		},
	},
	formatDetection: { telephone: true, email: true, address: true },
	openGraph: {
		title: "TBT Machining | Precision 5-Axis CNC Machining in Fremont, CA",
		description: "TBT Machining provides advanced 5-axis CNC machining, rapid prototyping, CNC milling, and tight-tolerance inspection in Fremont, CA. We serve aerospace, robotics, semiconductor, EV, and medical teams across Silicon Valley and the Bay Area.",
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_REAL_URL}/Carousel/1.png`,
				width: 1200,
				height: 630,
				alt: "5-axis CNC machining and prototype parts at TBT Machining in Fremont, CA",
			}
		],
		type: "website",
		siteName: "TBT Machining",
		locale: "en_US",
		url: `${process.env.NEXT_PUBLIC_REAL_URL}`,
	},
	twitter: {
		card: "summary_large_image",
		title: "TBT Machining | Precision 5-Axis CNC Machining in Fremont, CA",
		description: "TBT Machining delivers precision 5-axis CNC machining, CNC milling, rapid prototyping, and inspection services for engineers across Fremont, Silicon Valley, and the Bay Area.",
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_REAL_URL}/Carousel/1.png`,
				alt: "5-axis CNC machining and prototype parts at TBT Machining in Fremont, CA",
			}
		]
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	}
};

const JsonLD = {
	"@context": "https://schema.org",
	"@type": ["LocalBusiness", "ManufacturingBusiness"],
	"@id": `${process.env.NEXT_PUBLIC_REAL_URL}#tbtmachining`,
	"name": "TBT Machining",
	"url": `${process.env.NEXT_PUBLIC_REAL_URL}`,
	"image": [`${process.env.NEXT_PUBLIC_REAL_URL}/Carousel/1.png`],
	"logo": `${process.env.NEXT_PUBLIC_REAL_URL}/favicon.ico`,
	"description": "TBT Machining specializes in precision 5-axis CNC machining, CNC milling, rapid prototyping, and tight-tolerance inspection in Fremont, CA. We support engineers and manufacturers across Silicon Valley and the Bay Area with high-precision components for aerospace, robotics, semiconductor, EV, and medical applications.",
	"telephone": "+1-669-777-7797",
	"email": "office@tbtmachining.com",
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "45979 Warm Springs Blvd, Unit 3",
		"addressLocality": "Fremont",
		"addressRegion": "CA",
		"postalCode": "94539",
		"addressCountry": "US"
	},
	"priceRange": "$$",
	"openingHoursSpecification": [
		{
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday"
			],
			"opens": "08:00",
			"closes": "17:00"
		}
	],
	"areaServed": [
		"Fremont CA",
		"Milpitas CA",
		"San Jose CA",
		"Santa Clara CA",
		"Sunnyvale CA",
		"Mountain View CA",
		"Silicon Valley",
		"Bay Area",
		"California",
	],
	"knowsAbout": [
		"5-axis CNC machining",
		"CNC milling",
		"rapid prototyping",
		"tight tolerance machining",
		"aerospace machining",
		"robotics machining",
		"semiconductor machining",
		"EV machining",
		"medical device machining"
	],
	"contactPoint": [
		{
			"@type": "ContactPoint",
			"telephone": "+1-669-777-7797",
			"contactType": "sales",
			"email": "office@tbtmachining.com",
			"availableLanguage": ["en"]
		}
	],
	"geo": {
		"@type": "GeoCoordinates",
		"latitude": "37.493666",
		"longitude": "-121.9339616"
	},
	"hasMap": "https://maps.app.goo.gl/b6PkL7Tc2TnqURcE7",
	"makesOffer": [
		{
			"@type": "Offer",
			"itemOffered": {
				"@type": "Service",
				"name": "5-Axis CNC Machining",
				"serviceType": "5-axis CNC machining",
				"areaServed": "Fremont, Silicon Valley, Bay Area",
				"description": "Precision 5-axis CNC machining for complex, tight-tolerance metal components serving aerospace, robotics, semiconductor, EV, and medical industries in Fremont and the Bay Area."
			}
		},
		{
			"@type": "Offer",
			"itemOffered": {
				"@type": "Service",
				"name": "CNC Milling",
				"serviceType": "CNC milling",
				"areaServed": "Fremont, Silicon Valley, Bay Area",
				"description": "High-precision CNC milling services for prototypes and low-volume production supporting Bay Area engineering teams."
			}
		},
		{
			"@type": "Offer",
			"itemOffered": {
				"@type": "Service",
				"name": "Rapid Prototyping",
				"serviceType": "CNC rapid prototyping",
				"areaServed": "Fremont, Silicon Valley, Bay Area",
				"description": "Fast-turn CNC prototypes for engineers, startups, and manufacturers across Silicon Valley and the Bay Area."
			}
		},
		{
			"@type": "Offer",
			"itemOffered": {
				"@type": "Service",
				"name": "Quality Control & Inspection",
				"serviceType": "CNC inspection and metrology",
				"areaServed": "Fremont, Silicon Valley, Bay Area",
				"description": "Tight-tolerance inspection with dimensional verification and quality documentation for high-precision CNC components."
			}
		}
	]
};

export default function RootLayout({ children }) {
	return (
		<html className="scroll-smooth" lang="en">
			<Head>
				<script 
					dangerouslySetInnerHTML={{ __html: JSON.stringify(JsonLD) }}
					type='application/ld+json'
				/>
			</Head>
			<body
				className={`${fontTitle.variable} ${montFont.variable} ${fontContent.variable}`}
			>
				<StoreProvider>
					<main className="font-txtFont overflow-hidden">
						<Navbar />
						{children}
						<Footer />
						<FloatBtn />
					</main>
				</StoreProvider>
			</body>
			<GoogleAnalytics gaId="G-6SZZ5EXWC0" />
		</html>
	);
}
