"use client";

import React, {useState} from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Link from 'next/link';
import Image from 'next/image';

export default function ResourcesSection({length , faqData}) {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        !length ?
            faqData.map((item, index) => (
                <div key={index} className="bg-transparent h-fit rounded-2xl shadow-lg border border-btn-hover overflow-hidden">
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="flex justify-between items-center w-full group p-4 lg:p-6 text-left cursor-pointer hover:bg-btn-hover transition-colors duration-500 group"
                    >
                        <span className="lg:text-lg text-sm font-headerFont font-bold group-hover:text-white pr-6 text-left flex-1">
                            {item.question}
                        </span>
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                            <motion.span
                                animate={{ rotate: openIndex === index ? 45 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-btn-hover text-base lg:text-xl font-bold group-hover:text-white"
                            >
                                {openIndex === index ? '−' : '+'}
                            </motion.span>
                        </div>
                    </button>
    
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="lg:px-6 px-4 pb-6 lg:pt-2"> {/* Reduced top padding */}
                                    <p className="text-body-second  lg:text-base text-sm leading-relaxed text-left">
                                        {item.answer}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))
        : 

        <div className="lg:space-y-8 space-y-4 w-full">
            {faqData.slice(0,4).map((item, index) => (
                <div key={index} className="hover:bg-btn-hover group rounded-2xl shadow-lg border border-btn-hover overflow-hidden">
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="flex justify-between items-center w-full p-6 text-left cursor-pointer hover:bg-btn-hover transition-colors duration-500 group"
                    >
                        <span className="lg:text-base text-sm font-headerFont lg:font-semibold group-hover:text-white pr-6 text-left flex-1">
                            {item?.question}
                        </span>
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                            <motion.span
                                animate={{ rotate: openIndex === index ? 45 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-base text-navbar lg:text-xl font-bold group-hover:text-white"
                            >
                                {openIndex === index ? '−' : '+'}
                            </motion.span>
                        </div>
                    </button>
    
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-6 lg:pt-2"> {/* Reduced top padding */}
                                    <p className="text-body-second lg:text-base text-sm group-hover:text-white leading-relaxed text-left">
                                        {item.answer}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>

    )
}