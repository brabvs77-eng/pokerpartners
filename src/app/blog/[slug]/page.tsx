import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/BlogArticle";
import { getAllPosts, getPost } from "@/content/blog/posts";
import { buildMetadata } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  const meta = buildMetadata({
    locale: "ru",
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
  });

  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      images: [
        {
          url: post.coverImage,
          width: 1536,
          height: 1024,
          alt: post.coverAlt,
        },
      ],
    },
    twitter: {
      ...meta.twitter,
      images: [post.coverImage],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();
  return <BlogArticle post={post} />;
}
