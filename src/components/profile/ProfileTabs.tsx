'use client';
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
import { logOut } from "@/api/auth/logout";
import { toast } from "sonner";
import { useAuthStore } from "../stores/userStore";
import { useRouter } from "next/navigation";

interface ProfileTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface TabItem {
  key: string;
  icon: React.ReactNode;
  label: string;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({ activeTab, setActiveTab }) => {
  const clearUser = useAuthStore((state) => state.clearUser);
  const router = useRouter();

  const handleTabClick = async (tabKey: string): Promise<void> => {
    if (tabKey === "logout") {
      try {
        await logOut();
        clearUser();
        toast.success("Logged out successfully")
        router.push("/")
      } catch {
        toast.error("Logout failed");
      }
    } else {
      setActiveTab(tabKey);
    }
  };

  const tabs: TabItem[] = [
    { key: "profile", icon: <Profile />, label: "الملف الشخصي" },
    { key: "favorite", icon: <Favorite />, label: "المفضلة" },
    { key: "bookmarks", icon: <Bookmarks />, label: "المحفوظات" },
    { key: "products", icon: <MyProducts />, label: "منتجاتي" },
    { key: "logout", icon: <Logout />, label: "تسجيل الخروج" },
  ];

  return (
    <div className="mt-6 w-full">
      {tabs.map((tab: TabItem) => (
        <div
          key={tab.key}
          onClick={() => handleTabClick(tab.key)}
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
