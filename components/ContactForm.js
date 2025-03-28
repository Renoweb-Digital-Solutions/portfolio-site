"use client"

import Image from 'next/image'
import { motion } from "motion/react"

const Input = ({ name, id, type, required, label }) => {
    return (
        <div className="relative z-0 w-full mb-5 group">
            <input type={type} name={name} id={id} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required={required} placeholder=" " />
            <label htmlFor={id} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label>
        </div>
    )
}

const ContactForm = () => {
    return (

        <motion.div initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}>
            <h2
                style={{
                    backgroundImage: "linear-gradient(135deg, #3877F0 40%, #F3F3F3 70%, #FFFFFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
                className="font-bold text-center text-4xl mb-[50px]"
            >
                Get In Touch
            </h2>



            <motion.div initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }} className="bg-[#0A0A0A] flex flex-row gap-5 w-[90%] lg:w-[700px] p-10 mx-auto mb-[100px] shadow-[0px_4px_48px_2px_#3877F0] rounded-3xl">
                <div className="w-6/12 self-center">
                    <Image width={300} height={300} src="/renowebLogo.png" alt="renoweb logo" />
                </div>
                <div className='flex-1'>
                    <form className=" mx-auto">

                        <Input name="name" id="floating_name" type="text" label="Full Name" required />
                        <Input name="email" id="floating_email" type="email" label="Email" required />
                        <Input name="Mobile_No" id="mobile_no" type="text" label="Mobile No." required />
                        <Input name="Comapny_Site_Link" id="company_link" type="text" label="Company Site Link" required />

                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </motion.div>


        </motion.div>



    )
}

export default ContactForm