import type { Metadata } from "next";
import { blogMetadata } from "@/lib/data/blog";
import { blogArticles } from "@/lib/mockData";
import BlogHero from "@/components/blog/BlogHero";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogArticleGrid from "@/components/blog/BlogArticleGrid";

export const metadata: Metadata = blogMetadata;

export default function BlogPage() {
  const [featured, ...rest] = blogArticles;

  return (
    <>
      <BlogHero />
      <BlogFeatured article={featured} />
      <BlogArticleGrid articles={rest} />
    </>
  );
}
