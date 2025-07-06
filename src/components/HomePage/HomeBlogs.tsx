'use client'
import { getPosts } from '@/api/blogs/getBlogs'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Spinner from '../icons/general/Spinner'
import { PostType } from '@/types/blogs'
import Bookmark from '../icons/blogs/Bookmark'

const HomeBlogs = () => {
    const BlogsData = [
        {
            image: '/images/home/blogs/blog1.png',
            title: 'عنوان المقال',
            description: 'وصف صغير للمقال...',
            date: '2,Jan 12:09PM'
        },
        {
            image: '/images/home/blogs/blog2.png',
            title: 'عنوان المقال',
            description: 'وصف صغير للمقال...',
            date: '2,Jan 12:09PM'
        },
        {
            image: '/images/home/blogs/blog3.png',
            title: 'عنوان المقال',
            description: 'وصف صغير للمقال...',
            date: '2,Jan 12:09PM'
        },
        {
            image: '/images/home/blogs/blog4.png',
            title: 'عنوان المقال',
            description: 'وصف صغير للمقال...',
            date: '2,Jan 12:09PM'
        },
    ]

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

    return (
        <section className='container mt-20'>
            <div className='flex flex-col items-center'>
                <Link href='/' className='text-[#007CC2] text-[17px]'>اقرأ المزيد من الأفكار</Link>
                <h2 className='text-[#000000] text-[25px] font-bold'>المدونة</h2>
            </div>

            <div className='mt-[46px] flex 2xl:flex-row flex-col items-center justify-between'>
                <Image 
                    src='/images/home/blog.png' 
                    alt='blog banner'
                    width={729}
                    height={501}
                    className='md:w-[729px] w-full'
                />
                <div className='mt-4 2xl:mt-0'>
                    <h2 className='text-[#000000] text-[25px] font-bold'>أحدث المقالات</h2>
                    {BlogsData.map((item, index) => (
                        <div
                            key={index}
                            className='md:w-[395px] w-full h-[98px] bg-[#F6F7FB] rounded-[12px] mt-4 flex items-center justify-between gap-[13px] py-4 px-4'
                        >
                            <Image
                                src={item.image}
                                alt='blog image'
                                width={66}
                                height={66}
                            />
                            <div>
                                <h2 className='text-[#333333] text-[17px] font-bold'>{item.title}</h2>
                                <p className='text-[#8B8282] text-[17px] font-normal mt-1.5'>{item.description}</p>
                            </div>
                            <p className='text-[#787676] text-base'>{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-[21px]'>
                {posts?.map((item,index) => (
                    <Link href={`/blog/${item.id}`} key={item.id}>
                    <div
                        key={index}
                        className='relative w-full h-[376px] border border-[#B2B2B2] rounded-md bg-[#F6F7FB]'
                    >
                        <div className='absolute top-4 right-4'>
                            {/* <button onClick={handleToggleFavorite} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow">
                              {isFavorite ? <FilledBookmarkIcon /> : <Bookmark />}
                            </button> */}
                            <Bookmark />
                        </div>
                        <Image
                            src={item.image.url}
                            alt={item.title}
                            width={387}
                            height={212}
                            className='w-full'
                        />
                        <div className='flex items-center justify-between mt-4 px-4'>
                            <h2 className='text-[#333333] text-[17px] font-bold'>{item.title}</h2>
                            {/* <h2 className='text-[#787676] text-base font-normal'>5 دقائق</h2> */}
                        </div>
                        <p
                          className='text-[#8B8282] text-base mt-3 px-4 line-clamp-2'
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                        <p className='text-[#8B8282] text-base mt-3 px-4 justify-end flex'>
                          {new Date(item.published_at).toLocaleString('ar-EG', {
                            dateStyle: 'medium',
                            timeStyle: 'short',
                          })}
                        </p>
                    </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default HomeBlogs
