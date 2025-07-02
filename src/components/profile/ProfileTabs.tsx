import React from "react";
import Profile from "../icons/profile/Profile";
import Favorite from "../icons/profile/Favorite";
import Bookmarks from "../icons/profile/Bookmarks";
import MyProducts from "../icons/profile/MyProducts";
import Logout from "../icons/profile/Logout";
import ActiveFavorite from "../icons/profile/ActiveFavorite";
import ActiveBookmarks from "../icons/profile/ActiveBookmarks";
import ActiveProducts from "../icons/profile/ActiveProducts";
import ActiveProfile from "../icons/profile/ActiveProfile";

const ProfileTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { key: "profile", icon: <Profile />, activeIcon: <ActiveProfile />, label: "الملف الشخصي" },
    { key: "favorite", icon: <Favorite />, activeIcon: <ActiveFavorite />, label: "المفضلة" },
    { key: "bookmarks", icon: <Bookmarks />, activeIcon: <ActiveBookmarks />, label: "المحفوظات" },
    { key: "products", icon: <MyProducts />, activeIcon: <ActiveProducts />, label: "منتجاتي" },
    { key: "logout", icon: <Logout />, label: "تسجيل الخروج" },
  ];

  return (
    <div className="mt-6 w-full">
      {tabs.map((tab) => (
        <div
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className="flex items-center gap-3 cursor-pointer mb-4"
        >
          {activeTab === tab.key ? tab.activeIcon : tab.icon}
          <p
            className={`text-lg font-medium ${
              activeTab === tab.key ? "text-[#007EC1]" : "text-[#4A4A4A]"
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
