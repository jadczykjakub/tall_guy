"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import readingTime from "reading-time";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { Suspense } from "react";

export default function BlogList(props: any) {
  const [blog, setBlog] = useState(props.blogs);
  const [activeBtn, setActiveBtn] = useState("");

  const handleLink = (hash: string) => {
    if (hash === "") {
      setBlog(props.blogs);
      setActiveBtn("");
      return;
    }

    const filteredBlog = props.blogs.filter((item: any) => {
      return item.metadata.category.includes(hash.replace("#", ""));
    });

    setBlog(filteredBlog);
    setActiveBtn(hash);
  };

  useEffect(() => {
    if (window.location.hash) {
      handleLink(window.location.hash);
      setActiveBtn(window.location.hash.replace("#", ""));
    }
  }, []);

  return (
    <div className="grid gap-8">
      <div className="flex gap-4">
        {Object.keys(props.categories).map((item: any, index) => {
          return (
            <Link
              key={index}
              href={`#${item}`}
              onClick={() => handleLink(item)}
              className={cn(
                "text-s bg-primary py-2 px-3 rounded-md text-white bg-opacity-60",
                {
                  "bg-opacity-100": activeBtn === item,
                },
              )}
            >
              {item} {props.categories[item]}
            </Link>
          );
        })}
        <Link
          href={""}
          onClick={() => handleLink("")}
          className="text-s bg-secondary py-2 px-3 rounded-md text-white flex  items-center"
        >
          Clear
        </Link>
      </div>

      {blog.map((item: any, index: any) => {
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
  );
}
