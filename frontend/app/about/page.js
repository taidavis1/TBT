"use client";

import React from 'react';
import {motion} from "motion/react";
import Image from 'next/image';

import Icon1 from "@/public/Icon/1.png";
import Icon2 from "@/public/Icon/2.png";
import Icon3 from "@/public/Icon/3.png";

import aboutPageImg from "@/public/aboutPageImg.png";
import visionIconMain from "@/public/Icon/aboutIcon/vision.png";

import missionIcon1 from "@/public/Icon/aboutIcon/1.png";
import missionIcon2 from "@/public/Icon/aboutIcon/2.png";
import missionIcon3 from "@/public/Icon/aboutIcon/3.png";
import missionIcon4 from "@/public/Icon/aboutIcon/4.png";

import visionIcon1 from "@/public/Icon/aboutIcon/VisionIcon/1.png";
import visionIcon2 from "@/public/Icon/aboutIcon/VisionIcon/2.png";
import visionIcon3 from "@/public/Icon/aboutIcon/VisionIcon/3.png";
import visionIcon4 from "@/public/Icon/aboutIcon/VisionIcon/4.png";

import partIcon from "@/public/Icon/partIcon.png";

import missionMainImg from "@/public/missionImg.png";

export default function AboutPage() {

    const itemList = [
        {id: 1, name: "Aerospace", img: Icon1},
        {id: 2, name: "Robotics", img: Icon2},
        {id: 3, name: "Semiconductor", img: Icon3},
    ];

    const missionData = [
        {icon: missionIcon1, text: "Deliver repeatable, high-precision 5-axis machining for complex and technical parts."},
        {icon: missionIcon2, text: "Support Bay Area engineering teams with fast prototyping and dependable turnaround."},
        {icon: missionIcon3, text: "Maintain strict quality control with advanced inspection and CMM verification."},
        {icon: missionIcon4, text: "Provide clear, reliable communication from initial quote to final delivery."}
    ];

    const visionData = [
        {icon: visionIcon1, text: "Lead Silicon Valley in innovation for multi-axis CNC machining and prototyping."},
        {icon: visionIcon2, text: "Strengthen our support for aerospace, robotics, semiconductor, EV, and medical industries."},
        {icon: visionIcon3, text: "Build lasting partnerships with engineering teams across the Bay Area."},
        {icon: visionIcon4, text: "Advance machining quality, speed, and reliability through continuous improvement."}
    ]

    return (
        <div className=' pb-12 lg:pb-24'>
            <section className='h-[680px] polygon2 bg-[url("/bg/5.png")] lg:bg-fixed lg:h-[800px] bg-cover bg-no-repeat relative'>
                <div className=' w-full h-full img-test '>
                    <div className=' mx-auto max-w-screen-xl h-full'>
                        <motion.div
                            animate={{y: 0, opacity: 1}}
                            initial={{y: -100, opacity: 0}}
                            transition={{duration: 1, ease: "easeInOut" , type: "spring", stiffness: 100}}
                            className='flex h-full lg:flex-row flex-col gap-x-24 justify-center text-center lg:text-start lg:justify-evenly items-center'
                        >
                            <div className='space-y-6 w-full lg:space-y-12 flex flex-col'>
                                <div className={`mt-4`}>
                                    <h1 className= {`tracking-wide text-white uppercase font-headerFont font-bold text-xl lg:text-4xl`}>
                                        Your Bay Area Leader in 5-Axis CNC Machining
                                    </h1>
                                </div>
                                <div className=' mx-2 lg:mx-0'>
                                    <p className=' leading-relaxed text-white font-txtFont text-sm lg:text-xl'>
                                        Based in Fremont, TBT Machining delivers high-precision prototypes, 5-axis machining, CNC milling, CNC turning, and strict quality inspection for engineers and companies across Silicon Valley and the Bay Area. Our team is committed to accuracy, reliability, and fast turnaround for complex engineering projects.
                                    </p>
                                </div>
                            </div>
                            <div className=' hidden lg:flex w-1/2 flex-col space-y-4'>
                                {itemList.map((item) => (
                                    <div key={item?.id} className=' flex items-center rounded-full space-x-4 mt-2'>
                                        <div className=' hover:bg-btn-hover cursor-pointer w-20 border-r rounded-full border-btn-hover'>
                                            <Image src={item?.img} alt={item?.name} className="invert brightness-0" />
                                        </div>
                                        <div className=''>
                                            <h2 className=' text-lg text-white'>
                                                {item?.name}
                                            </h2>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className='lg:pt-24 pt-12'>
                <div className=' mx-auto max-w-screen-xl lg:px-0 px-4'>
                    <div className=' grid lg:grid-cols-2 gap-12 lg:gap-4'>
                        <div className='rounded-about-img-1 mx-5 group cursor-pointer'>
                            <Image className=' hover:shadow-xl group-hover:opacity-55 transition duration-300 rounded-about-img-1' src={aboutPageImg} alt='TBT Machining About Page Image' />
                        </div>
                        <div className=' space-y-5 lg:pace-y-8'>
                            <div className=''>
                                <h1 className=' text-xl lg:text-3xl text-navbar tracking-wider font-headerFont font-bold'>
                                    Precision 5-Axis CNC Machining for the Bay Area
                                </h1>
                            </div>
                            <div className='leading-relaxed text-body-second lg:text-base text-sm space-y-4 lg:space-y-6'>
                                <p className=''>
                                    TBT Machining is a Fremont-based CNC machine shop specializing in advanced 5-axis machining, rapid prototyping, and tight-tolerance metal components for engineering teams across Silicon Valley and the Bay Area. We combine modern equipment, multi-axis capability, and expert programming to deliver accurate, consistent, and production-ready parts for industries including aerospace, robotics, semiconductor, EV, and medical devices.
                                </p>
                                <p className=''>
                                    Our focus on precision, fast turnaround, and reliable communication makes us a trusted partner for companies in Fremont, San Jose, Santa Clara, and the wider Bay Area. Whether you need a one-off prototype or complex multi-axis components, we work closely with engineers to ensure every part meets exact specifications, accelerates development cycles, and supports the most demanding technical requirements.
                                </p>
                            </div>
                            <span className=' hidden lg:block font-thin text-sm'>
                                #CNCmachining #5AxisMachining #PrecisionMachining
                                #BayAreaCNC #FremontCA #SiliconValleyEngineering
                                #RapidPrototyping #AerospaceMachining #RoboticsEngineering
                                #SemiconductorManufacturing #EVMachining #HighPrecisionEngineering
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className='lg:pt-24 pt-12 relative'>
                <Image className=' absolute -top-4 drop-shadow-lg right-0 drop-shadow-navbar w-28 lg:w-44 lg:right-8' src={partIcon} alt='Icon of A Part' />
                <div className=' mx-auto max-w-screen-xl lg:px-0 px-4'>
                    <div className=' grid lg:grid-cols-2 items-center gap-12'>
                        <div className=''>
                            <div className=''>
                                <h1 className=' text-xl lg:text-3xl text-navbar tracking-wider font-headerFont font-bold'>
                                    Driven by Precision
                                </h1>
                                <div className='h-1 bg-navbar w-20 mt-4'></div>
                            </div>
                            <div className='mt-6'>
                                <p className=' leading-relaxed lg:text-base text-sm text-body-second'>
                                    Our mission at TBT Machining is to deliver industry-leading 5-axis CNC machining, rapid prototyping, and tight-tolerance components for engineers and manufacturers across Fremont, Silicon Valley, and the greater Bay Area. We are dedicated to providing accuracy, consistency, and fast turnaround to support complex engineering requirements across aerospace, robotics, semiconductor, EV, and medical industries.
                                </p>
                            </div>
                            <div className=' mt-6 lg:mt-8 space-y-5 lg:space-y-8'>
                                {missionData.map((item, index) => (
                                    <div key={index} className='text-body-txt p-2 lg:p-0 cursor-pointer hover:opacity-55 items-center space-x-1 lg:space-x-2 flex shadow-lg rounded-2xl'>
                                        <div className='rounded-2xl h-fit p-px animate-border-rotate duration-500 ease-in-out transition-all bg-conic/[from_var(--border-angle)] from-white via-navbar to-white from-80% via-90% to-100%'>
                                            <div className=' rounded-2xl w-full h-full bg-white'>
                                                <Image className= 'object-cover w-28 lg:p-4 rounded-2xl' alt={item?.text} src={item?.icon} />
                                            </div>
                                        </div>
                                        <span className=' mx-2 text-body-txt text-sm lg:text-base'>
                                            {item?.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='lg:p-8 p-2'>
                            <Image className='object-cover rounded-2xl shadow-xl' src={missionMainImg} alt='TBT Machining Mission Page Image' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='lg:pt-24 pt-12 relative'>
                <Image className=' absolute w-28 lg:top-8 top-14 lg:w-52 left-2 lg:left-12' src={visionIconMain} alt='Main Icon For Vision Section' />
                <div className=' mx-auto max-w-screen-xl lg:px-0 px-4'>
                    <div className=' text-center flex flex-col justify-center items-center'>
                        <h1 className=' text-xl lg:text-3xl text-navbar tracking-wider font-headerFont font-bold'>
                            Shaping the Future of CNC Machining
                        </h1>
                        <div className=' h-1 bg-navbar w-28 mt-4'></div>
                        <div className='lg:w-3/4 mt-8'>
                            <p className='leading-relaxed lg:text-base text-sm text-body-second'>
                                Our vision is to become the Bay Area’s most trusted partner for advanced CNC manufacturing by expanding our multi-axis capabilities, investing in next-generation technology, and building long-term relationships with companies throughout Fremont, San Jose, Santa Clara, and Silicon Valley. We aim to set a new standard for innovation, precision, and customer experience in high-tech manufacturing.
                            </p>
                        </div>
                    </div>
                    <div className=' mx-2 lg:mx-0 mt-8 lg:mt-12 grid lg:grid-cols-4 gap-8'>
                        {visionData.map((item, index) => (
                            <div key={index} className=' transition-all ease-in-out duration-300 group hover:bg-navbar hover:shadow-xl cursor-pointer flex flex-col items-center text-center border border-navbar rounded-2xl bg-transparent p-2 lg:p-4'>
                                <div className=''>
                                    <Image alt='Icon for Vision' className='w-24 p-1 lg:p-2 group-hover:invert group-hover:brightness-0' src={item?.icon} />
                                </div>
                                <p className='text-body-txt font-medium group-hover:text-white text-sm lg:-translate-y-1'>
                                    {item?.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}
