"use client";

import Link from "next/link";
import React, { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { scrollToTop } from "../libs/scrollToTop";

interface ILinkIcon {
  href: string;
  text: string;
  children: ReactNode;
}

export const LinkIcon = ({ href, children, text }: ILinkIcon) => {
  const handleClick = () => {
    scrollToTop();
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          onClick={href === "/" ? handleClick : undefined}
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
