import type { Metadata } from "next";
import { blogMetadata } from "@/lib/data/blog";
import { blogArticles } from "@/lib/mockData";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import BlogHero from "@/components/blog/BlogHero";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogArticleGrid from "@/components/blog/BlogArticleGrid";

export const metadata: Metadata = {
  ...blogMetadata,
  alternates: {
    canonical: "https://hotelstaycasainn.com/blog",
  },
  openGraph: {
    title: blogMetadata.title ?? undefined,
    description: blogMetadata.description ?? undefined,
    url: "https://hotelstaycasainn.com/blog",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = blogArticles;

  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Blog", url: "/blog" }]} />
      <BlogHero />
      <BlogFeatured article={featured} />
      <BlogArticleGrid articles={rest} />
    </>
  );
}
