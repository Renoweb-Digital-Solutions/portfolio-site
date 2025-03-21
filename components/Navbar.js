import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-[#0A0A0A] text-white  rounded-xl border-4 border-[#3877F0]/20 poppins-regular h-18 w-[98%] mx-5 my-5 flex flex-row justify-between'>

            <div>
                <Image src="/renowebLogo.png" width={70} height={70} alt='Renoweb logo' />
            </div>

            <div className='flex flex-row space-x-16 my-auto'>
                <p>Home</p>
                <p>Case-Studies</p>
                <p>Our-Blog</p>
                <p>Products</p>
            </div>

            <div className='my-auto mr-3'>
                <button className='bg-[#003FB9] px-10 py-2 rounded-xl border-3 border-[#3877F0]/60 hover:bg-[#3877F0] hover:border-[#003FB9]'>Get in Touch</button>
            </div>
        </div>

    )
}

export default Navbar