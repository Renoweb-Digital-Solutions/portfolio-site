import React from 'react'
import Ellipse from './Ellipse'

const Hero = () => {
    return (
        <div className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center">
            <Ellipse />
            <h1 className="text-2xl font-bold text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md">
                Contact Us
            </button>
        </div>
    )
}

export default Hero