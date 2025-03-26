import React from 'react'
import CaseStudyCard from './shared/CaseStudyCard'

const Case_Studies = () => {
    return (
        <div className='flex flex-row justify-center my-[250px] space-x-15'>
            <div className='text-white text-center self-center'>
                <h3 className='font-bold text-2xl'>Want to know more?</h3>
                <h4 className='font-bold text-2xl'>See the</h4>
                <h1 className='text-[#3877F0] font-extrabold text-5xl cursor-pointer'>CASE STUDIES</h1>
            </div>
            <div>
                <CaseStudyCard />
            </div>
        </div>
    )
}

export default Case_Studies