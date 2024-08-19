import React from "react";
import { getBlogs } from "@/app/lib/get-blogs";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/app/components/mdx/mdx";
import readingTime from "reading-time";

export function generateStaticParams() {
  const blogs = getBlogs();

  return blogs.map((item) => ({ slug: item.slug }));
}

export default function page({ params }: { params: any }) {
  const blog = getBlogs().find((item) => item.slug === params.slug);

  if (!blog) {
    return notFound();
  }

  const statsTime = readingTime(blog.content);

  return (
    <div>
      <main>
        <h1>{blog.metadata.title}</h1>
        <div className="flex flex-col md:flex-row justify-between mb-8 ">
          <div className="flex gap-2 items-center">
            <span>{blog.metadata.author}</span>
            <span className="w-1 h-1 rounded-full bg-primary"></span>
            <span>{blog.metadata.publishedAt}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span>📖 {Math.ceil(statsTime.minutes)} min read</span>
            <span className="w-1 h-1 rounded-full bg-primary"></span>
            <span>words: {statsTime.words}</span>
          </div>
        </div>
        <article>
          <CustomMDX>{blog.content}</CustomMDX>
        </article>
      </main>
    </div>
  );
}
