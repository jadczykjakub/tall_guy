import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <div className="grid gap-4 justify-items-center">
      <h1>Sorry, can&apos;t find that page</h1>
      <Link href={"/"} className="bg-primary py-2 px-4 rounded-lg">
        Home
      </Link>
    </div>
  );
}
