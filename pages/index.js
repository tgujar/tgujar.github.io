import Link from "next/link";
import Container from "@/components/Container";
import ArticleCard from "@/components/ArticleCard";
import { getSortedArticles } from "@/lib/mdx";
import { Suspense } from "react";

export default function Home({ posts }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-1">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Tanmay Gujar
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I’m a MS CS student at UC San Diego. You’ve found my personal slice of
          the internet. I am interested in Distributed Systems, OS, Networks and
          all sorts of things.
        </h2>
      </div>

      <div className="flex flex-col flex-wrap items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Blog posts <Link href="/blog">→</Link>
        </h1>
        <Suspense fallback={null}>
          {!posts.length && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              No posts found.
            </p>
          )}
          {posts.map((post) => (
            <ArticleCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
            />
          ))}
        </Suspense>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = getSortedArticles().slice(0, 3);

  return { props: { posts } };
}
