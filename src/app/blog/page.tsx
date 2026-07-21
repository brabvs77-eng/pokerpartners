import type { Metadata } from "next";
import { BlogIndex } from "@/components/BlogIndex";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ru",
  title: "Блог Poker Partners — покерный арбитраж без розовых соплей",
  description:
    "Статьи про покерный арбитраж, CPA, RevShare и источники трафика. С иронией, по делу и без обещаний Ferrari с первого пуша.",
  path: "/blog",
  keywords: [
    "покерный арбитраж",
    "покер партнёрка",
    "блог poker partners",
    "CPA покер",
    "RevShare покер",
  ],
});

export default function BlogPage() {
  return <BlogIndex />;
}
