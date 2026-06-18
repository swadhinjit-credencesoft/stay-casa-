import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { blogArticles } from "@/lib/mockData";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "The Resort Journal – Stories, Design & Wellness",
  description: "Explore the Hotel Stay Casa Inn editorial: architecture, wellness science, culinary philosophy, and travel stories.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogArticles;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-950 pt-32 pb-24 px-6 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EF4444_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative z-10">
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-4 block">Editorial</span>
          <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">The Resort Journal</h1>
          <p className="text-neutral-400 font-light mt-5 max-w-xl mx-auto text-lg">
            Architecture, wellness science, culinary philosophy, and the stories that define our hotel.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Link href={`/blog/${featured.slug}`} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-depth-xl border border-neutral-100">
                <div className="relative h-72 lg:h-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-red-500 bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="text-xs text-neutral-400 bg-neutral-50 px-3 py-1 rounded-full">
                      {featured.category}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-light text-neutral-900 leading-snug mb-4 group-hover:text-red-600 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-neutral-500 font-light text-sm leading-relaxed mb-6">{featured.summary}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={featured.author.avatar} alt={featured.author.name} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <p className="text-xs font-medium text-neutral-800">{featured.author.name}</p>
                        <p className="text-[10px] text-neutral-400">{featured.publishedAt}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featured.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Grid */}
      {rest.length > 0 && (
        <section className="pb-20 px-6 bg-[#FCFCFF]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <SectionHeading tag="More Articles" title="Further Reading" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rest.map((article, i) => (
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
      )}
    </>
  );
}
