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
import { logOut } from "@/api/auth/logout";
import { toast } from "sonner";
import { useAuthStore } from "../stores/userStore";
// import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";
interface TabItem {
  key: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
  label: string;
}

interface ProfileTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({ activeTab, setActiveTab }) => {
  const t  = useTranslations("profile");
  const clearUser = useAuthStore((state) => state.clearUser);
  // const router = useRouter();

  const handleTabClick = async (tabKey: string): Promise<void> => {
    if (tabKey === "logout") {
      try {
        await logOut();
        clearUser();
        Cookies.remove("tag-master-token");
        toast.success("Logged out successfully");
        window.location.reload();
      } catch {
        toast.error("Logout failed");
      }
    } else {
      setActiveTab(tabKey);
    }
  };

  const tabs: TabItem[] = [
    { key: "profile", icon: <Profile />, activeIcon: <ActiveProfile />, label: t('profile') },
    { key: "favorite", icon: <Favorite />, activeIcon: <ActiveFavorite />, label: t("favorite") },
    { key: "bookmarks", icon: <Bookmarks />, activeIcon: <ActiveBookmarks />, label: t('bookmarks') },
    { key: "products", icon: <MyProducts />, activeIcon: <ActiveProducts />, label: t('products') },
    { key: "logout", icon: <Logout />, label: t('logout') },
  ];

  return (
    <div className="mt-6 w-full">
      {tabs.map((tab) => (
        <div
          key={tab.key}
          onClick={() => handleTabClick(tab.key)}
          className="flex items-center gap-3 cursor-pointer mb-4"
        >
          {activeTab === tab.key ? (tab.activeIcon ?? tab.icon) : tab.icon}
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
