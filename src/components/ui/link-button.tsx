import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

interface ILink {
  href: string;
  text: string;
  theme: "blue" | "transparant";
}

export const LinkButton = ({ href, text, theme }: ILink) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex h-10 w-fit items-center justify-center rounded-xl px-4 text-sm transition-colors duration-300 hover:border-transparent sm:h-12 sm:min-w-44 sm:px-5 sm:text-base",
        theme === "blue"
          ? "bg-primary hover:bg-blue-500"
          : "border border-primary bg-transparent text-primary hover:border-2 hover:border-blue-500 hover:text-blue-400",
      )}
    >
      {text}
    </Link>
  );
};
