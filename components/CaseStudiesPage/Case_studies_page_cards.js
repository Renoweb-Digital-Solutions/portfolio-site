"use client"
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react"

const Case_studies_page_cards = ({ studies }) => {
    const [arrowHover, setArrowHover] = useState(false);

    const onArrowHover = () => {
        setArrowHover(true);
    };

    const onArrowLeave = () => {
        setArrowHover(false);
    };
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.5,
                delay: studies.id * 0.2, // This creates the staggered effect
            }}
            className='border-2 border-gray-700 rounded-3xl bg-transparent-50 p-5 relative h-[230px]'>
            <div className="mb-5 cursor-pointer">
                <h1 className="text-3xl font-bold text-[#3877F0]">
                    {studies.title}
                </h1>
            </div>
            <div className="mt-5">
                <p className="text-sm text-gray-400">
                    {studies.about_client}
                </p>
            </div>

            <div className="absolute right-5 bottom-0 font-bold text-gray-300 flex flex-row space-x-2 px-7 py-5 transition delay-150 duration-300 ease-in-out hover:scale-105 text-lg" onMouseEnter={onArrowHover} onMouseLeave={onArrowLeave}>
                <button>Learn More</button>
                <FaArrowRight className={`self-center ${arrowHover ? 'transition delay-150 duration-300 ease-in-out translate-x-0.5' : ''}`} />
            </div>
        </motion.div>
    )
}

export default Case_studies_page_cards
