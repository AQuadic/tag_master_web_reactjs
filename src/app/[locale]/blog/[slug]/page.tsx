import BlogDetails from "@/components/blog/BlogDetails";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params;
  return (
    <div>
      <BlogDetails params={resolvedParams} />
    </div>
  );
};

export default page;
