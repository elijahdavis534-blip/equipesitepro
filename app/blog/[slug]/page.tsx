"use client";

import { use } from "react";
import { StoneNavbar } from "@/components/stone/navbar";
import { Footer } from "@/components/stone/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { blogContent } from "@/lib/i18n/blog-content";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { language, t } = useLanguage();

  const post = blogContent[language][slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <StoneNavbar />
        <main className="pt-28 pb-20 container mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-navy">{t.blog.notFound}</h1>
          <Link href="/blog" className="mt-4 inline-flex items-center text-brand-red hover:underline">
            <ArrowLeft className="size-4 mr-2" /> {t.blog.backToBlog}
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <StoneNavbar />
      <main className="pt-28 pb-20 container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-brand-red hover:underline mb-8">
            <ArrowLeft className="size-4 mr-2" /> {t.blog.backToBlog}
          </Link>

          <p className="text-sm font-semibold text-brand-red">{post.date}</p>
          <h1 className="font-heading text-4xl font-extrabold text-navy md:text-5xl mt-2 mb-6">
            {post.title}
          </h1>

          {/* --- RENDER THE STRUCTURED HTML --- */}
          <div
            className="prose prose-lg prose-headings:font-heading prose-headings:text-navy prose-strong:text-navy prose-a:text-brand-red prose-a:no-underline hover:prose-a:underline text-muted-foreground leading-relaxed max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
