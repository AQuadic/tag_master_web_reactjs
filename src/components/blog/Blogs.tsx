"use client";

import React from 'react'
import Image from 'next/image'
import Spinner from '../icons/general/Spinner'
import { PostType } from "@/types/blogs";
import BlogCard from "./BlogCard";
import { useTranslations } from "next-intl";

interface BlogsProps {
  posts?: PostType[];
  isLoading: boolean;
}

const Blogs: React.FC<BlogsProps> = ({ posts, isLoading }) => {
  const t = useTranslations("homeblogs");

  if (isLoading) return <div className='flex justify-center my-10'><Spinner /></div>

  return (
    <section className='mt-6'>
      <div className='relative'>
        <Image 
          src='/images/blogs/blogImage.png' 
          alt='Blog image' 
          width={1200} 
          height={453} 
          className='object-cover w-full'
        />
        <div className='absolute bottom-4 rtl:right-8 ltr:left-8 md:p-6 text-white'>
          <h2 className='md:text-5xl text-xl font-bold'>{t('smartTools')}</h2>
          <p className='md:w-[570px] md:text-2xl text-base font-normal mt-4'>
            {t('description')}
          </p>
        </div>
      </div>

      <div className='mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-[21px]'>
        {posts?.map((post: PostType) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default Blogs
