import React from "react";
import { getBlogs } from "../lib/get-blogs";
import Link from "next/link";
import BlogCard from "../components/blog/BlogCard";
import readingTime from "reading-time";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default function page() {
  const blogs = getBlogs()
    .filter((item) => item.metadata.published)
    .sort((a, b) => {
      const dateA = new Date(a.metadata.publishedAt!);
      const dateB = new Date(b.metadata.publishedAt!);
      return dateB.getTime() - dateA.getTime();
    });

  return (
    <main className="grid gap-16 md:gap-32">
      <div>
        <h1>Blog</h1>
        <p>I write posts because it is the best way to consolidate knowledge</p>
      </div>

      <div className="grid gap-8">
        {blogs.map((item, index) => {
          const statsTime = readingTime(item.content);

          return (
            <BlogCard
              image={item.metadata.imageSrc}
              minutes={Math.ceil(statsTime.minutes)}
              slug={item.slug}
              title={item.metadata.title}
              words={statsTime.words}
              ltr={index % 2 === 0}
              key={index}
              description={item.metadata.shortDescription}
              data={item.metadata.publishedAt}
            />
          );
        })}
      </div>
    </main>
  );
}
