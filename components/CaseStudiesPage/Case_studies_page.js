"use client"
import { IoIosArrowDown } from "react-icons/io";
import Case_studies_page_cards from "./Case_studies_page_cards";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";


const Case_studies_page = ({ case_studies }) => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filterCaseStudies = activeCategory === 'All' ? case_studies : case_studies.filter(study => study.category === activeCategory);

    return (
        <div className="mt-[100px] md:mt-[200px] relative mx-4 sm:mx-8 md:mx-15">
            <h1 className="font-bold text-3xl md:text-4xl text-[#C7C7C7] text-center">
                CASE STUDIES
            </h1>

            <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

            <div className="flex flex-col mx-4 md:mx-auto max-w-4xl space-y-7 my-10 md:my-20">
                {filterCaseStudies.length !== 0 ? filterCaseStudies.map((studies) => (
                    <Case_studies_page_cards studies={studies} key={studies.id} />
                )) :
                    <p className="font-bold text-xl md:text-2xl text-[#C7C7C7] text-center p-10">
                        No case studies found.
                    </p>
                }
            </div>
        </div>
    )
}

export default Case_studies_page