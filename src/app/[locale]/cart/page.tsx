import MainCart from '@/components/cart/MainCart';
import type { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Tag Master | Cart",
  description:
    "Review the items in your cart before checkout. Secure, simple, and fast shopping with Tag Master.",
  keywords: [
    "cart",
    "shopping cart",
    "checkout",
    "Tag Master products",
    "buy tag master",
  ],
  authors: [{ name: "Tag Master Team" }],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Your Cart | Tag Master",
    description:
      "View your selected items and proceed to checkout securely at Tag Master.",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Tag Master Cart",
      },
    ],
    siteName: "Tag Master",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Cart | Tag Master",
    description:
      "Check out the products you've added to your cart and continue your Tag Master journey.",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: "/cart",
  },
};

const Page = () => {
    return (
        <section>
            <MainCart />
        </section>
    )
}

export default Page
