import { cn } from "../utils/cn";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface ILinkButton {
  href: string;
  text: string;
  download?: string;
  Icon: IconType;
  theme: "bg" | "border";
}

export const LinkButton = ({
  href,
  text,
  download,
  Icon,
  theme,
}: ILinkButton) => {
  return (
    <Link
      href={href}
      download={download}
      {...(download ? { target: "_blank" } : {})}
      className={cn(
        "group flex h-8 w-fit transform items-center justify-center gap-1 rounded-full px-3 text-xs font-medium transition-all duration-300 hover:border-transparent",
        theme === "bg"
          ? "bg-primary text-background hover:bg-primary/85 hover:shadow-lg hover:shadow-popover-foreground"
          : "h border border-primary bg-transparent text-primary hover:bg-primary/85 hover:text-background hover:shadow-lg hover:shadow-popover-foreground",
      )}
    >
      {text} <Icon size={16} className="duration-300 group-hover:scale-125" />
    </Link>
  );
};
