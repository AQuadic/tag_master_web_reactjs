"use client";

import React, { useState } from 'react'
import BlogsHeader from './BlogsHeader'
import Blogs from './Blogs'
import Pagination from "../ProductsPage/Pagination";

const MainBlogs = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);

    const handlePageChange = (page: number) => {
        setCurrentStep(page);
    };

    return (
        <div>
            <BlogsHeader />
            <Blogs />
            <Pagination
                currentStep={currentStep}
                onPageChange={handlePageChange}
                totalSteps={3}
            />
        </div>
    )
}

export default MainBlogs
