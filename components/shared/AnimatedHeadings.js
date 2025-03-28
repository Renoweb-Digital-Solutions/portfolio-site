"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import isMobileView from "./isMobileView";


const AnimatedHeadings = ({ children, triggerOnScroll = false }) => {
    const isMobile = isMobileView();

    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

    const getVariants = () => {
        if (isMobile) {
            return {
                initial: { y: 50, x: 0, opacity: 0 },
                animate: { y: 0, x: 0, opacity: 1 }
            };
        }

        return {
            initial: { x: -100, opacity: 0 },
            animate: { x: 0, opacity: 1 }
        };
    };

    const variants = getVariants();

    return (
        <motion.div
            ref={ref}
            initial={variants.initial}
            animate={triggerOnScroll ? (isInView ? variants.animate : {}) : variants.animate}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedHeadings;
