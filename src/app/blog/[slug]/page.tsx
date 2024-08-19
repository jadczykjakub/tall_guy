import React from "react";
import { getBlogs } from "@/app/lib/get-blogs";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/app/components/mdx/mdx";
import readingTime from "reading-time";
import ScrollProgressBar from "@/app/components/blog/ScrollProgressBar";
import { stringToSlug } from "@/app/lib/utils";
import Link from "next/link";
import { cn } from "@/app/lib/utils";

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

  const tableOfContents = blog.tableOfContents;

  console.log(tableOfContents, "elo");

  return (
    <div>
      <main>
        <ScrollProgressBar />

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
        <div className="mb-8">
          <h2>Content:</h2>
          <ul className="list-disc pl-6 font-extralight">
            {tableOfContents?.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={`#${stringToSlug(item.heading)}`}>
                    {item.heading}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <article>
          <CustomMDX>{blog.content}</CustomMDX>
        </article>
      </main>
    </div>
  );
}
