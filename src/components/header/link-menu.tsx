import React from "react";
import Link from "next/link";

interface ILink {
  href: string;
  children: React.ReactNode;
}

export const LinkMenu = ({ href, children }: ILink) => {
  return (
    <Link
      href={href}
      className="hover:text-secondary flex flex-row items-center justify-start gap-1 text-sm font-medium tracking-wide text-foreground duration-300"
    >
      {children}
    </Link>
  );
};
