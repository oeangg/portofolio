import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface ILinkButton {
  href: string;
  text: string;
  Icon: IconType;
  theme: "bg" | "border";
}

export const LinkButton = ({ href, text, Icon, theme }: ILinkButton) => {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-10 w-fit transform items-center justify-center gap-1 rounded-xl px-4 text-sm transition-colors duration-300 hover:border-transparent sm:h-12 sm:min-w-44 sm:px-5 sm:text-base",
        theme === "bg"
          ? "bg-primary text-background hover:bg-third"
          : "border border-primary bg-transparent text-primary hover:text-third hover:shadow-md hover:shadow-third",
      )}
    >
      {text} <Icon size={20} className="duration-300 group-hover:scale-125" />
    </Link>
  );
};
