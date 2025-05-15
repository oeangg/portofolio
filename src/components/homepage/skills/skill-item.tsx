import React from "react";
import { IconType } from "react-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";

interface ITechItem {
  text: string;
  Icon: IconType;
}

export const TechItem = ({ text, Icon }: ITechItem) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex h-12 w-12 flex-col items-center justify-center gap-2 rounded-md bg-transparent p-1 text-xs font-thin text-secondary-foreground/80 shadow-foreground transition-all duration-300 hover:scale-105 hover:text-foreground hover:shadow-xl">
          <Icon size={32} />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{text}</p>
      </TooltipContent>
    </Tooltip>
  );
};
