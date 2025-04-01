"use client";

import { motion } from "framer-motion";
import WhyRenowebCard from "./WhyRenowebCard";

const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 0.2, ease: "easeOut", delay: i * 0.2 },
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
            className="md:hover:scale-105 md:duration-300 md:ease-in md:mx-auto lg:mx-10"
        >
            <WhyRenowebCard title={title} description={description} />
        </motion.div>
    );
};

export default AnimatedWhyRenowebCard;
