import fs from 'fs';
import path from 'path';
import { cache } from 'react';
import matter from 'gray-matter';

function getBlogFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

type Metadata = {
  title: string;
  publishedAt: string;
  author: string;
  published: boolean;
  imageSrc: string;
  shortDescription: string;
};

export const getBlogs = () => {
  const BLOGS_FOLDER = path.join(process.cwd(), 'content', 'blog');

  const posts = getBlogFiles(BLOGS_FOLDER);

  return posts.map((post) => {
    const filePath = path.join(BLOGS_FOLDER, post);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      metadata: data as Metadata,
      content,
      slug: post.replace(/\.mdx?$/, ''),
    };
  });
};

export function getLatestBlogs() {
  let blogs = getBlogs();
  blogs = blogs.filter(
    (blog) => blog.metadata && blog.metadata.published === true
  );

  // Sort by date
  const allBlogs = blogs.sort((a, b) => {
    const dateA = new Date(a.metadata.publishedAt!);
    const dateB = new Date(b.metadata.publishedAt!);
    return dateB.getTime() - dateA.getTime();
  });

  // Return the latest 3 blogs
  return allBlogs.slice(0, 3);
}
