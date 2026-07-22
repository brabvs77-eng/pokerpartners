import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blog/posts";
import { LINKS } from "@/lib/links";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HtmlLang } from "@/components/HtmlLang";
import { JsonLd } from "@/components/JsonLd";
import { content } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export function BlogArticle({ post }: { post: BlogPost }) {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [absoluteUrl(post.coverImage)],
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "ru",
    author: {
      "@type": "Organization",
      name: "Poker Partners",
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: "Poker Partners",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/logo.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  return (
    <div className="flex overflow-hidden flex-col items-center min-h-screen py-8 bg-gray-900">
      <HtmlLang locale="ru" />
      <JsonLd data={articleLd} />
      <div className="flex flex-col w-full max-w-site px-2 md:px-0">
        <Header content={content.ru} />
        <main className="mt-10 md:mt-16 px-4 md:px-10 max-w-3xl w-full mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400 font-roboto">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition-colors">
                  Главная
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-yellow-400 transition-colors">
                  Блог
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">
                Статья
              </li>
            </ol>
          </nav>

          <article>
            <header className="mb-8">
              <p className="text-sm text-gray-400 font-roboto mb-3">
                {post.date} · {post.readingMinutes} мин чтения
              </p>
              <h1 className="text-3xl md:text-5xl font-roadradio font-bold text-white leading-tight mb-4">
                {post.title}
              </h1>
              <p className="text-lg text-gray-300 font-roboto leading-relaxed mb-6">
                {post.description}
              </p>
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[20px] mb-6 bg-[#232733]">
                <Image
                  src={post.coverImage}
                  alt={post.coverAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs uppercase tracking-wide px-3 py-1 rounded-full bg-[#232733] text-yellow-400 font-roboto"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div
              className="blog-content font-roboto"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <aside className="mt-12 p-6 md:p-8 rounded-[24px] bg-[#232733] border border-slate-700">
              <h2 className="text-xl md:text-2xl font-roadradio font-bold text-white mb-3">
                Хватит теории — иди тестировать
              </h2>
              <p className="text-gray-300 mb-6">
                Регистрация в Poker Partners и живой контакт в Telegram, если уже всё понял, но
                лень тыкать меню самому.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={LINKS.register}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button h-12 px-6 text-base w-full sm:w-auto"
                >
                  Регистрация
                </a>
                <a
                  href={LINKS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-2xl border-2 border-white text-white font-bold hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Написать в Telegram
                </a>
              </div>
            </aside>
          </article>

          <p className="mt-10 text-sm text-gray-500">
            <Link href="/blog" className="text-yellow-400 hover:underline">
              ← Все статьи
            </Link>
          </p>
        </main>
        <Footer content={content.ru} />
      </div>
    </div>
  );
}
