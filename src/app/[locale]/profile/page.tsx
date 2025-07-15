import React from 'react';
import Head from 'next/head';
import MainProfile from '@/components/profile/MainProfile';

const Page = () => {
    return (
        <>
        <Head>
            <title>Tag Master | My Profile</title>
            <meta
            name="description"
            content="Manage your profile, update your information, and view your activity on Tag Master."
            />
            <meta
            name="keywords"
            content="Tag Master profile, user account, profile settings, edit account"
            />
            <meta name="author" content="Tag Master Team" />
            <meta name="robots" content="noindex, nofollow" />

            <meta property="og:title" content="My Profile | Tag Master" />
            <meta
            property="og:description"
            content="Access and manage your personal profile on Tag Master."
            />
            <meta property="og:image" content="/images/logo.png" />
            <meta property="og:url" content="https://www.yoursite.com/profile" />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="My Profile | Tag Master" />
            <meta
            name="twitter:description"
            content="Update your personal details and track your activity on Tag Master."
            />
            <meta name="twitter:image" content="/images/logo.png" />

            <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="container">
            <MainProfile />
        </section>
        </>
    );
};

export default Page;
