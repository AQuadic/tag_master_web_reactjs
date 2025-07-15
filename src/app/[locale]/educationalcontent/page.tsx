import MainContent from '@/components/educationalcontent/MainContent';
import DownloadApp from '@/components/general/DownloadApp';
import type { Metadata } from 'next'
import React from 'react';


export const metadata: Metadata = {
  title: "Tag Master | Educational Content",
  description:
    "Explore a wide range of educational content from Tag Master, designed to empower learners and enhance skills across various fields.",
  keywords: [
    "educational content",
    "learning resources",
    "tutorials",
    "Tag Master education",
    "online learning",
  ],
  authors: [{ name: "Tag Master Team" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tag Master | Educational Content",
    description:
      "Discover quality educational content provided by Tag Master to support your learning journey.",
    type: "website",
    siteName: "Tag Master",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Tag Master Educational Content",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tag Master | Educational Content",
    description:
      "Browse educational resources, guides, and tools to advance your knowledge with Tag Master.",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: "/educational-content",
  },
};

const Page = () => {
    return (
        <section className="container">
            <MainContent />
            <DownloadApp />
        </section>
    )
}

export default Page
