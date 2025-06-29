"use client";

import React, { useState } from 'react'
import BlogsHeader from './BlogsHeader'
import Blogs from './Blogs'
import Pagination from "../ProductsPage/Pagination";

const MainBlogs = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    return (
        <div>
            <BlogsHeader />
            <Blogs />
            <Pagination
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                totalSteps={3}
            />
        </div>
    )
}

export default MainBlogs
