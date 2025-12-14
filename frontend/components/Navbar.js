"use client";

import React, {useState} from 'react';
import Logo from "@/public/Logo.png";
import Image from 'next/image';
import { setActiveTab } from '@/redux/ActiveTabSlice';
import { useSelector, useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HiBars3BottomLeft, HiMiniXMark } from "react-icons/hi2";

export const Navbar = () => {

    const [Scroll, SetScroll] = React.useState(false);

	const [isOpen, setIsOpen] = useState(false);

    const activeTab = useSelector((state) => state.activeTab.value);

    const dispatch = useDispatch();

	const isActive = React.useCallback(
        (tabName) => activeTab === tabName ? 'lg:border-t text-white font-semibold lg:border-t-white' : "t-underline hover:opacity-60",
        [activeTab]
    );

    const pathNames = usePathname();

    React.useEffect(() => {
        dispatch(setActiveTab(pathNames));
    }, [pathNames, dispatch]);

    React.useEffect(() => {
        const Change_color = () => {
            if (window.scrollY >= 10) {
                SetScroll(true);
            }
            else { SetScroll(false); }
        };
        window.addEventListener("scroll", Change_color);
    }, []);

    const navData = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Services",
            link: "/#services",
        },
        {
            name: "Equipment",
            link: "/equipment",
        },
        {
            name: "Resources",
            link: "/resources",
        },
    ];

    return (
        <div className="fixed top-0 inset-x-0 z-150">
			<div className={` ${Scroll ? "bg-navbar/90" : " bg-transparent"} text-white px-2 lg:px-0 transition-all duration-500 ease-in-out`}>
                <div className=' lg:px-0 px-1 mx-auto max-w-screen-xl'>
                    <div className=' flex justify-between items-center'>
                        <div className=' flex cursor-pointer'>
                            <Image className={`${Scroll? "lg:w-24 w-20 invert brightness-0": "lg;w-56 w-32 brightness-150"} transition-all duration-500 ease-in-out`} src={Logo} alt='TBT Machining Logo' />
                        </div>
                        <div onClick={() => setIsOpen(!isOpen)} className={`${isOpen? 'pointer-events-none' : ''} lg:hidden cursor-pointer`}>
							<HiBars3BottomLeft className={`text-3xl ${isOpen? 'opacity-0' : 'opacity-100'} ${Scroll? "text-txt-color" : "text-white"} transition-all duration-500`} />
                        </div>
                        <div className=' hidden lg:flex font-nav font-semibold space-x-20 items-center'>
                            {navData.map((data, index) => (
                                <Link key={index} href={data.link} className={`${isActive(data?.link)} py-2 cursor-pointer text-xl`}>
                                    {data.name}
                                </Link>
                            ))}
                        </div>
                        <Link href={"mailto:office@tbtmachining.com"} className={`w-[165px] lg:block hidden transition-all duration-500 ease-in-out ${Scroll? " border border-white hover:bg-white hover:text-navbar" : "bg-btn-hover hover:opacity-50"} rounded-xl text-center py-3`}>
                            Request A Quote
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`fixed top-0 right-0 w-2/3 h-full text-white lg:hidden ${isOpen? "translate-x-0": " translate-x-full"} transition-all duration-1000 ease-in-out bg-navbar/90`}>
                <div className=' relative'>
                    <HiMiniXMark onClick={() => setIsOpen(!open)} className={` ${isOpen? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} text-white text-3xl transition-all duration-500 ease-in-out absolute top-4 right-2 cursor-pointer`} />
                </div>
                <div className="flex flex-col mt-14 space-y-4 h-full text-white">
                    <div className='flex flex-col space-y-4'>
                        {navData.map((data, index) => (
                            <Link 
                                key={index}
                                href={data?.link}
                                onClick={() => setIsOpen(false)}
                                className="text-lg py-4 hover:opacity-50 transition border-b px-6 duration-500 ease-in-out"
                            >
                                {data?.name}
                            </Link>
                        ))}
                    </div>
                    <div className=' flex mt-12 justify-center items-center'>
                        <Link href={"mailto:office@tbtmachining.com"} className={`w-[165px] transition-all duration-500 text-white ease-in-out border border-white rounded-xl text-center py-3`}>
                            Request A Quote
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}