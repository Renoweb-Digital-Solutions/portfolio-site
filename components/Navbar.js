// "use client"

// import { useState } from 'react';
// import Image from 'next/image'
// import Button from './shared/Button'
// import { motion, AnimatePresence } from 'framer-motion';
// import { IoIosMenu, IoMdClose } from "react-icons/io";
// import Link from 'next/link';
// import useMobileView from './shared/useMobileView';


// const navbarVariants = {
//     desktop: { y: 0, opacity: 1 },
//     mobile: { y: 0, opacity: 1 }, // No animation for mobile
// };

// const dropdownVariants = {
//     hidden: {
//         opacity: 0,
//         height: 0,
//         transition: {
//             duration: 0.3,
//             ease: "easeInOut"
//         }
//     },
//     visible: {
//         opacity: 1,
//         height: "auto",
//         transition: {
//             duration: 0.3,
//             ease: "easeInOut"
//         }
//     }
// };

// const Navbar = () => {
//     const isMobile = useMobileView();
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <>
//             <motion.div
//                 variants={navbarVariants}
//                 initial={{ y: -100, opacity: 0 }}
//                 animate={isMobile ? "mobile" : "desktop"}
//                 transition={{ duration: isMobile ? 0 : 0.4, ease: "easeOut" }}
//                 className='bg-[#1D1A1A]/80 backdrop-blur-xl opacity-80 text-white md:rounded-lg md:border-4 md:border-[#3877F0]/20 md:bg-transparent-50 poppins-regular w-auto h-18 lg:w-[98%] md:mx-5 md:my-5 flex flex-row justify-between fixed top-0 left-0 right-0 z-50'
//             >
//                 <Link href="/">
//                     <Image src="/renoweb_logo_2.png" width={70} height={70} alt='Renoweb logo' className='w-[50px] h-[50px] mt-3 md:mt-2 ml-5' />
//                 </Link>

//                 <div className='hidden md:flex md:flex-row md:space-x-10 lg:space-x-16 my-auto'>
//                     <Link href="/">
//                         <p className='cursor-pointer hover:text-[#3877F0] duration-300 ease-in'>Home</p>
//                     </Link>
//                     <Link href="/case-studies">
//                         <p className='cursor-pointer hover:text-[#3877F0] duration-300 ease-in'>Case-Studies</p>
//                     </Link>
//                     <p className='cursor-pointer hover:text-[#3877F0] duration-300 ease-in'>Our-Blog</p>
//                     <Link href="/products" className='cursor-pointer hover:text-[#3877F0] duration-300 ease-in'>Products</Link>
//                     <Link href="/pricing">
//                         <p className='cursor-pointer hover:text-[#3877F0] duration-300 ease-in'>Pricing</p>
//                     </Link>
//                 </div>

//                 <div className='md:hidden block my-auto p-5'>
//                     {isMenuOpen ? (
//                         <IoMdClose className='text-3xl cursor-pointer font-bold' onClick={toggleMenu} />
//                     ) : (
//                         <IoIosMenu className='text-3xl cursor-pointer font-bold' onClick={toggleMenu} />
//                     )}
//                 </div>

//                 <div className='hidden md:block my-auto'>
//                     <Link href="/contact-us" >
//                         <Button classname="duration-300 ease-in mr-3">Get in Touch</Button>
//                     </Link>

//                 </div>
//             </motion.div>

//             {/* Mobile dropdown menu */}
//             <AnimatePresence>
//                 {isMenuOpen && (
//                     <motion.div
//                         variants={dropdownVariants}
//                         initial="hidden"
//                         animate="visible"
//                         exit="hidden"
//                         className='md:hidden fixed top-[70px] left-0 right-0 bg-[#1D1A1A]/80 backdrop-blur-xl z-40 flex flex-col w-full text-white'
//                     >
//                         <div className='flex flex-col w-full'>
//                             <Link href="/" className='cursor-pointer hover:text-[#3877F0] duration-300 ease-in p-4' onClick={toggleMenu}>Home</Link>
//                             <Link href="/case-studies" className='cursor-pointer hover:text-[#3877F0] duration-300 ease-in p-4' onClick={toggleMenu}>Case-Studies</Link>
//                             <p className='cursor-pointer hover:text-[#3877F0] duration-300 ease-in p-4' onClick={toggleMenu}>Our-Blog</p>
//                             <Link href="/products" className='cursor-pointer hover:text-[#3877F0] duration-300 ease-in p-4' onClick={toggleMenu}>Products</Link>
//                             <Link href="/pricing" onClick={toggleMenu}>
//                                 <p className='cursor-pointer hover:text-[#3877F0] duration-300 ease-in p-4'>Pricing</p>
//                             </Link>
//                             <div className='p-4' onClick={toggleMenu}>
//                                 <Link href="/contact-us" >
//                                     <Button classname="w-7/12 m text-center">Get in Touch</Button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </>
//     )
// }

// export default Navbar

"use client"

import { useState } from 'react'
import Image from 'next/image'
import Button from './shared/Button'
import { motion, AnimatePresence } from 'framer-motion'
import { IoIosMenu, IoMdClose } from "react-icons/io"
import Link from 'next/link'
import useMobileView from './shared/useMobileView'

const Navbar = () => {
    const isMobile = useMobileView()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isResourcesOpen, setIsResourcesOpen] = useState(false)

    return (
        <>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: isMobile ? 0 : 0.4, ease: "easeOut" }}
                className="bg-[#1D1A1A]/80 backdrop-blur-xl text-white md:rounded-lg md:border-4 md:border-[#3877F0]/20 w-auto h-18 lg:w-[98%] md:mx-5 md:my-5 flex items-center justify-between px-4 md:px-0
 fixed top-0 left-0 right-0 z-50"
            >
                {/* Logo */}
                <Link href="/">
                    <Image src="/renoweb_logo_2.png" width={70} height={70} alt="Renoweb logo" className="w-[50px] h-[50px] mt-3 md:mt-2 ml-2 md:ml-5"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-10 lg:space-x-16">
                    <Link href="/" className="hover:text-[#3877F0] transition">Home</Link>



                    <Link href="/products" className="hover:text-[#3877F0] transition">Products</Link>
                    <Link href="/pricing" className="hover:text-[#3877F0] transition">Pricing</Link>
                    {/* Resources Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsResourcesOpen(true)}
                        onMouseLeave={() => setIsResourcesOpen(false)}
                    >
                        <span className="cursor-pointer hover:text-[#3877F0] transition flex items-center gap-1">
                            Resources
                            <span className="text-xs opacity-70"></span>
                        </span>

                        <AnimatePresence>
                            {isResourcesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-8 left-0 bg-[#0F0F0F] border border-[#3877F0]/20 rounded-xl shadow-xl min-w-[180px] overflow-hidden"
                                >
                                    <Link href="/case-studies" className="block px-5 py-3 text-sm hover:bg-[#3877F0]/10 transition">Case Studies</Link>
                                    <Link href="/blog" className="block px-5 py-3 text-sm hover:bg-[#3877F0]/10 transition">Blog</Link>
                                    <Link href="/research-hub" className="block px-5 py-3 text-sm hover:bg-orange-500/10 transition text-orange-400/80 hover:text-orange-300">Research Hub 📡</Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <Link href="/Recap2025" className="relative group mr-2">
                        <span className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-[#3877F0] via-[#5B8CFF] to-[#3877F0] opacity-40 blur-md group-hover:opacity-70 transition"></span>
                        <span className="relative px-5 py-2 rounded-full bg-[#0F0F0F] border border-[#3877F0]/40 text-sm font-medium text-white tracking-wide group-hover:border-[#3877F0] transition">
                            Recap ✨
                        </span>
                    </Link>

                </div>



                {/* Desktop CTA */}
                <div className="hidden md:flex items-center mr-3">
                    <Link href="/contact-us">
                        <Button classname="duration-300 ease-in">Get in Touch</Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden my-auto p-3">

                    {isMenuOpen ? (
                        <IoMdClose className="text-3xl cursor-pointer" onClick={() => setIsMenuOpen(false)} />
                    ) : (
                        <IoIosMenu className="text-3xl cursor-pointer" onClick={() => setIsMenuOpen(true)} />
                    )}
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed top-[70px] left-0 right-0 bg-[#1D1A1A]/90 backdrop-blur-xl z-40 text-white"
                    >
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-6 py-4 hover:text-[#3877F0]">Home</Link>


                        {/* Mobile Resources */}
                        <div className="px-6 py-4">
                            <div onClick={() => setIsResourcesOpen(!isResourcesOpen)} className="flex justify-between items-center cursor-pointer hover:text-[#3877F0]">
                                <span>Resources</span>
                                <span className="text-xs">⌄</span>
                            </div>

                            <AnimatePresence>
                                {isResourcesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-2 ml-3 border-l border-[#3877F0]/20"
                                    >
                                        <Link href="/case-studies" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm hover:text-[#3877F0]">Case Studies</Link>
                                        <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm hover:text-[#3877F0]">Blog</Link>
                                        <Link href="/research-hub" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-orange-400/80 hover:text-orange-300">Research Hub 📡</Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/products" onClick={() => setIsMenuOpen(false)} className="block px-6 py-4 hover:text-[#3877F0]">Products</Link>
                        <Link href="/pricing" onClick={() => setIsMenuOpen(false)} className="block px-6 py-4 hover:text-[#3877F0]">Pricing</Link>

                        <div className="px-6 py-6">
                            <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>
                                <Button classname="w-full">Get in Touch</Button>
                            </Link>
                        </div>
                        <Link href="/Recap2025" onClick={() => setIsMenuOpen(false)} className="mx-6 my-3">
                            <div className="relative group px-3">
                                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#3877F0] to-[#5B8CFF] opacity-40 blur-md"></div>
                                <div className="relative px-4 py-3 rounded-xl bg-[#0F0F0F] border border-[#3877F0]/40 text-center text-white font-medium">
                                    ✨ Recap 2025
                                </div>
                            </div>
                        </Link>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
