"use client";

import Link from "next/link";
import React, { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { scrollToTop } from "../libs/scrollToTop";
import { useRouter } from "next/navigation";

interface ILinkIcon {
  href: string;
  text: string;
  children: ReactNode;
}

export const LinkIcon = ({ href, children, text }: ILinkIcon) => {
  const router = useRouter();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href === "/") {
      event.preventDefault();
      router.push(href);
      setTimeout(() => {
        scrollToTop();
      }, 100);
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          onClick={handleClick}
          className="transform text-secondary-foreground/80 transition-colors duration-300 hover:rotate-6 hover:text-secondary-foreground"
        >
          {children}
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{text}</p>
      </TooltipContent>
    </Tooltip>
  );
};
