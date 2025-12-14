"use client";

import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs} from 'swiper/modules';
import { MdKeyboardArrowRight , MdKeyboardArrowLeft, MdOutlineNavigateNext} from "react-icons/md";

import { Gallery, Item } from 'react-photoswipe-gallery';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'photoswipe/dist/photoswipe.css';

export const SwiperData = ({data, name, mode}) => {

    const gallerySwiperRef = React.useRef(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [slideActive, setSlideActive] = useState(0);

    const handleSlideClick = (slideName) => {
        setSlideActive(slideName);
        gallerySwiperRef.current?.slideTo(slideName);
    };
    const isSlideActive = (slideName) => {
        return slideActive === slideName ? "border-navbar border-r opacity-40 rounded-lg" : "";
    };

    const options = {	
        zoom: false,
        tapAction: 'close',
        doubleTapAction: false,
        wheelToZoom: true
	};

    const PrevArrow = ({Ref, Class}) => (
        <div onClick={() => Ref.current?.slidePrev()} className={`${Class} opacity-100 hover:opacity-50 lg:shadow-lg p-2 lg:bg-white absolute top-1/2 -left- lg:left-6 z-10 rounded-full cursor-pointer transition ease-in-out duration-300`}>
            <MdKeyboardArrowLeft className=' text-txt-header w-6 h-6' />
        </div>
    );
    const NextArrow = ({Ref, Class}) => (
        <div onClick={() => Ref.current?.slideNext()} className={`${Class} opacity-100 hover:opacity-50 lg:shadow-lg p-2 lg:bg-white absolute top-1/2 -right-2 lg:right-6 z-10 rounded-full cursor-pointer transition ease-in-out duration-300`}>
            <MdKeyboardArrowRight className=' text-txt-header w-6 h-6' />
        </div>
    );

    return (
        <>
            {!name && !mode &&
                <Swiper
                    loop={true}
                    spaceBetween={25}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        720: {
                            slidesPerView: 3,
                        }
                    }}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    speed={4500}
                    className={`lg:h-[500px] h-[350px] w-full relative`}
                    modules={[FreeMode, Navigation, Pagination, Autoplay]}
                >
                    {data.map((item, index) => (
                        <SwiperSlide className='rounded-2xl w-full relative transition-all duration-500 group cursor-pointer' key={index}>
                            <div className='flex relative rounded-2xl group-hover:drop-shadow-2xl group-hover:drop-shadow-red-300 flex-col items-center text-center'>
                                <Image className='rounded-2xl w-full' src={item?.icon} alt={item?.name} />
                                <div className='bg-transparent flex items-end justify-center group-hover:bg-black/20 rounded-2xl absolute w-full h-full top-0'>
                                    <h2 className=' lg:opacity-0 lg:group-hover:opacity-100 group-hover:translate-y-0 ease-in-out transition-all duration-500 translate-y-full text-white font-bold lg:text-2xl font-headerFont mb-18 lg:mb-8'>
                                        {item?.name}
                                    </h2>
                                </div>
                            </div>    
                        </SwiperSlide>
                    ))}
                </Swiper>
            }

            { name && mode === "image" &&
                <Gallery options={options}>
                    <Swiper
                        onSwiper={(swiper) => {
                            gallerySwiperRef.current = swiper
                        }}
                        onSlideChange={(swiper) => {
                            setSlideActive(swiper?.activeIndex);
                        }}
                        loop={true}
                        spaceBetween={20}
                        breakpoints={{
                            320: { slidesPerView: 1},
                            720: { slidesPerView: 3 , centeredSlides: false},
                        }}
                        navigation={{
                            nextEl: '.custom-swiper-gallery-next',
                            prevEl: '.custom-swiper-gallery-prev',
                        }}
                        speed={4500}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        className={`lg:h-[350px] relative w-full`}
                        modules={[Navigation, Autoplay]}
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index} className={`ease-in-out transition-all duration-500 group cursor-pointer p-2 border border-navbar aspect-square rounded-2xl`}>
                                <Item width={500} height={500} original={item} alt={`Our Works ${index}`}>
                                    {({ ref, open }) => (
                                        <Image fill onClick={open} ref={ref} src={item} alt={`Our Works ${index + 1}`} className='rounded-2xl p-8 w-full h-full hover:opacity-55 transition ease-in-out duration-500' />											
                                    )}
                                </Item>
                            </SwiperSlide>
                        ))}
                            <PrevArrow Class={"custom-swiper-gallery-next"} Ref={gallerySwiperRef} />
                            <NextArrow Class={"custom-swiper-gallery-prev"} Ref={gallerySwiperRef} />
                    </Swiper>
                </Gallery>
            }

            {name && (mode === "equipment" || mode === "Our Clients") && 
                <Gallery options={options}>
                    <Swiper
                        onSwiper={(swiper) => {
                            gallerySwiperRef.current = swiper
                        }}
                        onSlideChange={(swiper) => {
                            setSlideActive(swiper?.activeIndex);
                        }}
                        loop={true}
                        spaceBetween={20}
                        breakpoints={{
                            320: { slidesPerView: mode === "equipment" ? 1: 2},
                            720: { slidesPerView: mode === "equipment" ? 1: 3 , centeredSlides: false},
                        }}
                        navigation={{
                            nextEl: '.custom-swiper-gallery-next',
                            prevEl: '.custom-swiper-gallery-prev',
                        }}
                        speed={4500}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        className={`${mode === "equipment" ? "lg:h-[600px]" : "lg:h-[300px]"} relative w-full`}
                        modules={[Autoplay]}
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index} className={`ease-in-out transition-all duration-500 group cursor-pointer aspect-square rounded-2xl`}>
                                <Item width={mode === "equipment" ? 600 : 400} height={mode === "equipment" ? 600 : 400} original={mode === "equipment" ? item?.img : item} alt={`Our Works ${index}`}>
                                    {({ ref, open }) => (
                                        <Image fill onClick={open} ref={ref} src={mode === "equipment" ? item?.img : item} alt={`${mode === "equipment"? `Our Works ${index + 1}` : "Our Clients's Company Logo"}`} className= {`rounded-2xl w-full  h-full ${mode === "equipment" ? "object-cover p-[4px]" : "lg:p-8"} ${mode !== "equipment" &&  index === 3 && "brightness-50"} hover:opacity-55 transition ease-in-out duration-500`} />											
                                    )}
                                </Item>
                                {mode === "equipment" && 
                                    <div className={`w-full h-full rounded-2xl ${index === 3 && ""} ${index === 0 && "lg:-translate-y-12"} font-headerFont flex justify-center items-end`}>
                                        {index === 0 && <h1 className=' text-body-second lg:text-2xl font-bold '>Doosan DVF 5000</h1>}
                                        {index === 1 && <h1 className=' text-body-second lg:text-2xl font-bold '>YCM NXV 1020A</h1>}
                                        {index === 2 && <h1 className=' text-body-second lg:text-2xl font-bold '>Hass UMC-750</h1>}
                                        {index === 3 && <h1 className=' text-body-second lg:text-2xl font-bold '>Zeiss Spectrum</h1>}
                                    </div>
                                }
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Gallery>
            }

            </>
    )
}