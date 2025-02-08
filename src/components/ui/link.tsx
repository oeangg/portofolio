import Link from "next/link";
import React from "react";

interface ILink {
  href: string;
  text: string;
}

export const LinkButton = ({ href, text }: ILink) => {
  return (
    <Link
      href={href}
      className="flex h-10 w-fit items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
    >
      {text}
    </Link>
  );
};
