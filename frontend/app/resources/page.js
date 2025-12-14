"use client";2
import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import faqIcon from "@/public/Icon/faqIcon.png";
import faqData from '@/components/FaqData';
import ResourcesSection from '@/components/ResourcesSection';

import IconFaq1 from "@/public/Icon/IconFaq/1.png";
import IconFaq2 from "@/public/Icon/IconFaq/2.png";
import IconFaq3 from "@/public/Icon/IconFaq/3.png";

export default function ResourcesPage() {

    const itemList = [
        {id: 1, name: "Precision CNC Services", img: IconFaq1},
        {id: 2, name: "Rapid CNC Prototyping", img: IconFaq2},
        {id: 3, name: "Materials & Inspection", img: IconFaq3},
    ]

    return (
        <div className=' pb-12 lg:pb-24'>
            <section className='h-[680px] polygon2 bg-[url("/bg/6.png")] lg:bg-fixed lg:h-[800px] bg-cover bg-no-repeat relative'>
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
                                        CNC Resources for Bay Area Engineers
                                    </h1>
                                </div>
                                <div className=''>
                                    <p className=' leading-relaxed text-white font-txtFont text-sm lg:text-xl'>
                                        Explore technical guides, machining insights, material recommendations, and industry resources tailored for engineers across Fremont, Silicon Valley, and the Bay Area. Our Resource Center helps you make informed decisions, improve prototype outcomes, and understand the capabilities of advanced 5-axis CNC machining.
                                    </p>
                                </div>
                            </div>
                            <div className=' hidden lg:flex w-1/2 flex-col space-y-4'>
                                {itemList.map((item) => (
                                    <div key={item?.id} className=' flex items-center rounded-full space-x-4 mt-2'>
                                        <div className=' transition-all duration-300 ease-in-out hover:bg-btn-hover group cursor-pointer w-20 bg-white p-2 rounded-full'>
                                            <Image src={item?.img} alt={item?.name} className=" group-hover:invert group-hover:brightness-0" />
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
            <section className='lg:pt-24 pt-12 relative'>
                <Image src={faqIcon} alt='Frequently Asked Question Page Icon' className=" absolute -top-16 lg:-top-12 right-4 lg:right-12 w-24 lg:w-32" />
                <div className='mx-auto max-w-screen-xl lg:px-0 px-4'>
                    <div className=' grid lg:grid-cols-2 gap-8'>
                        <ResourcesSection faqData={faqData} />
                    </div>
                </div>
            </section>
        </div>
    )
}
