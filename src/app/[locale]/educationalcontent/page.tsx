import Head from 'next/head';
import MainContent from '@/components/educationalcontent/MainContent'
import DownloadApp from '@/components/general/DownloadApp'
import React from 'react'

const Page = () => {
    return (
        <>
        <Head>
            <title>Tag Master | Educational Content</title>
            <meta
            name="description"
            content="Explore a wide range of educational content from Tag Master, designed to empower learners and enhance skills across various fields."
            />
            <meta
            name="keywords"
            content="educational content, learning resources, tutorials, Tag Master education, online learning"
            />
            <meta name="author" content="Tag Master Team" />
            <meta name="robots" content="index, follow" />

            <meta property="og:title" content="Tag Master | Educational Content" />
            <meta
            property="og:description"
            content="Discover quality educational content provided by Tag Master to support your learning journey."
            />
            <meta property="og:image" content="/images/logo.png" />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Tag Master | Educational Content" />
            <meta
            name="twitter:description"
            content="Browse educational resources, guides, and tools to advance your knowledge with Tag Master."
            />
            <meta name="twitter:image" content="/images/logo.png" />

            <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className='container'>
            <MainContent />
            <DownloadApp />
        </section>
        </>
    )
}

export default Page
