"use client"
import { IoIosArrowDown } from "react-icons/io";
import Case_studies_page_cards from "./Case_studies_page_cards";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";


const Case_studies_page = ({ case_studies }) => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filterCaseStudies = activeCategory === 'All' ? case_studies : case_studies.filter(study => study.category === activeCategory);

    return (
        <div className="mt-[200px] relative mx-15">
            <h1 className="font-bold text-4xl text-[#C7C7C7] text-center">
                CASE STUDIES
            </h1>

            <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

            <div className="flex flex-col mx-70 space-y-7 my-20">
                {filterCaseStudies.length !== 0 ? filterCaseStudies.map((studies) => (
                    <Case_studies_page_cards studies={studies} key={studies.id} />
                )) :
                    <p className="font-bold text-2xl text-[#C7C7C7] text-center">
                        No case studies found.
                    </p>
                }
            </div>
        </div>
    )
}

export default Case_studies_page