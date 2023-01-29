import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "data", "articles");

export function getSortedArticles() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const slug = fileName.replace(/\.mdx$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const { data } = matter(fileContents);

    // Combine the data with the id
    return {
      ...data,
      slug,
      readingTime: readingTime(fileContents).text,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getArticleSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  console.log(fileNames);
  return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export async function getArticleFromSlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const { content, data } = matter(fileContents);

  // Combine the data with the id and contentHtml
  return {
    content,
    frontmatter: {
      slug,
      post: data,
      readingTime: readingTime(fileContents).text,
    },
  };
}
