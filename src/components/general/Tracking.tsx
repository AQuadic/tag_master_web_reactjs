import React from 'react'
import BlueCircle from '../icons/profile/BlueCircle'
import GrayCircle from '../icons/profile/GrayCircle'

const Tracking = () => {
    return (
        <section className='mt-[57px]'>
            <div className='flex items-center gap-4'>
                <div><BlueCircle /></div>
                <div className='w-full h-[7px] bg-[#007EC1] rounded-[6px]'></div>
                <div><BlueCircle /></div>
                <div className='w-full h-[7px] bg-[#007EC1] rounded-[6px]'></div>
                <div><GrayCircle /> </div>
                <div className='w-full h-[7px] bg-[#D9D9D9] rounded-[6px]'></div>
            </div>
        </section>
)
}

export default Tracking
