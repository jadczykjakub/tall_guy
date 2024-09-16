import React from "react";
import BlogIcon from "@public/svg/exclamation-question-mark.svg";

export default function Question({ text }: { text: string }) {
  return (
    <div className=" w-fit rounded-t-small rounded-l-full mb-8 ">
      <div className="  flex gap-4 items-center pr-4">
        <div className="bg-primary p-4 rounded-full">
          <BlogIcon />
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
}
