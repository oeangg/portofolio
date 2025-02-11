import Link from "next/link";
import React from "react";

interface ILink {
  href: string;
  children: React.ReactNode;
}

export const LinkIcon = ({ href, children }: ILink) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="transform text-foreground transition-colors duration-300 hover:rotate-2 hover:text-third"
    >
      {children}
    </Link>
  );
};
