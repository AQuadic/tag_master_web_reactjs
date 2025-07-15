import Head from 'next/head';
import MainCart from '@/components/cart/MainCart'
import React from 'react'

const Page = () => {
    return (
        <>
        <Head>
            <title>Tag Master | Cart</title>
            <meta
            name="description"
            content="Review the items in your cart before checkout. Secure, simple, and fast shopping with Tag Master."
            />
            <meta
            name="keywords"
            content="cart, shopping cart, checkout, Tag Master products"
            />
            <meta name="author" content="Tag Master Team" />

            <meta property="og:title" content="Your Cart | Tag Master" />
            <meta
            property="og:description"
            content="View your selected items and proceed to checkout securely at Tag Master."
            />
            <meta property="og:image" content="/images/logo.png" />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Your Cart | Tag Master" />
            <meta
            name="twitter:description"
            content="Check out the products you've added to your cart and continue your Tag Master journey."
            />
            <meta name="twitter:image" content="/images/logo.png" />

        </Head>

        <section>
            <MainCart />
        </section>
        </>
    )
}

export default Page
