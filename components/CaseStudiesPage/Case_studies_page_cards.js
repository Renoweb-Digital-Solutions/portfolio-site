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
                delay: studies.id * 0.12,
            }}
            className="border-2 border-gray-700 rounded-3xl bg-transparent-50 p-5 flex flex-col justify-between h-full"
        >
            <div className="cursor-pointer">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3877F0]">
                    {studies.title}
                </h1>

                <div className="mt-3">
                    <p className="text-sm sm:text-sm md:text-base text-gray-400">
                        {studies.about_client}
                    </p>
                </div>
            </div>

            {/* Action row — placed at bottom and responsive */}
            <div
                className="mt-4 self-end flex items-center space-x-2 px-3 py-2 transition-transform duration-200 ease-in-out hover:scale-105 text-sm md:text-lg font-bold text-gray-300"
                onMouseEnter={onArrowHover}
                onMouseLeave={onArrowLeave}
            >
                <button className="focus:outline-none">Learn More</button>
                <FaArrowRight
                    className={`self-center transition-transform duration-200 ease-in-out ${arrowHover ? "translate-x-1" : ""
                        }`}
                />
            </div>
        </motion.div>
    );
};

export default Case_studies_page_cards;
