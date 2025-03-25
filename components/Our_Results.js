import React from 'react'
import InfiniteSlider from './shared/InfiniteSlider'

const images = [
    '/case_Studies_marquee_1.png',
    '/case_Studies_marquee_2.png',
    '/case_Studies_marquee_3.png',
    '/case_Studies_marquee_4.png',
    '/case_Studies_marquee_5.png',
    '/case_Studies_marquee_6.png']

const Our_Results = () => {
    return (
        <div className='mb-20'>
            <h1 className='text-[#FFFBEF] font-bold text-center text-3xl'>OUR <span className='text-[#3877F0]'>RESULTS</span></h1>

            <div className='my-10'>
                <InfiniteSlider images={images} />
            </div>
        </div>
    )
}

export default Our_Results