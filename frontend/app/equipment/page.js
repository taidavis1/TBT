"use client";

import React from 'react';
import {motion} from "motion/react";
import Image from "next/image";

import EquipmentIcon1 from "@/public/Icon/equipmentIcon/1.png";
import EquipmentIcon2 from "@/public/Icon/equipmentIcon/2.png";
import EquipmentIcon3 from "@/public/Icon/equipmentIcon/3.png";
import EquipmentIcon4 from "@/public/Icon/equipmentIcon/4.png";

import Equipment1 from "@/public/equipmentImg/1.png";
import Equipment2 from "@/public/equipmentImg/2.png";
import Equipment3 from "@/public/equipmentImg/3.png";
import Equipment4 from "@/public/equipmentImg/4.png";

import specsIcon from "@/public/Icon/specIcon.png";

import { MdCheckCircle } from 'react-icons/md';

export default function EquipmentPage() {

    const itemList = [
        {id: 1, name: "Doosan", img: EquipmentIcon1},
        {id: 2, name: "Hass", img: EquipmentIcon2},
        {id: 3, name: "YCM", img: EquipmentIcon3},
        {id: 4, name: "Zeiss", img: EquipmentIcon4}
    ];

    const equipmentData = [
        {id: 1, name: "Doosan DVF 5000", img: Equipment1, specs: [
            "20,000 RPM",
            "24.60 in",
            "17.70 in",
            "15.70 in"
        ]},
        {id: 2, name: "YCM NXV 1020A", img: Equipment2, specs: [
            "12,000 RPM/25 HP Spindle Motor (15,000)",
            "40.16 in",
            "20.47 in",
            "21.26 in"
        ]},
        {id: 3, name: "Hass UMC-750", img: Equipment3, specs: [
            "10,000 RPM",
            "30.00 in",
            "20.00 in",
            "20.00 in"
        ]},
        {id: 4, name: "Zeiss Spectrum", img: Equipment4, cmm: [
            "Bridge CMM in measuring room",
            "1.8+L/250 µm",
            "ZEISS LineScan One",
            "Step angle 5 degree - 5,184 possible positions"
        ]}
    ];

    const renderIndex = (index) => {
        if ((index + 1) % 2 !== 0) {
            return "lg:order-first";
        }
        else {
            return "lg:order-last";
        }
    };

    return (
        <div className=' pb-12 lg:pb-24'>
            <section className='h-[680px] polygon2 bg-[url("/bg/7.png")] lg:bg-fixed lg:h-[800px] bg-cover bg-no-repeat relative'>
                <div className=' w-full h-full img-test '>
                    <div className=' mx-auto max-w-screen-xl h-full'>
                        <motion.div
                            animate={{y: 0, opacity: 1}}
                            initial={{y: -100, opacity: 0}}
                            transition={{duration: 1, ease: "easeInOut" , type: "spring", stiffness: 100}}
                            className='flex h-full lg:flex-row flex-col gap-x-24 justify-center text-center lg:text-start lg:justify-evenly items-center'
                        >
                            <div className='space-y-8 w-full lg:space-y-12 flex flex-col'>
                                <div className={`mt-4`}>
                                    <h1 className= {`tracking-wide text-white uppercase font-headerFont font-bold text-2xl lg:text-4xl`}>
                                        Advanced CNC Equipment for High-Precision Machining
                                    </h1>
                                </div>
                                <div className='mx-2'>
                                    <p className=' leading-relaxed text-white font-txtFont lg:text-xl'>
                                        Explore the advanced 5-axis machines, milling centers, and inspection systems that power our precision CNC capabilities in Fremont. Our technology delivers tight-tolerance accuracy and reliable results for engineers across Silicon Valley and the Bay Area.
                                    </p>
                                </div>
                            </div>
                            <div className=' hidden w-1/2 lg:grid grid-cols-2 space-y-4'>
                                {itemList.map((item) => (
                                    <div key={item?.id} className={`flex items-center ${renderIndex(item?.id - 1)} rounded-full mt-2`}>
                                        <div className=' cursor-pointer w-28 rounded-full bg-white'>
                                            <Image src={item?.img} alt={item?.name} className=" p-2" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className='lg:pt-18'>
                <div className=' mx-auto max-w-screen-xl lg:px-0 px-4'>
                    <div className=' space-y-8'>
                        {equipmentData.map((item, index) => (
                            <motion.div 
                                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, type: "tween"}}
                                viewport={{amount: 0.3}}
                                className={`rounded-2xl relative cursor-pointer`}
                                key={index}
                            >
                                <div className=' grid items-center lg:grid-cols-2 gap-y-4 gap-x-5'>
                                    <div className={`${renderIndex(index)}`}>
                                        <Image src={item?.img} alt={item?.name} className=" w-full" />
                                    </div>
                                    <div className=' relative lg:p-0 p-4 lg:pt-4 lg:pb-4 shadow-xl rounded-2xl flex flex-col items-center space-y-4'>
                                        <Image src={specsIcon} className=' hidden lg:block absolute top-0 lg:-top-12 left-0 w-20 lg:w-32' alt='Specification ' />
                                        <div className='space-y-3 flex items-center flex-col'>
                                            <h1 className=' font-headerFont font-bold text-navbar tracking-wider text-xl lg:text-3xl'>{item?.name}</h1>
                                            <div className=' h-1 bg-navbar w-20'></div>
                                        </div>
                                        <div className=''>
                                            {item?.specs && item?.specs?.map((spec, index) => (
                                                <div key={index} className='flex items-center mt-4 space-x-4'>
                                                    <div className=''>
                                                        <MdCheckCircle className=' lg:text-lg text-emerald-500' />
                                                    </div>
                                                    <p className=' lg:text-lg text-body-txt'>
                                                        {index === 0 && `Max. Spindle Speed: ${spec}` }
                                                        {index === 1 && `X-Axis Travel Distance ${spec}` }
                                                        {index === 2 && `Y-Axis Travel Distance ${spec}` }
                                                        {index === 3 && `Z-Axis Travel Distance ${spec}` }
                                                    </p>
                                                </div>
                                            ))}

                                            {item?.cmm && item?.cmm?.map((spec, index) => (
                                                <div key={index} className='flex items-center mt-4 space-x-4'>
                                                    <div className=''>
                                                        <MdCheckCircle className=' lg:text-lg text-emerald-500' />
                                                    </div>
                                                    <p className=' lg:text-lg text-body-txt'>
                                                        {index === 0 && `Type: ${spec}` }
                                                        {index === 1 && `Accuracy: ${spec}` }
                                                        {index === 2 && `Optical Sensors: ${spec}` }
                                                        {index === 3 && `Angle Postion: ${spec}` }
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
