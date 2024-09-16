"use client";

import React, { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { cn } from "@lib/utils";
import Link from "next/link";
import { useTheme } from "next-themes";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import { Button, Dropdown } from "@nextui-org/react";
import Logo from "@public/svg/tallguy.svg";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleHamburger = (isToogled: boolean) => {
    setIsNavOpen(isToogled);
  };

  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="h-20 px-4 md:px8"></div>
      <div className="flex justify-between items-center bg-primary h-20 px-4 md:px8 fixed w-full top-0 z-50 max-w-10xl">
        <Link href={"/"} onClick={() => handleHamburger(false)}>
          <Logo className="w-48 fill-white dark:fill-codeHightlightBg" />
        </Link>

        <div className="hidden md:block ">
          <div className=" flex h-full  gap-16 mr-4">
            <nav className=" md:block h-full ">
              <ul className="flex gap-8 font-extralight h-full ">
                <li className=" relative flex gap-4 group">
                  <Link
                    href={"/blog"}
                    className="flex gap-1 items-center h-full text-white dark:text-black font-bold"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/projects"}
                    className="flex gap-1 items-center h-full text-white dark:text-black font-bold"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/certificates"}
                    className="flex gap-1 items-center h-full text-white dark:text-black font-bold"
                  >
                    Certificates
                  </Link>
                </li>
              </ul>
            </nav>
            <ThemeSwitcher />
          </div>
        </div>

        <div className="md:hidden ">
          <nav
            className={cn(
              "absolute -left-full top-20 bg-primary w-full h-lvh flex flex-col items-center gap-4 p-4 transition-transform ",
              {
                "translate-x-full": isNavOpen,
              },
            )}
          >
            <div className=" grid gap-16 justify-items-center">
              <ul className="flex flex-col gap-8 font-extralight  items-center ">
                <li className="">
                  <Link
                    href={"/blog"}
                    className="flex gap-1 items-center h-full text-white dark:text-black font-bold "
                    onClick={() => handleHamburger(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/projects"}
                    className="flex gap-1 items-center h-full text-white dark:text-black font-bold "
                    onClick={() => handleHamburger(false)}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/certificates"}
                    className="flex gap-1 items-center h-full text-white dark:text-black font-bold "
                    onClick={() => handleHamburger(false)}
                  >
                    Certificates
                  </Link>
                </li>
              </ul>
            </div>
            <ThemeSwitcher setIsNavOpen={setIsNavOpen} />
          </nav>
          <div className="dark:text-black text-white">
            <Hamburger
              onToggle={handleHamburger}
              toggled={isNavOpen}
              easing="transform"
            />
          </div>
        </div>
      </div>
    </>
  );
}
