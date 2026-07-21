import Link from "next/link";
import { getAllPosts } from "@/content/blog/posts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HtmlLang } from "@/components/HtmlLang";
import { content } from "@/lib/content";

export function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="flex overflow-hidden flex-col items-center min-h-screen py-8 bg-gray-900">
      <HtmlLang locale="ru" />
      <div className="flex flex-col w-full max-w-site px-2 md:px-0">
        <Header content={content.ru} />
        <main className="mt-10 md:mt-16 px-4 md:px-10 max-w-3xl w-full mx-auto">
          <h1 className="text-3xl md:text-5xl font-roadradio font-bold text-white mb-4">
            Блог Poker Partners
          </h1>
          <p className="text-lg text-gray-300 font-roboto mb-12">
            Покер, арбитраж и другие способы понять, куда утекает бюджет — с иронией и без
            корпоративной каши.
          </p>

          <ul className="flex flex-col gap-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block p-6 md:p-8 rounded-[24px] bg-[#232733] hover:bg-[#2a3040] transition-colors"
                >
                  <p className="text-sm text-gray-400 font-roboto mb-2">
                    {post.date} · {post.readingMinutes} мин
                  </p>
                  <h2 className="text-xl md:text-2xl font-roadradio font-bold text-white mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 font-roboto leading-relaxed">{post.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </main>
        <Footer content={content.ru} />
      </div>
    </div>
  );
}
