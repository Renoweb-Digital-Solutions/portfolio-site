import NodeDesign from './NodeDesign'
import AnimatedHeadings from './shared/AnimatedHeadings'

const Our_Services = () => {
    return (
        <div className='mb-10'>
            <AnimatedHeadings triggerOnScroll={true}>
                <h1 className='text-[#FFFBEF] font-bold text-center text-3xl'>OUR <span className='text-[#3877F0]'>SERVICES</span></h1>
            </AnimatedHeadings>

            <div className='mt-10 mb-4'>
                <NodeDesign />
            </div>
        </div>
    )
}

export default Our_Services