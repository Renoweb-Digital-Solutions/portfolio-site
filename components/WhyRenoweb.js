import React from 'react'
import { why_renwoweb_details } from './data/Why_renoweb'
import WhyRenowebCard from './shared/WhyRenowebCard'

const WhyRenoweb = () => {
    return (
        <div className='mb-20'>
            <h1 className='text-[#FFFBEF] font-bold text-center text-3xl mt-10 mb-5'>WHY <span className='text-[#3877F0]'>RENOWEB</span></h1>

            <div className="flex flex-row lg:space-x-8 justify-center my-20">
                {why_renwoweb_details.map((item, index) => (
                    <WhyRenowebCard key={index} title={item.title} description={item.description} />
                ))}
            </div>
        </div>



    )
}

export default WhyRenoweb