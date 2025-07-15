import React from 'react';
import Head from 'next/head';
import MainBlogs from '@/components/blog/MainBlogs';

const Page = () => {
    return (
        <>
        <Head>
            <title>Tag Master | Blog</title>
            <meta
            name="description"
            content="Read the latest articles, updates, and insights on design, development, and innovation at Tag Master."
            />
            <meta
            name="keywords"
            content="blog, articles, Tag Master blog, tech insights, tutorials, development, design"
            />
            <meta name="author" content="Tag Master Team" />
            <meta name="robots" content="index, follow" />

            <meta property="og:title" content="Tag Master | Blog" />
            <meta
            property="og:description"
            content="Stay up-to-date with expert articles, tutorials, and thought leadership from the Tag Master team."
            />
            <meta property="og:image" content="/images/logo.png" />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Tag Master | Blog" />
            <meta
            name="twitter:description"
            content="Explore the latest blog posts from Tag Master on technology, design, and more."
            />
            <meta name="twitter:image" content="/images/blog-cover.png" />

        </Head>

        <section className="container py-20">
            <MainBlogs />
        </section>
        </>
    );
};

export default Page;
