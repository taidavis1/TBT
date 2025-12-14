"use client";

import React from 'react';

import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, EffectFade} from 'swiper/modules';
import {motion} from "motion/react";

import Image from 'next/image';
import Carousel1 from "@/public/Carousel/1.png";
import Carousel2 from "@/public/Carousel/2.png";
import Carousel3 from "@/public/Carousel/3.png";

import ItarCer from "@/public/Cer/1.png";
import IsoCer from "@/public/Cer/2.png";

import 'swiper/css';
import 'swiper/css/bundle';
import Link from 'next/link';
export const HomeCarousel = () => {

    const carouselData = [
        {
            id: 1,
            img: Carousel1,
            name: "Precision 5-Axis CNC Machining",
            desc: "High-precision 5-axis machining for complex parts across aerospace, robotics, semiconductor, medical, and Bay Area manufacturing industries."
        },
        {
            id: 2,
            img: Carousel2,
            name: "High-Tolerance CNC Manufacturing",
            desc: "We machine tight-tolerance metal components trusted by companies in Fremont, Silicon Valley, and the entire Bay Area."
        },
        {
            id: 3,
            img: Carousel3,
            name: "Advanced CNC Programming & Multi-Axis Milling",
            desc: "Expert CAM programming and multi-axis machining for complex geometries, serving diverse Bay Area industries from prototype to production."
        },
    ];

    const CerData = [
        {
            img: ItarCer,
        },
        {
            img: IsoCer,
        },
    ]

    return (
        <Swiper
            loop={true}
            initialSlide={0}
            effect="fade"
            autoplay={{
                disableOnInteraction: false,
                pauseOnMouseEnter: false
            }}
            lazyPreloadPrevNext={1}
            lazyPreloaderClass='swiper-lazy-preloader'
            speed={4500}
            modules={[Autoplay, EffectFade]}
            
            className="w-screen h-screen lg:h-[900px]"
        >
            {carouselData.map((item) => {
                return (
                    <SwiperSlide className=' relative' key={item.id}>
                        <Image src={item?.img} alt={item?.name} className=' animate-zoom w-full h-full object-center object-cover' />
                        <div className=' absolute bg-black/40 w-full h-full top-0 left-0'>
                            <div className='mx-auto lg:px-0 px-4 max-w-screen-xl h-full'>
                                <motion.div
                                    animate={{y: 0, opacity: 1}}
                                    initial={{y: -100, opacity: 0}}
                                    transition={{duration: 1, ease: "easeInOut" , type: "spring", stiffness: 100}}
                                    className='flex h-full flex-col space-y-8 lg:space-y-8 lg:justify-center justify-center lg:items-start mt-4 items-center lg:text-start text-center'
                                >
                                    <div className={`lg:w-2/3`}>
                                        <h1 className= {`tracking-wider text-white font-headerFont font-bold text-2xl lg:text-5xl`}>
                                            {item?.name}
                                        </h1>
                                    </div>
                                    <div className=' lg:w-2/3'>
                                        <p className=' leading-relaxed text-white font-txtFont text-base lg:text-2xl'>
                                            {item?.desc}
                                        </p>
                                    </div>
                                    <div className=' flex space-x-8 translate-y-5'>
                                        <Link href={"/#services"} className=' transition duration-500 ease-in-out hover:bg-btn-hover hover:shadow-xl text-white border-b border-b-navbar rounded-full text-center lg:text-lg w-[150px] lg:w-[165px] py-3'>
                                            View Services
                                        </Link>
                                        <Link href={"tel:6697777797"} className=' transition duration-300 ease-in-out hover:opacity-55 text-white bg-body-second rounded-full text-center lg:text-lg w-[150px] lg:w-[165px] py-3'>
                                            Contact Us
                                        </Link>
                                    </div>
                                    <div className=' lg:hidden translate-y-4 flex items-center'>
                                        <Image src={ItarCer} alt={""} className=' cursor-pointer hover:opacity-55 w-[158px] h-[150px] lg:w-[180px] translate-x-8 lg:h-[180px] object-cover' />
                                        <Image src={IsoCer} alt={""} className=' cursor-pointer hover:opacity-55 w-[145px] h-[145px] lg:w-[150px] lg:h-[150px] object-cover' />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <div className=' lg:block hidden absolute bottom-12 lg:bottom-18 lg:translate-y-0 sm:translate-y-12 translate-x-8 lg:right-1/6 lg:translate-x-24'>
                            <div className=' flex items-center'>
                                <Image src={ItarCer} alt={""} className=' cursor-pointer lg:p-0 sm:p-4 hover:opacity-55 w-[160px] h-[160px] lg:w-[180px] translate-x-6 lg:h-[180px] object-cover' />
                                <Image src={IsoCer} alt={""} className=' cursor-pointer lg:p-0 sm:p-4 hover:opacity-55 w-[148px] h-[148px] lg:w-[150px] lg:h-[150px] object-cover' />
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}