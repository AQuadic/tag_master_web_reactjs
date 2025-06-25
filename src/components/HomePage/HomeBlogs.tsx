import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import blog1 from '../../../public/images/home/blogs/blog1.png'
import blog2 from '../../../public/images/home/blogs/blog2.png'
import blog3 from '../../../public/images/home/blogs/blog3.png'
import blog4 from '../../../public/images/home/blogs/blog4.png'

const HomeBlogs = () => {
    const BlogsData = [
        {
            image:blog1 ,
            title: 'عنوان المقال',
            description: 'وصف صغير للمقال...',
            date: '2,Jan 12:09PM'
        },
        {
            image: blog2,
            title: 'عنوان المقال',
            description: 'وصف صغير للمقال...',
            date: '2,Jan 12:09PM'
        },
        {
            image: blog3,
            title: 'عنوان المقال',
            description: 'وصف صغير للمقال...',
            date: '2,Jan 12:09PM'
        },
        {
            image: blog4,
            title: 'عنوان المقال',
            description: 'وصف صغير للمقال...',
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
                alt=''
                width={729}
                height={501}
                className='md:w-[729px] w-full'
                />
                <div className='mt-4 2xl:mt-0'>
                    <h2 className='text-[#000000] text-[25px] font-bold'>أحدث المقالات</h2>
                    {BlogsData.map((item, index) => {
                        return (
                            <div key={index} className='md:w-[395px] w-full h-[98px] bg-[#F6F7FB] rounded-[12px] mt-4 flex items-center justify-between gap-[13px] py-4 px-4'>
                                <Image src={item.image} alt='blog image' width={66} height={66} />
                                <div>
                                    <h2 className='text-[#333333] text-[17px] font-bold'>{item.title}</h2>
                                    <p className='text-[#8B8282] text-[17px] font-normal mt-1.5'>{item.description}</p>
                                </div>
                                <p className='text-[#787676] text-base'>{item.date}</p>
                            </div>
                        )
                    })}
                </div>
        </div>
        </section>
    )
}

export default HomeBlogs
