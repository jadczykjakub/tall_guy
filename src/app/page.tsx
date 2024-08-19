import React from "react";
import { getLatestBlogs } from "./lib/get-blogs";
import Link from "next/link";
import BlogCard from "@/app/components/blog/BlogCard";
import Hero from "@/app/components/Hero";
import BlogIcon from "@/../public/svg/blog-icon.svg";

export default function page() {
  const latestBlog = getLatestBlogs();

  return (
    <div className="min-h-svh grid gap-16 md:gap-32">
      <Hero />

      <div className="grid gap-8 ">
        <h2 className="text-center">Recent posts</h2>
        <div className="grid gap-8 justify-items-center">
          {latestBlog.map((item, index) => {
            return (
              <BlogCard
                image={item.metadata.imageSrc}
                minutes={22}
                slug={item.slug}
                title={item.metadata.title}
                words={223}
                ltr={index % 2 === 0}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-center text-center">
        <Link href={"blog"}>
          <div className="grid justify-items-center gap-4">
            {" "}
            <BlogIcon /> <span className="font-bold"> Read all posts</span>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}
