import Link from "next/link";
import { Clock } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import type { BlogArticle } from "@/lib/mockData";

interface BlogFeaturedProps {
  article: BlogArticle;
}

export default function BlogFeatured({ article }: BlogFeaturedProps) {
  return (
    <section className="py-16 px-6 bg-[#FCFCFF]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <Link href={`/blog/${article.slug}`} className="group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-depth-xl border border-neutral-100">
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[9px] font-bold tracking-widest uppercase text-red-500 bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="text-xs text-neutral-400 bg-neutral-50 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-light text-neutral-900 leading-snug mb-4 group-hover:text-red-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-neutral-500 font-light text-sm leading-relaxed mb-6">{article.summary}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={article.author.avatar} alt={article.author.name} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p className="text-xs font-medium text-neutral-800">{article.author.name}</p>
                      <p className="text-[10px] text-neutral-400">{article.publishedAt}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
