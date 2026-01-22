"use client";

import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid} from 'swiper/modules';
import { MdKeyboardArrowRight , MdKeyboardArrowLeft} from "react-icons/md";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';


export const SwiperServices = ({data}) => {

    const servicesSwiperRef = React.useRef(null);
    const PrevArrow = ({Ref, Class}) => (
            <div onClick={() => Ref.current?.slidePrev()} className={`${Class} opacity-100 z-20 hover:opacity-50 lg:shadow-lg p-2 bg-white text-navbar absolute top-1/2 left-2 lg:left-6  rounded-full cursor-pointer transition ease-in-out duration-300`}>
                <MdKeyboardArrowLeft className=' text-txt-header w-6 h-6' />
            </div>
        );
    const NextArrow = ({Ref, Class}) => (
        <div onClick={() => Ref.current?.slideNext()} className={`${Class} opacity-100 z-20 hover:opacity-50 lg:shadow-lg p-2 bg-white absolute text-navbar top-1/2 right-2 lg:right-6 rounded-full cursor-pointer transition ease-in-out duration-300`}>
            <MdKeyboardArrowRight className=' text-txt-header w-6 h-6' />
        </div>
    );

    return (

        <Swiper
            slidesPerView={2}
            spaceBetween={10}
            speed={2500}
            grid={{
                rows: 2,
            }}
            navigation={{
                nextEl: '.custom-swiper-services-next',
                prevEl: '.custom-swiper-services-prev',
            }}
            className={`h-full w-full relative`}
            modules={[Grid , Navigation]}
        >

            {data.map((item, index) => (
                <SwiperSlide key={index} className=" rounded-2xl group cursor-pointer relative">
                    <Image src={item?.img} alt={item?.name} className=" group-hover:brightness-100 transition ease-in-out duration-400 brightness-80 rounded-2xl w-full h-full" />
                    <div className="absolute lg:group-hover:translate-y-24 transition-all duration-500 ease-in-out group-hover:opacity-0 img-test2 rounded-2xl w-full h-full top-0">
                        <div className=" h-full translate-y-4 flex items-center justify-center text-center">
                            <h2 className=" text-white font-headerFont text-sm lg:text-2xl">
                                {item?.name}
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            <PrevArrow Class={"custom-swiper-services-prev"} Ref={servicesSwiperRef} />
            <NextArrow Class={"custom-swiper-services-next"} Ref={servicesSwiperRef} />
        </Swiper>
    )
};