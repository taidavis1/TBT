import React from 'react';
import Link from 'next/link';
import { IoDocumentTextOutline } from "react-icons/io5";


export const FloatBtn = () => {
    return (
        <div className='rounded-2xl z-200 h-fit p-px shadow-xl fixed bottom-4 right-2 lg:right-5 cursor-pointer animate-border-rotate duration-500 ease-in-out transition-all bg-conic/[from_var(--border-angle)] from-white via-navbar to-white from-80% via-90% to-100%">'>
            <Link
                target='__blank'
                href={"/presentation.pdf"} 
                rel='noreferrer noopener'
                className='lg:p-4 w-16 h-16 bg-white flex items-center justify-center rounded-2xl'
            >
                <IoDocumentTextOutline className='text-2xl lg:text-3xl text-btn-hover' />
            </Link>
        </div>
    )
}