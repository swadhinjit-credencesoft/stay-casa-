import Link from "next/link";
import { Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/motion/ScrollReveal";
import type { BlogArticle } from "@/lib/mockData";

interface BlogArticleGridProps {
  articles: BlogArticle[];
}

export default function BlogArticleGrid({ articles }: BlogArticleGridProps) {
  if (articles.length === 0) return null;

  return (
    <section className="pb-20 px-6 bg-[#FCFCFF]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <SectionHeading tag="More Articles" title="Further Reading" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, i) => (
            <ScrollReveal key={article.id} delay={i * 0.1}>
              <Link href={`/blog/${article.slug}`} className="group block">
                <div className="bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-soft-premium hover:shadow-depth-xl transition-shadow duration-500">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[9px] font-bold tracking-widest uppercase text-white bg-neutral-900/70 backdrop-blur-sm px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-light text-neutral-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-neutral-500 font-light line-clamp-2 mb-4">{article.summary}</p>
                    <div className="flex items-center justify-between text-xs text-neutral-400 border-t border-neutral-100 pt-3">
                      <span>{article.publishedAt}</span>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
