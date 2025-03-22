"use client"

import React from 'react'
import Ellipse from './Ellipse'
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative lg:h-[700px] bg-black text-white flex flex-col items-center">
            <Ellipse />
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="my-60 h-[200px]">
                <h1 className="text-2xl font-bold text-center opacity-90">
                    At Renoweb, we are more than just a growth agency—we are your partners in building sustainable success.
                </h1>
                <div className="flex flex-col justify-center my-7">

                    <button className="bg-[#003FB9] px-10 py-2 rounded-xl border-3 border-[#3877F0]/60 hover:bg-[#3877F0] hover:border-[#003FB9] mx-auto opacity-95">
                        Contact Us
                    </button>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero