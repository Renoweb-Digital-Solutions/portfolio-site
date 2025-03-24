import React from 'react'
import Product_Card from './shared/Product_Card'

const Our_Products = () => {
    return (
        <div>
            <h1 className='text-[#FFFBEF] font-bold text-center text-3xl'>OUR <span className='text-[#3877F0]'>PRODUCTS</span></h1>

            <div className="flex flex-row space-x-7 justify-evenly my-20">
                <Product_Card productName="QUANTUM
ACCELERATOR" description="Using our proprietary Quantum Accelerator Framework, we identify and eliminate the barriers holding your growth back. From internal inefficiencies to missed opportunities in your customer journey, we ensure every aspect of your business is optimized for success." />
                <Product_Card productName="GROWTH OS" description="We design a customized Growth Operating System (Growth OS) tailored to
your business’s digital maturity. This system creates a foundation for consistent, scalable growth by aligning
your brand’s presence with your audience’s needs and expectations."/>
            </div>
        </div>
    )
}

export default Our_Products