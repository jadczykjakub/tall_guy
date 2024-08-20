/* eslint-disable no-useless-escape */
import React from "react";
import NextImage from "next/image";
import { MDXComponents } from "mdx/types";
// // @ts-expect-error no types
// import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import { cn } from "@/app/lib/utils";
import Pre from "./Pre";
import { Callout } from "./Callout";
import { CustomLink } from "./CustomLink";
import rehypeHighlight from "rehype-highlight";
import { solarizedLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import {
//   railscasts,
// } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Question from "@/app/components/blog/Question";

const CodeBlock = (props: any) => {
  let { className } = props;
  className = className?.replace("language-", "");
  return (
    <SyntaxHighlighter style={a11yDark} language={className}>
      {props.children}
    </SyntaxHighlighter>
  );
};

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

const mdxComponents: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1 className={cn(className)} {...props}>
      <a
        href={`#${slugify(props.children as string)}`}
        id={slugify(props.children as string)}
        className="anchor"
      />
      {props.children}
    </h1>
  ),
  h2: ({ className, ...props }) => (
    <h2 className={cn(className, "font-bold text-xl mb-4")}>
      <a
        href={`#${slugify(props.children as string)}`}
        id={slugify(props.children as string)}
        className="anchor"
      />
      {props.children}
    </h2>
  ),
  h3: ({ className, ...props }) => (
    <h3 className={cn(className, "font-bold text-l mb-4")} {...props}>
      <a
        href={`#${slugify(props.children as string)}`}
        id={slugify(props.children as string)}
        className="anchor"
      />
      {props.children}
    </h3>
  ),
  h4: ({ className, ...props }) => (
    <h4 className={cn(className)} {...props}>
      <a
        href={`#${slugify(props.children as string)}`}
        id={slugify(props.children as string)}
        className="anchor"
      />
      {props.children}
    </h4>
  ),
  h5: ({ className, ...props }) => (
    <h5 className={cn(className)} {...props}>
      <a
        href={`#${slugify(props.children as string)}`}
        id={slugify(props.children as string)}
        className="anchor"
      />
      {props.children}
    </h5>
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={cn(
        "my-4 scroll-m-20 !text-base font-semibold text-black dark:text-white",
        className,
      )}
      {...props}
    >
      <a
        href={`#${slugify(props.children as string)}`}
        id={slugify(props.children as string)}
        className="anchor"
      />
      {props.children}
    </h6>
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("mb-6 list-disc pl-6", className)} {...props} />
  ),

  li: ({ className, ...props }) => <li {...props} className="mb-4 " />,
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 [&>*]:text-slate-600 opacity-25",
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p className={cn("mb-6 ", className)} {...props} />
  ),
  a: CustomLink as React.ComponentType<any>,
  Link: CustomLink as React.ComponentType<any>,
  Callout,
  //   code: Code as React.ComponentType<any>,
  code: (props: any) => <CodeBlock {...props} />,
  pre: Pre,
  img: (props: any) => (
    <NextImage layout="fill" className="!relative md:!w-2/3" {...props} />
  ),
  Question: ({ className, ...props }) => <Question {...props}></Question>,
};

export function CustomMDX({
  children,
  components,
}: {
  children: any;
  components?: MDXComponents;
}) {
  return (
    <MDXRemote
      source={children}
      components={{ ...mdxComponents, ...(components || {}) }}
    />
  );
}
