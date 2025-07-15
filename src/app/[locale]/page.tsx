import { getProducts } from "@/api/products/getProducts";
import MainHome from "@/components/HomePage/MainHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tag Master - Empowering Connectivity",
  description:
    "Tag Master offers you the next generation of smart communication tools — share your profile or business data with just one touch, without the need for any app. Expand your network intelligently, connect with a touch.",
  keywords: [
    "digital networking",
    "smart communication",
    "business cards",
    "digital profiles",
    "contactless sharing",
    "networking tools",
    "tag master",
  ],
  authors: [{ name: "Tag Master" }],
  openGraph: {
    title: "Tag Master - Empowering Connectivity",
    description:
      "Expand your network intelligently, connect with a touch. Share your profile or business data with just one touch, without the need for any app.",
    type: "website",
    locale: "en_US",
    siteName: "Tag Master",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tag Master - Empowering Connectivity",
    description:
      "Expand your network intelligently, connect with a touch. Share your profile or business data with just one touch, without the need for any app.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const ProductsPage = async () => {
  const data = await getProducts(1);

  return <MainHome data={data} />;
};

export default ProductsPage;
