import React from "react";

type TBlogDetails = {
  author: string;
  publishedAt: string;
  minutes: number;
  words: string;
};

export default function BlogDetails({
  author,
  publishedAt,
  minutes,
  words,
}: TBlogDetails) {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-8 ">
      <div className="flex gap-2 items-center">
        <span>{author}</span>
        <span className="w-1 h-1 rounded-full bg-primary"></span>
        <span>{publishedAt}</span>
      </div>
      <div className="flex gap-2 items-center">
        <span>📖 {Math.ceil(minutes)} min read</span>
        <span className="w-1 h-1 rounded-full bg-primary"></span>
        <span>words: {words}</span>
      </div>
    </div>
  );
}
