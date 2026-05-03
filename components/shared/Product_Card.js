import Image from 'next/image'
import Link from 'next/link';

const Product_Card = ({ productName, description, image, link, logo }) => {

  const words = productName?.split(' ') || [];
  const firstWord = words[0] || '';
  const secondWord = words.slice(1).join(' ') || '';

  return (
    <div className="group mx-auto lg:mx-0 w-10/12 lg:w-11/12 md:max-w-[460px] relative rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-3">
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 opacity-40 group-hover:opacity-100 transition-opacity duration-700 blur-[1px]" />

      {/* Card inner */}
      <div className="relative rounded-3xl bg-[#0a0a0a] overflow-hidden h-full">
        {/* Image with overlay */}
        <div className="relative h-[280px] overflow-hidden">
          <Image
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={image}
            width={460}
            height={280}
            alt={productName}
          />
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          
          {/* Logo floating badge */}
          {logo && (
            <div className="absolute top-4 right-4 w-14 h-14 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-500">
              <Image
                src={logo}
                width={36}
                height={36}
                alt={`${productName} logo`}
                className="object-contain"
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-7 pt-4">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-extrabold mb-1 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:from-cyan-300 group-hover:to-white transition-all duration-500">{firstWord}</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{secondWord}</span>
          </h2>

          {/* Accent line */}
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3 mb-5 opacity-60 group-hover:opacity-100 group-hover:w-20 transition-all duration-500" />

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-8 group-hover:text-gray-300 transition-colors duration-500 line-clamp-4">{description}</p>

          {/* CTA */}
          <Link href={link} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-white/5 border border-white/10 text-white group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-black transition-all duration-500">
            Learn more
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Hover glow behind card */}
        <div className="absolute -inset-10 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none" />
      </div>
    </div>
  )
}

export default Product_Card