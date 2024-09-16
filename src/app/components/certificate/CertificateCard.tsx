import React from "react";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import GithubIcon from "@public/svg/github.svg";
import { cn } from "@lib/utils";

interface TCertificateCard {
  title: string;
  githubUrl: boolean;
  certificateUrl: string;
  shortDescription: string;
  issueDate: string;
  imageSrc: string;
  classNameFromParent?: string;
}

export default function CertificateCard(props: TCertificateCard) {
  return (
    <div
      className={cn(
        "dark:shadow-[0px_20px_21px_-12px_rgba(99,99,99,1)] shadow-[0px_20px_21px_-12px_rgba(66,68,90,1)] rounded-md px-4 py-8",
        props.classNameFromParent,
      )}
    >
      <Link href={props.certificateUrl} target="_blank">
        <Image
          src={`./${props.imageSrc}`}
          className="object-contain w-full h-fit object-center  "
          alt="blog card image"
          width={200}
          height={200}
        />
      </Link>
      <div className="text-center grid gap-4">
        <div>
          <h2>{props.title}</h2>
          <p>{props.shortDescription}</p>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <p className="text-m">
            📅 {dayjs(props.issueDate).format("DD.MM.YYYY")}
          </p>
          <a href={`${props.githubUrl}`} target="_blank">
            <div className="flex flex-col md:flex-row justify-center  ">
              <GithubIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
