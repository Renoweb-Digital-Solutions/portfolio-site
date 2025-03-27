"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedHeadings = ({ children, triggerOnScroll = false }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={triggerOnScroll ? (isInView ? { x: 0, opacity: 1 } : {}) : { x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedHeadings;
