import React from 'react'
import Profile from '../icons/profile/Profile'
import Favorite from '../icons/profile/Favorite'
import Bookmarks from '../icons/profile/Bookmarks'
import MyProducts from '../icons/profile/MyProducts'
import Logout from '../icons/profile/Logout'

const ProfileTabs = () => {
    return (
        <section className='mt-[22px]'>
            <div className='flex items-center gap-3'>
                <Profile />
                <p className='text-[#007EC1] text-lg font-medium'>الملف الشخصي</p>
            </div>
            <div className='flex items-center gap-3 mt-[22px]'>
                <Favorite />
                <p className='text-[#4A4A4A] text-lg font-medium'>المفضلة</p>
            </div>
            <div className='flex items-center gap-3 mt-[22px]'>
                <Bookmarks />
                <p className='text-[#4A4A4A] text-lg font-medium'>المحفوظات</p>
            </div>
            <div className='flex items-center gap-3 mt-[22px]'>
                <MyProducts />
                <p className='text-[#4A4A4A] text-lg font-medium'>منتجاتي</p>
            </div>
            <div className='flex items-center gap-3 mt-[22px]'>
                <Logout />
                <p className='text-[#4A4A4A] text-lg font-medium'>تسجيل الخروج</p>
            </div>
        </section>
    )
}

export default ProfileTabs
