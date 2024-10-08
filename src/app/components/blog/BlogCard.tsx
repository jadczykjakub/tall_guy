import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@lib/utils";
import dayjs from "dayjs";

type TBlogCard = {
  image: string;
  words: number;
  minutes: number;
  title: string;
  description?: string;
  slug: string;
  ltr: boolean;
  data: string;
};

export default function BlogCard(props: TBlogCard) {
  return (
    <Link href={`blog/${props.slug}`}>
      <article
        className={cn(
          "p-5 md:p-10 flex flex-col  gap-6  w-full bg-white dark:bg-codeHightlightBg md:max-w-[40rem]  mt-[10rem] md:mt-0  ",
          {
            "md:flex-row md:ml-[10rem]": props.ltr,
            "md:flex-row-reverse md:mr-[10rem]": !props.ltr,
          },
        )}
      >
        <div
          className={cn(
            "relative mt-[-10rem] md:mt-0 min-w-[66%] sm:min-h-[12rem]  ",
            {
              "md:ml-[-12.5rem]": props.ltr,
              "md:mr-[-12.5rem]": !props.ltr,
            },
          )}
        >
          <Image
            src={`./${props.image}`}
            className="object-contain w-full h-fit object-center  dark:shadow-[0px_20px_21px_-12px_rgba(99,99,99,1)] shadow-[0px_20px_21px_-12px_rgba(66,68,90,1)] rounded-md"
            alt="blog card image"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full ">
          <div className="flex flex-col md:flex-row justify-between  ">
            <div className="flex flex-wrap gap-2 items-center">
              <p className="text-m">📖 {props.minutes} minutes</p>
              <span className="w-1 h-1 rounded-full bg-primary"></span>
              <p className="text-m">{props.words} words</p>
              <span className="w-1 h-1 rounded-full bg-primary"></span>

              <p className="text-m">
                📅 {dayjs(props.data).format("DD.MM.YYYY")}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <h1 className="text-m mb-2">{props.title}</h1>
            <p className="text-m">{props.description}</p>
          </div>
          <div className="text-s bg-primary py-2 px-3 rounded-md text-white">
            Read more
          </div>
        </div>
      </article>
    </Link>
  );
}
