"use client";

import { StoneNavbar } from "@/components/stone/navbar";
import { Footer } from "@/components/stone/footer";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-context";

// Non-translatable data (slug + image) stays in code and merges by index
// with the translated post copy from the dictionary.
const postMeta = [
  { id: 1, slug: "pourquoi-site-web-perd-clients", image: "/blog-1.jpg" },
  { id: 2, slug: "design-web-confiance-credibilite", image: "/blog-2.jpg" },
  { id: 3, slug: "3-erreurs-creation-site-web", image: "/blog-3.jpg" },
  { id: 4, slug: "site-web-mobile-entrepreneurs", image: "/blog-4.jpg" },
  { id: 5, slug: "galerie-photos-professionnelle", image: "/blog-5.jpg" },
];

export default function BlogPage() {
  const { t } = useLanguage();
  const b = t.blog;
  const posts = b.posts.map((post, index) => ({ ...post, ...postMeta[index] }));

  return (
    <div className="min-h-screen bg-background">
      <StoneNavbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          {/* --- BLOG HERO HEADER --- */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
              {b.eyebrow}
            </span>
            <h1 className="mt-3 font-heading text-4xl font-extrabold text-navy md:text-5xl text-balance">
              {b.titlePlain}<span className="text-brand-red">{b.titleAccent}</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {b.subtitle}
            </p>
          </div>

          {/* --- BLOG GRID --- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <p className="text-sm text-brand-red font-semibold mb-2">{post.date}</p>
                <h3 className="font-heading text-xl font-bold text-navy group-hover:text-brand-red transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 text-sm font-medium text-brand-red inline-flex items-center">
                  {b.readArticle} <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
