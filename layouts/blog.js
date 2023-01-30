import Image from "next/image";
import { parseISO, format } from "date-fns";

import Container from "components/Container";
import profilePic from "@/public/static/images/avatar.jpg";
const host = process.env["NEXT_PUBLIC_HOST"] || null;

export default function BlogLayout({ children, frontmatter }) {
  return (
    <Container
      title={`${frontmatter.post.title} – Tanmay Gujar`}
      description={frontmatter.post.excerpt}
      image={frontmatter.post.coverImage}
      date={new Date(frontmatter.post.date).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {frontmatter.post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Tanmay Gujar"
              height={24}
              width={24}
              sizes="20vw"
              src={profilePic}
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {"Tanmay Gujar / "}
              {format(parseISO(frontmatter.post.date), "MMMM dd, yyyy")}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {frontmatter.readingTime}
            {` • `}
          </p>
        </div>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
        <div className="mt-8 text-sm text-gray-700 dark:text-gray-300">
          {host ? (
            <>
              <a
                href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                  `${host}/blog/${frontmatter.slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Discuss on Twitter"}
              </a>
              {`•`}
            </>
          ) : null}
          <a
            href="https://github.com/tgujar/blog/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Suggest Change"}
          </a>
        </div>
      </article>
    </Container>
  );
}
