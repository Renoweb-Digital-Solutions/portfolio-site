"use client"
import { case_study_data } from '../data/case_study_data';
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { x: 50, opacity: 0 },  // Starts slightly to the right
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

const StatsCard = ({ stats }) => {
    return (
        <div className="flex items-center space-x-6 bg-black text-white p-7 rounded-3xl border-2 border-[#3877F0]">
            <div className="text-center">
                <p className="text-lg font-semibold">{stats.clicks}</p>
                <p className="text-sm text-gray-400">Clicks</p>
            </div>
            <div className="w-[2px] h-10 bg-[#3877F0]"></div>
            <div className="text-center">
                <p className="text-lg font-semibold">{stats.Impression}</p>
                <p className="text-sm text-gray-400">Impression</p>
            </div>
            <div className="w-[2px] h-10 bg-[#3877F0]"></div>
            <div className="text-center">
                <p className="text-lg font-semibold">{stats.CTR}</p>
                <p className="text-sm text-gray-400">CTR</p>
            </div>
        </div>
    );
};


const CaseStudyCard = ({ data }) => {
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}  // Trigger animation when 20% visible
            className="w-[630px] border rounded-4xl bg-gradient-to-r from-[#0A0A0A]/0 to-[#3877F0]/[7%] shadow-[0px_4px_48px_2px_#3877F0] p-4">
            <h1 className='text-white my-10 font-bold text-5xl text-center'>{data.category.toUpperCase()}</h1>
            <img
                className="rounded-2xl w-11/12 h-auto object-cover m-5 mx-auto"
                src={`/case_studies_${data.id}.png`} // Dynamically use ID for the image
                alt={data.category}
            />
            <div className="p-5 my-10 flex flex-row justify-evenly">
                <StatsCard stats={data.before} />
                <h1 className='text-white font-bold text-3xl self-center'>BEFORE</h1>
            </div>
            <div className="p-5 my-10 flex flex-row justify-evenly">
                <h1 className='text-white font-bold text-3xl self-center'>AFTER</h1>
                <StatsCard stats={data.after} />
            </div>
            <div className='p-5 mb-4'>
                <p className='text-white'>{data.study}</p>
            </div>

            <div className="mb-10 pl-5 ">
                <button type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-bold rounded-lg text-white h-13 cursor-pointer" style={{
                    background: "linear-gradient(to bottom right, #3877F0 0%, #4279E4 22%, #F3F3F3 51%, #FFFFFF 100%)",
                }}>
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md flex h-12">

                        <p className="self-center">Learn more</p>
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 self-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </span>
                </button>
            </div>
        </motion.div>
    );
};

const CaseStudyList = () => {
    return (
        <div className="flex flex-wrap justify-center gap-8">
            {case_study_data.map((study) => (
                <CaseStudyCard key={study.id} data={study} />
            ))}
        </div>
    );
};

export default CaseStudyList;