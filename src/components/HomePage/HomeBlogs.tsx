'use client'
import { getPosts } from '@/api/blogs/getBlogs'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Spinner from '../icons/general/Spinner'
import { PostType } from '@/types/blogs'
import Bookmark from '../icons/blogs/Bookmark'
import { useTranslations } from 'next-intl'
import Arrow from '../icons/home/Arrow'
import FeaturedBlogCard from './FeaturedBlogCard'

const HomeBlogs = () => {
    const t = useTranslations("homeblogs");

    const {
    data: posts,
    isLoading,
    } = useQuery<PostType[]>({
        queryKey: ['posts'],
        queryFn: getPosts,
    });

    console.log("Blogs are: ", posts)

    if (isLoading) return <div className='flex justify-center my-10'>
        <Spinner />
    </div>
    
    const featuredPosts = posts?.filter(item => item.is_featured);

    return (
        <section className='container mt-20'>
            <div className='flex flex-col items-center'>
                <Link href='/blog' className='text-[#007CC2] text-[17px]'>{t('readMore')}</Link>
                <h2 className='text-[#000000] text-[25px] font-bold'>{t('blog')}</h2>
            </div>

            <div className='mt-[46px] flex 2xl:flex-row flex-col  justify-between'>
                <Image 
                    src='/images/home/blogs/blog.png' 
                    alt='blog banner'
                    width={729}
                    height={501}
                    className='md:w-[829px] w-full'
                />
                <div className='mt-4 2xl:mt-0'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-[#000000] text-[25px] font-bold'>{t('latestArticles')}</h2>
                        <Link href='/blog' className="flex items-center gap-3">
                            <p className="text-[#000000] text-base font-semibold">
                            {t("seeMore")}
                            </p>
                            <Arrow />
                        </Link>
                    </div>
                    {posts?.slice(0, 4).map((item, index) => (
                        <div
                            key={index}
                            className='md:w-[395px] w-full h-[98px] bg-[#F6F7FB] rounded-[12px] mt-4 flex items-center justify-between gap-[13px] py-4 px-4'
                        >
                            <Image
                                src={item.image.url}
                                alt='blog image'
                                width={66}
                                height={66}
                            />
                            <div>
                                <h2 className='text-[#333333] text-[17px] font-bold'>{item.title}</h2>
                                <p
                                    className='text-[#8B8282] text-base mt-3 line-clamp-2'
                                    dangerouslySetInnerHTML={{ __html: item.content }}
                                />                            
                            </div>
                            <p className='text-[#787676] text-base'>{new Date(item.published_at).toLocaleDateString('ar-EG')}</p>
                        </div>
                    ))}
                </div>
            </div>

           <div className='mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-[21px]'>
            {featuredPosts?.map((item) => (
                <FeaturedBlogCard key={item.id} post={item} />
            ))}
            </div>
        </section>
    )
}

export default HomeBlogs
