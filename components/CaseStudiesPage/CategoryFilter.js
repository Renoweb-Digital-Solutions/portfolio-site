import React from 'react'

const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
    const categories = ['All', 'Lead Gen', 'SMM OS', 'Organic']

    return (
        <div>
            <ul className='flex flex-row space-x-4 mt-20 justify-center'>
                {categories.map((category) => (

                    <li
                        key={category}
                        className={`hover:cursor-pointer border-1 rounded-3xl px-4 py-2 
                    ${activeCategory === category
                                ? 'text-[#3877F0] border-[#3877F0]'
                                : 'text-[#C7C7C7] border-gray-500 hover:text-[#3877F0] hover:border-[#3877F0]'
                            }`}
                        onClick={() => setActiveCategory(category)}
                    >{category}</li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryFilter