"use client";

import React from 'react'
import Image from 'next/image'
import Spinner from '../icons/general/Spinner'
import { getPosts } from '@/api/blogs/getBlogs'
import { useQuery } from '@tanstack/react-query'
import { PostType } from '@/types/blogs'
import BlogCard from './BlogCard'
import { useTranslations } from 'next-intl'

const Blogs = () => {
  const t = useTranslations("homeblogs");

  const {
    data: posts,
    isLoading,
  } = useQuery<PostType[]>({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

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
        <div className='absolute bottom-4 right-8 md:p-6 text-white'>
          <h2 className='md:text-5xl text-xl font-bold'>{t('smartTools')}</h2>
          <p className='md:w-[570px] md:text-2xl text-base font-normal mt-4'>
            {t('description')}
          </p>
        </div>
      </div>

      <div className='mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-[21px]'>
        {posts?.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default Blogs
