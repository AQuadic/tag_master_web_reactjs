"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts, PostsApiResponse } from "@/api/blogs/getBlogs";
import BlogsHeader from "./BlogsHeader";
import Blogs from "./Blogs";
import Pagination from "../ProductsPage/Pagination";

const MainBlogs = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data: postsResponse, isLoading } = useQuery<PostsApiResponse>({
    queryKey: ["posts", currentPage],
    queryFn: () => getPosts(currentPage),
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

    return (
        <div>
            <BlogsHeader />
            <Blogs posts={postsResponse?.data} isLoading={isLoading} />
            {postsResponse && postsResponse.meta.last_page > 1 && (
                <Pagination
                currentStep={postsResponse.meta.current_page}
                totalSteps={postsResponse.meta.last_page}
                onPageChange={handlePageChange}
            />
        )}
        </div>
    )
}

export default MainBlogs
