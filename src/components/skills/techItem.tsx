import React from "react";
import { IconType } from "react-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { cn } from "@/src/utils/cn";

interface ITechItem {
  text: string;
  Icon: IconType;
  iconSize: number;
  size?: "sm" | "md";
}

export const TechItem = ({ text, iconSize, size = "md", Icon }: ITechItem) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "flex flex-col items-center justify-center gap-2 rounded-md bg-transparent p-1 text-xs font-thin text-secondary-foreground/80 shadow-foreground transition-all duration-300 hover:text-foreground",
            size === "md"
              ? "h-12 w-12 hover:scale-105 hover:shadow-xl"
              : "h-7 w-7",
          )}
        >
          <Icon size={iconSize} />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{text}</p>
      </TooltipContent>
    </Tooltip>
  );
};
