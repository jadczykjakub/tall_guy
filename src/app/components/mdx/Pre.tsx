"use client";

import { useState, useRef } from "react";
import { Copy, Check } from "lucide-react";

const Pre = (props: any) => {
  const textInput = useRef<any>(null);
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textInput?.current?.textContent);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <pre
      ref={textInput}
      className="grid grid-cols-[1fr_25px] gap-2  rounded-md bg-codeHightlightBg pr-3 mb-4"
    >
      <div className="overflow-x-auto">{props.children}</div>
      <button
        aria-label="Copy code"
        type="button"
        className="h-4 w-4 pt-2"
        onClick={onCopy}
      >
        {copied ? (
          <Check className="text-primary" />
        ) : (
          <Copy className="text-white" />
        )}
      </button>
    </pre>
  );
};

export default Pre;
