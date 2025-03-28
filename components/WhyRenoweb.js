import { why_renwoweb_details } from './data/why_renwoweb_details'
import AnimatedHeadings from './shared/AnimatedHeadings'
import AnimatedWhyRenowebCard from './shared/AnimatedWhyRenowebCard';

const WhyRenoweb = () => {
    return (
        <div className='mb-20'>
            <AnimatedHeadings triggerOnScroll={true}>
                <h1 className='text-[#FFFBEF] font-bold text-center text-3xl mt-10 mb-5'>WHY <span className='text-[#3877F0]'>RENOWEB</span></h1>
            </AnimatedHeadings>

            <div className="flex flex-col md:flex-row space-y-8 md:space-x-8 justify-center my-20">
                {why_renwoweb_details.map((item, index) => (
                    <AnimatedWhyRenowebCard key={index} index={index} title={item.title} description={item.description} />
                ))}
            </div>
        </div>



    )
}

export default WhyRenoweb