import React from "react";
import Image from "next/image";
import { cn } from "@lib/utils";
import GithubIcon from "@public/svg/github.svg";

type TProjectCard = {
  image: string;
  title: string;
  description?: string;
  liveUrl?: string;
  ltr: boolean;
  githubUrl?: string;
};

export default function ProjectCard(props: TProjectCard) {
  return (
    <div
      className={cn(
        "p-5 md:p-10 flex flex-col  gap-6  w-full bg-white dark:bg-codeHightlightBg md:max-w-[40rem]  mt-[10rem] md:mt-0  ",
        {
          "md:flex-row md:ml-[10rem]": props.ltr,
          "md:flex-row-reverse md:mr-[10rem]": !props.ltr,
        },
      )}
    >
      <a href={`${props.liveUrl}`} target="_blank">
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
      </a>
      <div className="flex flex-col items-start justify-center w-full ">
        <a href={`${props.liveUrl}`} target="_blank">
          <div className="mb-4">
            <h1 className="text-m mb-2">{props.title}</h1>
            <p className="text-m">{props.description}</p>
          </div>
        </a>
        <div className="flex gap-4">
          <a href={`${props.liveUrl}`} target="_blank">
            <div className="text-s bg-primary py-2 px-3 rounded-md text-white">
              See live
            </div>
          </a>
          <a href={`${props.githubUrl}`} target="_blank">
            <div className="flex flex-col md:flex-row justify-between  ">
              <GithubIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
