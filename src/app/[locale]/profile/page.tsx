// app/profile/page.tsx
import React from 'react';
import MainProfile from '@/components/profile/MainProfile';
import type { Metadata } from 'next';

// ✅ Static SEO metadata for /profile
export const metadata: Metadata = {
  title: "Tag Master | My Profile",
  description:
    "Manage your profile, update your information, and view your activity on Tag Master.",
  keywords: [
    "Tag Master profile",
    "user account",
    "profile settings",
    "edit account",
  ],
  authors: [{ name: "Tag Master Team" }],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "My Profile | Tag Master",
    description:
      "Access and manage your personal profile on Tag Master.",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "User Profile - Tag Master",
      },
    ],
    siteName: "Tag Master",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Profile | Tag Master",
    description:
      "Update your personal details and track your activity on Tag Master.",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: "/profile",
  },
};

const Page = () => {
  return (
    <section className="container">
      <MainProfile />
    </section>
  );
};

export default Page;
