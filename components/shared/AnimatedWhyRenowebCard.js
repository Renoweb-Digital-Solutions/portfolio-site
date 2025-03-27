"use client";

import { motion } from "framer-motion";
import WhyRenowebCard from "./WhyRenowebCard";

const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut", delay: i * 0.3 },
    }),
};

const AnimatedWhyRenowebCard = ({ index, title, description }) => {
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            className="md:hover:scale-105 duration-300 ease-in"
        >
            <WhyRenowebCard title={title} description={description} />
        </motion.div>
    );
};

export default AnimatedWhyRenowebCard;
