import React from "react";
import LinkedinIcon from "@/../public/svg/github.svg";

export default function Footer() {
  return (
    <div className="px-8">
      <div className="max-w-7xl mx-auto relative border-t-2 border-t-primary grid gap-2 justify-items-center py-16 w-full text-center ">
        <p>© 2024 Jakub Jadczyk. All rights reserved.</p>
        <a href="https://github.com/jadczykjakub" target="_blank">
          <LinkedinIcon />
        </a>
      </div>
    </div>
  );
}
