import Case_studies_page from '@/components/CaseStudiesPage/Case_studies_page'
import { case_studies_data } from '@/components/data/case_studies'
import React from 'react'

const page = () => {
    const data = case_studies_data
    return (
        <div>
            <Case_studies_page case_studies={data} />
        </div>
    )
}




export default page