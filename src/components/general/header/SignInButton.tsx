import ProfileIcon from "@/components/icons/general/ProfileIcon";
import Link from "next/link";
import React from "react";

const SignInButton = () => {
  const isSignedIn = false;
  return (
    <div className="h-[41] flex items-center ">
      {isSignedIn ? (
        <Link href="/profile">
          <ProfileIcon />
        </Link>
      ) : (
        <Link
          href="/auth/login"
          className="rounded-full bg-primary cursor-pointer px-3 py-2 text-white"
        >
          تسجيل الدخول
        </Link>
      )}
    </div>
  );
};

export default SignInButton;
