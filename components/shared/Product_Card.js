import Image from 'next/image'

const Product_Card = ({ productName, description }) => {

  const words = productName?.split(' ') || [];
  const firstWord = words[0] || '';
  const secondWord = words.slice(1).join(' ') || '';

  return (
    <div className="mx-auto lg:mx-0 w-10/12 lg:w-11/12 md:max-w-[420px] bg-[#322E2E] border  rounded-3xl shadow-xl shadow-[#6D98EC]/40" style={{ background: 'linear-gradient(to bottom, #0A0A0A 100%, #302E2E 24%)' }}>
      <a href="#">
        <Image className="rounded-t-3xl" src="/product_card_1.png" width={420} height={300} alt='Growth OS' />
      </a>
      <div className="p-5">
        <div className='my-3'>
          {/* {productName !== "GROWTH OS" ?  */}
          <h2 className='text-[#FFFBEF] font-bold text-2xl'>{firstWord} <br /> <span className='text-[#3877F0]'>{secondWord}</span> </h2>
          {/* // <h2 className='text-[#FFFBEF] font-bold text-2xl'>{firstWord} <span className='text-[#3877F0]'>{secondWord}</span> </h2> */}
          {/* } */}
        </div>
        <p className='text-[#F3F3F3] text-sm my-5'>{description}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm text-center font-bold text-white bg-[#3877F0] rounded-lg ">
          Learn more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Product_Card