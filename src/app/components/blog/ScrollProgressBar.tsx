"use client";

import { useCallback, useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);

  const progressBarHandler = useCallback(() => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight}`;

    setScroll(Number(scroll));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", progressBarHandler);
    return () => window.removeEventListener("scroll", progressBarHandler);
  }, [progressBarHandler]);
  return (
    <div
      className="!fixed left-0 w-full h-2 bg-black dark:bg-white origin-top-left  transform duration-300  top-[5rem] "
      style={{
        transform: `scale(${scroll},1)`,
        zIndex: 100,
      }}
    />
  );
}
