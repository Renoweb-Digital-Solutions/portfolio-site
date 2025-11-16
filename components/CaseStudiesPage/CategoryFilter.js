import React from 'react'

const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
    const categories = ['All', 'Lead Gen', 'SMM OS', 'Organic', 'Performance OS', 'LinkedIn', 'Community Management', "Dev OS"]

    return (
        <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${activeCategory === category
                            ? 'bg-blue-600 text-white border border-blue-600 shadow-lg shadow-blue-600/50'
                            : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-blue-600 hover:text-white'
                            }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CategoryFilter