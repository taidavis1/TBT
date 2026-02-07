"use client";

import React from "react";


import {motion} from "motion/react";

import Image from "next/image";
import { HomeCarousel } from "@/components/Carousel";

import Logo from "@/public/Logo.png";

import AerospaceIcon from "@/public/industry-icon/1.png";
import RoboticsIcon from "@/public/industry-icon/2.png";
import EVIcon from "@/public/industry-icon/3.png";
import SemiconductorIcon from "@/public/industry-icon/4.png";
import MedicalIcon from "@/public/industry-icon/5.png";


import resourcesImg from "@/public/servicesImg/3.png";


import { SwiperData } from "@/components/DataSwiper";

import { MdOutlineNavigateNext } from "react-icons/md";


import Link from "next/link";
import servicesData from "@/components/ServicesData";
import ResourcesSection from "@/components/ResourcesSection";
import faqData from "@/components/FaqData";

import HomeIcon1 from "@/public/Icon/homeIcon/10.png";
import HomeIcon2 from "@/public/Icon/homeIcon/11.png";
import HomeIcon3 from "@/public/Icon/homeIcon/12.png";
import { SwiperServices } from "@/components/SwiperServices";

export default function Home() {

	const section1Data = [
		{
			name: "Aerospace",
			icon: AerospaceIcon
		},
		{
			name: "Robotics",
			icon: RoboticsIcon
		},
		{
			name: "EV & Automotive",
			icon: EVIcon
		},
		{
			name: "Semiconductor",
			icon: SemiconductorIcon
		},
		{
			name: "Medical Devices",
			icon: MedicalIcon
		}
	];

	const images = Array.from({
		length: 10,
	}, (_, index) => {
        return `/gallery/${index + 1}.png`
	});

	const equipmentData = Array.from({
		length: 6,
	}, (_, index) => {
        return `/equipmentImg/${index + 1}.png`
	});

	const whySectionData = [
		{
			name: "Precision 5-Axis Expertise",
			desc: "We deliver high-precision 5-axis machining for complex geometries and tight-tolerance prototypes trusted by engineers across Fremont, Silicon Valley, and the Bay Area. Our advanced multi-axis capability ensures accuracy and reliability for industries including aerospace, robotics, EV, semiconductor, and medical.",
		},
		{
			name: "Fast & Reliable Prototyping",
			desc: "We specialize in rapid CNC prototyping with fast turnaround and consistent accuracy. Bay Area engineers rely on us to transform early-stage concepts into test-ready metal components quickly, helping accelerate development cycles and reduce delays.",
		},
		{
			name: "Strict Quality Control",
			desc: "Every part is inspected using advanced metrology and CMM verification to ensure tight tolerances and consistent results. Our Fremont-based quality control workflow provides Bay Area companies with dependable, inspection-ready CNC components.",
		},
	];

	const clientData = Array.from({
		length: 6,
	}, (_, index) => {
        return `/companyServe/${index + 1}.png`
	});

	return (
		<div className="">
			<HomeCarousel />
			<section className="">
				<motion.div 
					initial={{x: -100, opacity: 0}}
					whileInView={{x: 0, opacity: 1}}
					viewport={{amount: 0.2}}
					transition={{duration: 0.5, type: "tween", stiffness: 100}}
					className="pb-8 lg:pb-24 pt-12 lg:pt-18 relative px-4 lg:px-0"
				>
					<Image className=" absolute -bottom-12 lg:bottom-0 w-32 lg:w-max -right-8 z-50 lg:right-4" alt="Home Icon Aerospace" src={HomeIcon2} />
					<div className=" mx-auto max-w-screen-xl">
						<div className=" flex flex-col space-y-5 text-center items-center justify-center">
							<h1 className=" text-navbar font-bold text-xl lg:text-4xl font-headerFont">
								Your Bay Area CNC Partner
							</h1>
							<div className=" h-1 w-20 lg:w-32 bg-navbar"></div>
							<div className=" lg:w-3/4">
								<p className=" lg:text-lg text-sm text-body-txt">
									We are a Fremont-based CNC machine shop delivering high-precision machining, 5-axis milling, and tight-tolerance metal parts for companies across the Bay Area, including Silicon Valley, San Jose, Milpitas, and Santa Clara. From prototypes to production, we provide reliable machining solutions built on accuracy, consistency, and engineering expertise.
								</p>
							</div>
						</div>
						<div className=" mt-8 lg:mt-16">
							<SwiperData data={section1Data} />
						</div>
						<div className="flex lg:mt-0 mt-8 items-center justify-center">
							<Link href={"/#services"} className=" transition-all duration-300 ease-in-out rounded-2xl hover:bg-btn-hover hover:text-white lg:hover:shadow-xl lg:hover:-translate-y-4 w-[150px] lg:w-[170px] py-3 text-center lg:text-lg border border-btn-hover">
								Learn More
							</Link>
						</div>
					</div>
				</motion.div>
			</section>

			<section id="services" className=" bg-[#F2F2F2]">
				<motion.div 
					initial={{x: 100, opacity: 0}}
					whileInView={{x: 0, opacity: 1}}
					viewport={{amount: 0.2}}
					transition={{duration: 0.5, type: "tween"}}
					className="pb-8 lg:pb-24 lg:pt-24 pt-12 px-4 lg:px-0 relative"
				>
					<Image className=" absolute -bottom-20 lg:top-0 w-32 lg:w-max -right-4 z-50 lg:left-4" alt="Home Icon Capabilities" src={HomeIcon1} />
					<div className=" mx-auto max-w-screen-xl">
						<div className=" grid lg:grid-cols-2 items-center gap-8 lg:gap-12">
							<div className=" space-y-6 lg:space-y-8">
								<div className=" space-y-2">
									<div className=" flex justify-between items-center">
										<h1 className=" lg:text-4xl text-xl font-headerFont font-bold text-navbar">
											Our Capabilities
										</h1>
										<Link href={""} className=" transition duration-300 ease-in-out cursor-pointer hover:opacity-40">
											<MdOutlineNavigateNext className=" text-navbar text-2xl lg:text-4xl" />
										</Link>
									</div>
									<div className="w-12 h-1 bg-navbar"></div>
								</div>
								<div className="lg:text-lg text-sm space-y-4 lg:space-y-6 text-body-second">
									<p className="">
										We specialize in rapid prototyping through advanced 5-axis machining, multi-axis programming, and tight-tolerance metal parts tailored for complex engineering requirements. Our team supports Bay Area innovators—from Fremont to Silicon Valley—by transforming early-stage concepts into precise, test-ready components with speed and accuracy. Whether your design includes intricate contours, deep pockets, thin walls, or unique geometries, we deliver prototypes that match your exact specifications.									
									</p>
									<p className="">
										With a focus on flexibility and fast turnaround, we provide engineers, startups, and R&D teams the high-precision prototypes they need to validate designs, iterate quickly, and accelerate development cycles. Our machining capabilities are built for industries such as aerospace, robotics, EV, semiconductor, and medical, offering reliable prototype solutions that help Bay Area companies bring ideas to life faster and with confidence.
									</p>
								</div>
							</div>
							<div className=" mx-auto w-full max-w-[370px] sm:max-w-md md:max-w-xl h-[400px] lg:h-[600px]">
								<SwiperServices data={servicesData} />
							</div>
						</div>
					</div>
				</motion.div>
			</section>

			<section className=" bg-[url('/bg/1.png')] bg-center bg-cover bg-no-repeat">
				<motion.div
					initial={{ opacity: 0}}
					whileInView={{ opacity: 1}}
					transition={{ duration: 1}}
					className="lg:pt-24 pt-12 pb-12 px-2 lg:px-0 relative"
				>
					<Image className=" absolute top-1/7 translate-x-20 w-44 h-44 lg:block hidden" src={Logo} alt="TBT Machining Logo" />
					<div className=" mx-auto max-w-screen-xl">
						<div className=" flex-col space-y-10 lg:space-y-0 flex lg:flex-row items-center lg:space-x-12">
							<div className=" ">
								<h1 className=" lg:-translate-x-24 font-bold text-navbar lg:text-5xl text-2xl font-headerFont">
									Our Works
								</h1>
							</div>
							<div className="w-full lg:p-0 p-2">
								<SwiperData mode={"image"} data={images} name="Our Works" />
							</div>
						</div>
					</div>
				</motion.div>
			</section>
			
			<section className="rounded-4xl bg-white">
				<div className="pb-8 lg:pb-24 lg:pt-24 pt-12 px-4 relative lg:px-0 mx-auto max-w-screen-xl">
					<Image className=" absolute -bottom-12 lg:-bottom-20  w-24 lg:w-32 right-2 z-50 lg:right-4" alt="Home Icon Aerospace" src={HomeIcon3} />
					<div className=" grid lg:grid-cols-2 lg:divide-x lg:divide-navbar gap-12 items-center">
						<motion.div 
							initial={{ opacity: 0}}
							whileInView={{ opacity: 1}}
							transition={{ duration: 0.5}}
							viewport={{amount: 0.5}}
							className=" lg:px-4 mx-auto w-full max-w-[370px] mt-8 rounded-2xl sm:max-w-md md:max-w-2xl"
						>
							<div className="space-y-4 mb-4 lg:space-y-6">
								<h1 className=" font-headerFont text-body-txt font-bold text-xl lg:text-4xl">
									Advanced CNC Equipment
								</h1>
							</div>
							<SwiperData mode={"equipment"} name={"Equipment"} data={equipmentData} />
						</motion.div>

						<motion.div 
							initial={{ opacity: 0 , x: -100 }}
							whileInView={{ opacity: 1 , x: 0 }}
							transition={{ duration: 0.8, type: 'tween', stiffness: 100 }}
							viewport={{amount: 0.2}}
							className="flex flex-col space-y-6"
						>
							<div className=" space-y-4 lg:space-y-6">
								<h1 className=" font-headerFont text-navbar font-bold text-xl lg:text-4xl">
									Our Commitment to Precision
								</h1>
								<div className=" h-1 bg-navbar w-24"></div>
								<p className="lg:text-lg text-sm text-body-txt">
									We deliver consistent precision, fast turnaround, and reliable machining quality for engineers and companies across Fremont, Silicon Valley, and the Bay Area. From rapid prototypes to complex multi-axis parts, our expertise and attention to detail ensure every project meets the highest standards.
								</p>
							</div>
							<div className="space-y-8">
								{whySectionData.map((whyChoose, index) => (
									<div key={index} className="flex space-x-4">
										<div className=" w-18 p-1 mt-1 h-fit bg-white shadow-xl rounded-full flex items-center justify-center">
											<span className=" text-sm text-navbar">
												{index + 1}
											</span>
										</div>
										<div className="flex flex-col space-y-2 mx-2 lg:mx-0">
											<h3 className=" font-bold lg:text-xl font-headerFont">{whyChoose?.name}</h3>
											<p className=" text-sm text-body-second lg:text-base">{whyChoose?.desc}</p>
										</div>
									</div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</section>
			
			<section className=" bg-[url('/bg/1.png')] bg-right bg-cover bg-no-repeat">
				<div className="pb-8 lg:pb-24 lg:pt-24 pt-12 px-4 lg:px-0 mx-auto max-w-screen-xl">
					<div className=" space-y-6 flex flex-col text-center items-center justify-center">
						<h1 className=" font-headerFont text-navbar font-bold text-xl lg:text-4xl">
							Frequently Asked Questions
						</h1>
						<div className="h-1 bg-navbar w-24"></div>
						<div className=" lg:w-3/4">
							<p className=" text-sm lg:text-lg text-body-txt">
								Find quick answers to the most common questions about our CNC machining, prototyping, and 5-axis capabilities. We support engineers and companies throughout Fremont, Silicon Valley, and the Bay Area with accurate and reliable information.
							</p>
						</div>
					</div>
					<div className=" grid lg:grid-cols-2 mt-8 lg:mt-12 gap-18 lg:gap-12 items-center">
						<div className=" translate-y-4">
							<ResourcesSection length={4} faqData={faqData} />
							<div className=" mt-12 lg:mt-16">
								<Link href={"/resources"} className=" hover:opacity-55 transition-opacity duration-300 ease-in-out px-8 text-base bg-navbar text-white py-4 rounded-full text-center">
									View More
								</Link>
							</div>
						</div>
						<div className=" p-1 lg:p-8 group cursor-pointer">
							<Image src={resourcesImg} alt="" className=" group-hover:opacity-100 opacity-80 rounded-3xl w-full h-full " />
						</div>
					</div>
				</div>
			</section>

			<section className=" bg-center lg:bg-fixed bg-no-repeat bg-cover bg-[url('/bg/3.png')]">
				<div className="lg:pb-12 lg:pt-8 px-4 lg:px-0 mx-auto max-w-screen-xl">
					<SwiperData mode={"Our Clients"} name={"our Clients"} data={clientData} />
				</div>
			</section>
		</div>
	);
}
