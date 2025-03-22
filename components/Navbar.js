"use client"

import Image from 'next/image'
import React from 'react'
import Button from './shared/Button'
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.div initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className='bg-[#1D1A1A] opacity-80 text-white  rounded-xl border-4 border-[#3877F0]/20 poppins-regular h-18 w-[98%] mx-5 my-5 flex flex-row justify-between fixed top-0 left-0 right-0 z-50'>

            <div>
                <Image src="/renowebLogo.png" width={70} height={70} alt='Renoweb logo' />
            </div>

            <div className='flex flex-row space-x-16 my-auto'>
                <p>Home</p>
                <p>Case-Studies</p>
                <p>Our-Blog</p>
                <p>Products</p>
            </div>
            <Button>Get in Touch</Button>
        </motion.div>

    )
}

export default Navbar