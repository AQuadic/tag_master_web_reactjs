import Head from "next/head";
import MainLogin from "@/components/auth/MainLogin";
import React from "react";

const Page = () => {
  return (
    <div>
      <Head>
        <title>Tag Master | Login</title>
        <meta
          name="description"
          content="Log in to your Tag Master account to access courses, tools, and personalized settings."
        />
        <meta
          name="keywords"
          content="Tag Master login, user login, access account, sign in"
        />
        <meta name="author" content="Tag Master Team" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Tag Master | Login" />
        <meta
          property="og:description"
          content="Log in to Tag Master to unlock personalized learning experiences and account features."
        />
        <meta
          property="og:image"
          content="/images/logo.png"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tag Master | Login" />
        <meta
          name="twitter:description"
          content="Log in to Tag Master and access your dashboard, tools, and products."
        />
        <meta
          name="twitter:image"
          content="/images/logo.png"
        />

      </Head>

      <MainLogin />
    </div>
  );
};

export default Page;
