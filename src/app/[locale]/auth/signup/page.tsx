import React from "react";
import Head from "next/head";
import MainSignUp from "@/components/auth/MainSignUp";

const Page = () => {
  return (
    <div>
      <Head>
        <title>Tag Master | Sign Up</title>
        <meta
          name="description"
          content="Create your Tag Master account to access personalized tools, courses, and features."
        />
        <meta
          name="keywords"
          content="Tag Master sign up, create account, register, new user"
        />
        <meta name="author" content="Tag Master Team" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Tag Master | Sign Up" />
        <meta
          property="og:description"
          content="Join Tag Master today and get access to expert tools, tutorials, and a customized learning experience."
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tag Master | Sign Up" />
        <meta
          name="twitter:description"
          content="Sign up to unlock powerful features and personalized content on Tag Master."
        />
        <meta name="twitter:image" content="/images/logo.png" />

      </Head>

      <MainSignUp />
    </div>
  );
};

export default Page;
