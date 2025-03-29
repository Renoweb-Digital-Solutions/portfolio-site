"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const InfiniteSlider = ({ images }) => {
    const [width, setWidth] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth / 2);
        }
    }, [images]);

    return (
        <div className="relative w-8/12 mx-auto overflow-hidden">
            {/* Background Blur Mask (Ensures it stays always) */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-0 left-0 h-full w-18 md:w-24 bg-gradient-to-r from-black via-transparent to-transparent" />
                <div className="absolute top-0 right-0 h-full w-18 md:w-24 bg-gradient-to-l from-black via-transparent to-transparent" />
            </div>

            {/* Image Slider */}
            <motion.div
                className="flex space-x-6"
                style={{ width: "max-content" }}
                animate={{ x: -width }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                }}
                ref={containerRef}
            >
                {[...images, ...images].map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        className="w-7/12 md:w-9/12 h-38 md:h-50 object-cover rounded-2xl"
                        alt={`slide-${index}`}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default InfiniteSlider;

