import React from 'react'
import BlueCircle from '../icons/profile/BlueCircle'
import GrayCircle from '../icons/profile/GrayCircle'

const Tracking = () => {
    return (
        <section className='mt-[57px]'>
            <div className='flex items-center gap-4'>
               <div className='w-full'>
                <div className='flex items-center gap-4'>
                     <div><BlueCircle /></div>
                <div className='w-full h-[7px] bg-[#007EC1] rounded-[6px]'></div>
                </div>
                <p className='text-[#000000] text-xl mt-3 mx-8'>إضافة الطلب لعربة التسوق</p>
               </div>
               <div className='w-full'>
                <div className='flex items-center gap-4'>
                     <div><BlueCircle /></div>
                <div className='w-full h-[7px] bg-[#007EC1] rounded-[6px]'></div>
                </div>
                <p className='text-[#000000] text-xl mt-3 mx-8'>إضافة الطلب لعربة التسوق</p>
               </div>
                <div className='w-full'>
                <div className='flex items-center gap-4'>
                     <div><GrayCircle /></div>
                <div className='w-full h-[7px] bg-[#D9D9D9] rounded-[6px]'></div>
                </div>
                <p className='text-[#000000] text-xl mt-3 mx-8'>إضافة الطلب لعربة التسوق</p>
               </div>
            </div>
        </section>
)
}

export default Tracking
