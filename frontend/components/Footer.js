"use client";

import React from 'react'
import {IoPhonePortraitOutline, IoLocationOutline, IoMailOutline} from "react-icons/io5";
import Link from 'next/link';
import ServicesData  from '@/components/ServicesData';
import { usePathname } from 'next/navigation';

export default function Footer() {

    const pathNames = usePathname();

    return (
        pathNames !== "/reviews" &&
            <div className='relative bg-footer/80 pb-24 font-lato'>
                <svg
                    className="absolute text-[#4c4c4d] -mt-5 sm:-mt-8 top-0 w-full h-6 sm:h-12"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 54"
                >
                    <path
                        fill="currentColor"
                        d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                    />
                </svg>
                <div className='lg:pt-24 pt-12 lg:px-0 px-2 mx-auto max-w-screen-xl'>
                    <div className=' flex flex-col items-center justify-center space-y-8 lg:space-y-8'>
                        <Link target='__blank' rel='noreferrer' href="mailto:office@tbtmachining.com" className=' hover:bg-navbar transition ease-in-out duration-500 text-white border px-12 py-3 border-navbar rounded-3xl uppercase font-semibold'>
                            Request A Quote
                        </Link>
                        <div className=' text-center'>
                            <span className=' font-headerFont font-bold text-2xl lg:text-4xl leading-tight text-white '>
                                TBT Machining – Your Bay Area Partner for Precision CNC Solutions
                            </span>
                        </div>
                        <p className="text-white text-sm lg:text-xl max-w-3xl text-center mx-auto">
                            Delivering high-precision prototypes, 5-axis machining, CNC milling, and quality inspection for engineers and companies across Fremont, San Jose, Silicon Valley, and the entire Bay Area. Contact us today to get accurate, reliable, and production-ready CNC parts for your next project.                    
                        </p>
                    </div>
                </div>
                <div className=' pt-8 lg:px-0 px-4 lg:pt-12 pb-12 mx-auto max-w-screen-xl'>
                    <div className=' grid lg:grid-cols-4 grid-cols-2 lg:items-center gap-8'>
                        <div className=' flex flex-col'>
                            <h2 className=' text-white font-bold text-lg font-headerFont lg:text-2xl mb-2 lg:mb-4'>
                                About
                            </h2>
                            <Link href={"/"} className=' hover:underline lg:text-lg text-sm text-white mb-2 lg:mb-4'>
                                Home
                            </Link>
                            <Link href={"/about"} className='hover:underline lg:text-lg text-sm text-white mb-2 lg:mb-4'>
                                About Us
                            </Link>
                            <Link href={"/equipment"} className='hover:underline lg:text-lg text-sm text-white mb-2 lg:mb-4'>
                                Equipment
                            </Link>
                            <Link href={"/resources"} className='hover:underline lg:text-lg text-sm text-white mb-2 lg:mb-4'>
                                Resources
                            </Link>
                        </div>
                        <div className=' flex flex-col'>
                            <h2 className=' font-bold text-white text-lg font-headerFont lg:text-2xl mb-2 lg:mb-4'>
                                Services
                            </h2>
                            {ServicesData.map((service) => (
                                <Link key={service?.name} href={"/#services"} className=' hover:underline lg:text-lg text-sm text-white mb-2 lg:mb-4'>
                                    {service?.name}
                                </Link>
                            ))}
                        </div>
                        <div id='open-hours' className=''>
                            <h2 className=' font-bold font-headerFont text-white text-lg lg:text-2xl mb-2 lg:mb-4'>
                                Resources
                            </h2>
                            <div className='flex lg:text-lg text-sm flex-col'>
                                <span className=' text-white mb-4'>Monday - Sunday</span>
                                <span className=' text-white mb-4'>8:00AM - 5:00PM</span>
                                <Link target='_blank' rel='noreferrer' href={"/resources"} className=' text-white mb-4'>
                                    FAQ
                                </Link>
                            </div>
                        </div>
                        <div className=' flex flex-col'>
                            <h2 className=' font-headerFont font-bold text-white text-lg lg:text-2xl mb-2 lg:mb-4'>
                                Contact
                            </h2>
                            <ul className=' text-white space-y-2 lg:space-y-4 text-sm lg:text-lg list-inside'>
                                <li>
                                    <Link href="tel:6697777797" className=' transition inline-flex space-x-1 items-center hover:underline'>
                                        <IoPhonePortraitOutline className='w-5 hidden lg:block h-5' />
                                        <span>(669) 777-7797</span>
                                    </Link>
                                </li>
                                <li className=' text-sm lg:text-lg'>
                                    <Link href="mailto:office@tbtmachining.com" className=' lg:w-max transition inline-flex items-center space-x-1 hover:underline'>
                                        <IoMailOutline className='w-5 hidden lg:block h-5' />
                                        <span className=''>
                                            office@tbtmachining.com
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/52yyhDJPuPzPB1ih7" className='lg:w-max transition inline-flex items-center space-x-1 hover:underline'>
                                        <IoLocationOutline className='w-5 hidden lg:block h-5' />
                                        <span className='lg:w-2/3'>
                                            45979 Warm Springs Blvd, Unit 3 Fremont, CA 94539
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className='border border-gray-200 lg:mx-24'></hr>
                <div className='lg:pt-12 pt-6 mx-auto max-w-screen-xl'>
                    <div className=' lg:flex-row flex-col flex lg:justify-between lg:gap-y-0  gap-y-4'>
                        <div className='inline-flex justify-center lg:justify-start lg:order-1 order-2 text-base lg:text-lg text-white space-x-1'>
                            <span>
                                © {new Date().getFullYear()}
                            </span>
                            <Link className='hover:underline font-bold text-white' href='/'>TBT MACHINING </Link>
                            <span>All rights reserved.</span>
                        </div>
                        <div className='lg:text-xl lg:order-2 order-1 text-base lg:justify-start justify-center inline-flex lg:items-start text-white space-x-4'>
                            <span>
                                TBT Machining - Fremont 94539
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    )
}