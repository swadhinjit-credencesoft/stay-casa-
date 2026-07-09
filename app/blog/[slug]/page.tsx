import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";
import { blogArticles } from "@/lib/mockData";
import { getArticleSchema } from "@/lib/schema";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import ScrollReveal from "@/components/motion/ScrollReveal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: `https://hotelstaycasainn.com/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://hotelstaycasainn.com/blog/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      images: [{ url: article.image, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [article.image],
    },
  };
}

function renderContent(content: string) {
  return content.split("\n").map((line, i) => {
    if (line.startsWith("## ")) return <h2 key={i} className="text-2xl font-light text-neutral-900 mt-10 mb-4">{line.slice(3)}</h2>;
    if (line.startsWith("### ")) return <h3 key={i} className="text-xl font-light text-neutral-800 mt-8 mb-3">{line.slice(4)}</h3>;
    if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*: (.+)$/);
      if (match) return <li key={i} className="mb-2"><strong className="font-medium text-neutral-900">{match[1]}</strong>: {match[2]}</li>;
    }
    if (line.startsWith("- ")) return <li key={i} className="mb-2 text-neutral-600 font-light">{line.slice(2)}</li>;
    if (line.trim() === "") return <br key={i} />;
    return <p key={i} className="text-neutral-600 font-light leading-relaxed mb-4">{line}</p>;
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const schema = getArticleSchema(article);
  const related = blogArticles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <BreadcrumbsJsonLd items={[
        { name: "Blog", url: "/blog" },
        { name: article.title, url: `/blog/${article.slug}` },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-neutral-950/30" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-16 max-w-4xl mx-auto w-full">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs tracking-widest uppercase mb-6 transition-colors w-fit">
            <ArrowLeft className="w-3.5 h-3.5" /> The Journal
          </Link>
          <span className="text-[9px] font-bold tracking-widest text-red-400 uppercase mb-3 inline-flex items-center gap-2">
            <span className="w-1 h-1 bg-red-500 rounded-full" /> {article.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-light text-white leading-tight">{article.title}</h1>
        </div>
      </section>

      {/* Article Meta */}
      <section className="bg-white border-b border-neutral-100 py-5 px-6 sticky top-[72px] z-20">
        <div className="max-w-4xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <img src={article.author.avatar} alt={article.author.name} className="w-9 h-9 rounded-full object-cover" />
            <div>
              <p className="text-sm font-medium text-neutral-800">{article.author.name}</p>
              <p className="text-[10px] text-neutral-400">{article.author.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-neutral-400">
            <span>{article.publishedAt}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-6 bg-[#FCFCFF]">
        <div className="max-w-4xl mx-auto">
          {/* Summary lead */}
          <p className="text-xl text-neutral-600 font-light leading-relaxed border-l-4 border-red-500 pl-6 mb-10 italic">
            {article.summary}
          </p>
          {/* Rendered content */}
          <article className="prose max-w-none">
            {renderContent(article.content)}
          </article>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 px-6 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6 bg-white border border-neutral-100 rounded-2xl p-8 shadow-soft-premium">
            <img src={article.author.avatar} alt={article.author.name} className="w-16 h-16 rounded-full object-cover shrink-0" />
            <div>
              <p className="text-[9px] font-bold tracking-widest text-red-500 uppercase mb-1">About the Author</p>
              <p className="text-lg font-light text-neutral-900">{article.author.name}</p>
              <p className="text-sm text-neutral-500 mb-2">{article.author.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-16 px-6 bg-[#FCFCFF]">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-8">Continue Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((a) => (
                <ScrollReveal key={a.id}>
                  <Link href={`/blog/${a.slug}`} className="group">
                    <div className="bg-white border border-neutral-100 rounded-xl overflow-hidden shadow-soft-premium hover:shadow-depth-xl transition-shadow duration-500">
                      <div className="h-40 overflow-hidden">
                        <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-light text-neutral-900 group-hover:text-red-600 transition-colors">{a.title}</p>
                        <p className="text-[10px] text-neutral-400 mt-1">{a.readTime}</p>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
