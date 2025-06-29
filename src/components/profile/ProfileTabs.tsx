import React from 'react';
import Profile from '../icons/profile/Profile';
import Favorite from '../icons/profile/Favorite';
import Bookmarks from '../icons/profile/Bookmarks';
import MyProducts from '../icons/profile/MyProducts';
import Logout from '../icons/profile/Logout';

const ProfileTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mt-6 w-full">
      {[
        { key: 'profile', icon: <Profile />, label: 'الملف الشخصي' },
        { key: 'favorite', icon: <Favorite />, label: 'المفضلة' },
        { key: 'bookmarks', icon: <Bookmarks />, label: 'المحفوظات' },
        { key: 'products', icon: <MyProducts />, label: 'منتجاتي' },
        { key: 'logout', icon: <Logout />, label: 'تسجيل الخروج' },
      ].map((tab) => (
        <div
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className="flex items-center gap-3 cursor-pointer mb-4"
        >
          {tab.icon}
          <p
            className={`text-lg font-medium ${
              activeTab === tab.key ? 'text-[#007EC1]' : 'text-[#4A4A4A]'
            }`}
          >
            {tab.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProfileTabs;
