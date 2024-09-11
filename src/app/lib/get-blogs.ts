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
  category: string[];
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
      tableOfContents: getTableOfContent(content),
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

function getTableOfContent(markdown: string) {
  const regXHeader = /#{2,6}.+/g;
  const headingArray = markdown.match(regXHeader)
    ? markdown.match(regXHeader)
    : [];
  return headingArray?.map((heading) => {
    return {
      level: heading.split('#').length - 1 - 2, // we starts from the 2nd heading that's why we subtract 2 and 1 is extra heading text
      heading: heading.replace(/#{2,6}/, '').trim(),
    };
  });
}

export function getAllCategoriesFromBlog() {
  let categories: string[] = [];
  const blogs = getBlogs();

  const categories2: { [key: string]: number } = {};

  blogs.map((index) => {
    index.metadata.category.map((categoryItem) => {
      if (!categories.includes(categoryItem)) {
        categories2[categoryItem] = 1;

        categories.push(categoryItem);
      } else {
        categories2[categoryItem] += 1;
      }
    });
  });

  return categories2;
}
