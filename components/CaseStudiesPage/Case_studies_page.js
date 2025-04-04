"use client"
import { IoIosArrowDown } from "react-icons/io";
import Case_studies_page_cards from "./Case_studies_page_cards";
import CategoryDropdown from "./CategoryDropdown";
import { useState } from "react";


const Case_studies_page = ({ case_studies }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const onDropdownClick = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="mt-[200px] relative mx-15">
            <h1 className="font-bold text-4xl text-[#C7C7C7] text-center">
                CASE STUDIES
            </h1>

            <div className="border-2 border-[#C7C7C7] rounded-2xl w-2/12 px-5 py-2 ml-5 mt-[70px] hover:cursor-pointer" onClick={onDropdownClick}>
                <div className="flex flex-row text-[#C7C7C7] space-x-2 justify-center">
                    <p className="text-xl">Category</p>
                    <IoIosArrowDown className="text-[#C7C7C7] text-2xl self-center" />
                </div>
            </div>
            {showDropdown &&
                <CategoryDropdown />
            }

            <div className="flex flex-col mx-70 space-y-7 my-20">
                {case_studies.map((studies) => (
                    <Case_studies_page_cards studies={studies} key={studies.id} />
                ))}
            </div>
        </div>
    )
}

export default Case_studies_page