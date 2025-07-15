import React from 'react';
import MainBlogs from '@/components/blog/MainBlogs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tag Master | Blog",
  description:
    "Read the latest articles, updates, and insights on design, development, and innovation at Tag Master.",
  keywords: [
    "blog",
    "articles",
    "Tag Master blog",
    "tech insights",
    "tutorials",
    "development",
    "design",
  ],
  authors: [{ name: "Tag Master Team" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tag Master | Blog",
    description:
      "Stay up-to-date with expert articles, tutorials, and thought leadership from the Tag Master team.",
    url: "https://www.yoursite.com/blog",
    type: "website",
    siteName: "Tag Master",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Tag Master Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tag Master | Blog",
    description:
      "Explore the latest blog posts from Tag Master on technology, design, and more.",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: "/blog",
  },
};

const Page = () => {
  return (
    <section className="container py-20">
      <MainBlogs />
    </section>
  );
};

export default Page;
