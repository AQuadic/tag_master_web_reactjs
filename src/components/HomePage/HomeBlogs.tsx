'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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

    const BlogsSection = [
        {
            image: '/images/home/blogs/bigblog1.png',
            title: 'عنوان المقال',
            time: '5 دقائق',
            description: 'وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....',
            date: '2,Jan 12:09PM'
        },
        {
            image: '/images/home/blogs/bigblog2.png',
            title: 'عنوان المقال',
            time: '5 دقائق',
            description: 'وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....',
            date: '2,Jan 12:09PM'
        },
        {
            image: '/images/home/blogs/bigblog3.png',
            title: 'عنوان المقال',
            time: '5 دقائق',
            description: 'وصف قصير و سريع عن المقال و محتويات وصف قصير و سريع عن المقال و محتوياته وصف قصير و سريع عن المقال و محتوياته....',
            date: '2,Jan 12:09PM'
        },
    ]

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

            <div className='mt-12 flex flex-wrap gap-[21px]'>
                {BlogsSection.map((item,index) => (
                    <div
                        key={index}
                        className='w-[387px] h-[376px] border border-[#B2B2B2] rounded-md bg-[#F6F7FB]'
                    >
                        <Image
                            src={item.image}
                            alt='big blog image'
                            width={387}
                            height={212}
                        />
                        <div className='flex items-center justify-between mt-4 px-4'>
                            <h2 className='text-[#333333] text-[17px] font-bold'>{item.title}</h2>
                            <h2 className='text-[#787676] text-base font-normal'>{item.time}</h2>
                        </div>
                        <p className='text-[#8B8282] text-base mt-3 px-4'>{item.description}</p>
                        <p className='text-[#8B8282] text-base mt-3 px-4 justify-end flex'>{item.date}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HomeBlogs
