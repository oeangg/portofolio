import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface ILinkIcon {
  href: string;
  Icon: IconType;
}

export const LinkIcon = ({ href, Icon }: ILinkIcon) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="transform text-foreground transition-colors duration-300 hover:rotate-2 hover:text-third"
    >
      <Icon size={21} />
    </Link>
  );
};
