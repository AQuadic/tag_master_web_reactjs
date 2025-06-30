import BlogDetails from '@/components/blog/BlogDetails'
import React from 'react'

type Props = {
  params: {
    slug: string;
  };
};

const Page = ({ params }: Props) => {
  return (
    <div>
      <BlogDetails params={params} />
    </div>
  )
}

export default Page
