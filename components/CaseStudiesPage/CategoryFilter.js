import React from 'react'

const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
    const categories = ['All', 'Lead Gen', 'SMM OS', 'Organic']

    return (
        <div>
            {/* Added flex-wrap for mobile, adjusted margin and spacing */}
            <ul className='flex flex-row flex-wrap space-x-2 sm:space-x-4 mt-10 md:mt-20 justify-center mx-auto max-w-xl'>
                {categories.map((category) => (

                    <li
                        key={category}
                        // Added mb-2 for vertical spacing when wrapping
                        className={`hover:cursor-pointer border-1 rounded-3xl px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base mb-2
                    ${activeCategory === category
                                ? 'text-[#3877F0] border-[#3877F0] border' // Added 'border' class here as well for consistency
                                : 'text-[#C7C7C7] border-gray-500 hover:text-[#3877F0] hover:border-[#3877F0] border' // Added 'border' class
                            }`}
                        onClick={() => setActiveCategory(category)}
                    >{category}</li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryFilter