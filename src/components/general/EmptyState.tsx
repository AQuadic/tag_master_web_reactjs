import Image from 'next/image'
import React from 'react'

const EmptyState = () => {
  return (
    <section className=' flex flex-col items-center justify-center'>
      <Image src='/images/emptyState.png' alt='empty state' width={200} height={200} className='w-full h-full' />
      <p className='text-[#4A4A4A] text-[32px] font-medium mt-12'>لا توجد عناصر لعرضها حالياً</p>
    </section>
  )
}

export default EmptyState
