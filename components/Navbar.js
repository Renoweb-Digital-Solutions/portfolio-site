"use client"

import { useState } from 'react';
import Image from 'next/image'
import Button from './shared/Button'
import { motion, AnimatePresence } from 'framer-motion';
import isMobileView from './shared/isMobileView';
import { IoIosMenu, IoMdClose } from "react-icons/io";

const navbarVariants = {
    desktop: { y: 0, opacity: 1 },
    mobile: { y: 0, opacity: 1 }, // No animation for mobile
};

const dropdownVariants = {
    hidden: {
        opacity: 0,
        height: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    },
    visible: {
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

const Navbar = () => {
    const isMobile = isMobileView();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <motion.div
                variants={navbarVariants}
                initial={{ y: -100, opacity: 0 }}
                animate={isMobile ? "mobile" : "desktop"}
                transition={{ duration: isMobile ? 0 : 0.4, ease: "easeOut" }}
                className='bg-[#1D1A1A]/80 backdrop-blur-xl opacity-80 text-white md:rounded-lg md:border-4 md:border-[#3877F0]/20 md:bg-transparent-50 poppins-regular w-auto h-18 lg:w-[98%] md:mx-5 md:my-5 flex flex-row justify-between fixed top-0 left-0 right-0 z-50'
            >
                <div>
                    <Image src="/renowebLogo.png" width={70} height={70} alt='Renoweb logo' />
                </div>

                <div className='hidden md:flex md:flex-row md:space-x-10 lg:space-x-16 my-auto'>
                    <p className='cursor-pointer hover:text-[#3877F0] duration-300 ease-in'>Home</p>
                    <p className='cursor-pointer hover:text-[#3877F0] duration-300 ease-in'>Case-Studies</p>
                    <p className='cursor-pointer hover:text-[#3877F0] duration-300 ease-in'>Our-Blog</p>
                    <p className='cursor-pointer hover:text-[#3877F0] duration-300 ease-in'>Products</p>
                </div>

                <div className='md:hidden block my-auto p-5'>
                    {isMenuOpen ? (
                        <IoMdClose className='text-3xl cursor-pointer font-bold' onClick={toggleMenu} />
                    ) : (
                        <IoIosMenu className='text-3xl cursor-pointer font-bold' onClick={toggleMenu} />
                    )}
                </div>

                <div className='hidden md:block my-auto'>
                    <Button classname="duration-300 ease-in mr-3">Get in Touch</Button>
                </div>
            </motion.div>

            {/* Mobile dropdown menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className='md:hidden fixed top-[70px] left-0 right-0 bg-[#1D1A1A]/80 backdrop-blur-xl z-40 flex flex-col w-full text-white'
                    >
                        <div className='flex flex-col w-full'>
                            <p className='cursor-pointer hover:text-[#3877F0] duration-300 ease-in p-4'>Home</p>
                            <p className='cursor-pointer hover:text-[#3877F0] duration-300 ease-in p-4'>Case-Studies</p>
                            <p className='cursor-pointer hover:text-[#3877F0] duration-300 ease-in p-4'>Our-Blog</p>
                            <p className='cursor-pointer hover:text-[#3877F0] duration-300 ease-in p-4'>Products</p>
                            <div className='p-4'>
                                <Button classname="w-7/12 m text-center">Get in Touch</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar