import Image from 'next/image'
import React from 'react'

const MainContent = () => {
    return (
        <section className='mt-10'>
            <h1 className='text-[#000000] text-[25px] font-bold flex justify-center'>المحتوى التعليمي</h1>
            <div className='mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-[19px]'>
                <Image
                    src='/images/educational/video1.png'
                    alt='video'
                    width={387}
                    height={376}
                    />
                    <Image
                    src='/images/educational/video2.png'
                    alt='video'
                    width={387}
                    height={376}
                    />
                    <Image
                    src='/images/educational/video3.png'
                    alt='video'
                    width={387}
                    height={376}
                    />
                    <Image
                    src='/images/educational/video4.png'
                    alt='video'
                    width={387}
                    height={376}
                    />
                    <Image
                    src='/images/educational/video5.png'
                    alt='video'
                    width={387}
                    height={376}
                    />
                    <Image
                    src='/images/educational/video6.png'
                    alt='video'
                    width={387}
                    height={376}
                    />
                    <Image
                    src='/images/educational/video7.png'
                    alt='video'
                    width={387}
                    height={376}
                    />
                    <Image
                    src='/images/educational/video8.png'
                    alt='video'
                    width={387}
                    height={376}
                    />
                    <Image
                    src='/images/educational/video1.png'
                    alt='video'
                    width={387}
                    height={376}
                    />
            </div>
        </section>
    )
}

export default MainContent
