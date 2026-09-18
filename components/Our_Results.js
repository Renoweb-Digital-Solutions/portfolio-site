import InfiniteSlider from './shared/InfiniteSlider'
import AnimatedHeadings from './shared/AnimatedHeadings'

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
            <AnimatedHeadings triggerOnScroll={true}>
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <span className="px-5 py-2 bg-[#4ec8ef]/10 text-[#4ec8ef] rounded-full text-sm font-medium border border-[#4ec8ef]/20 tracking-widest uppercase">
                            Proof of Work
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ec8ef] to-[#308fef]">RESULTS</span>
                    </h2>
                </div>
            </AnimatedHeadings>

            <div className='my-10'>
                <InfiniteSlider images={images} />
            </div>
        </div>
    )
}

export default Our_Results