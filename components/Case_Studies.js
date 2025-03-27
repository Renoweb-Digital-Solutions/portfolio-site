"use client";

import { motion } from "framer-motion";
import CaseStudyCard from './shared/CaseStudyCard';

const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (index) => ({
        y: 0,
        opacity: 1,
        transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
    }),
};
const Case_Studies = () => {
    return (
        <div className='flex flex-row justify-center my-[250px] space-x-15'>
            <div className='text-white text-center self-center'>
                <motion.h3
                    whileInView="visible"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0}  // First element
                    className='font-bold text-2xl'
                >
                    Want to know more?
                </motion.h3>

                <motion.h4
                    whileInView="visible"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    custom={1}  // Second element
                    className='font-bold text-2xl'
                >
                    See the
                </motion.h4>

                <motion.h1
                    whileInView="visible"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    custom={2}  // Third element
                    className='text-[#3877F0] font-extrabold text-5xl cursor-pointer'
                >
                    CASE STUDIES
                </motion.h1>
            </div>
            <div>
                <CaseStudyCard />
            </div>
        </div>
    )
}

export default Case_Studies