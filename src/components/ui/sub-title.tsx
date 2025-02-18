import { cn } from "@/utils/cn";
import React from "react";

interface ISubTitle {
  title: string;
  text?: string;
  mb: "lg" | "sm";
}

export const SubTitle = ({ text, title, mb }: ISubTitle) => {
  return (
    <div
      className={cn(
        "mb-5 flex flex-col justify-start gap-2 text-lg font-medium text-secondary md:text-lg",
        mb === "lg" ? "md:mb-8 lg:mb-20" : "md:mb-8",
      )}
    >
      <div className="flex flex-col justify-start gap-2">
        <div className="flex items-center justify-start gap-[3px]">
          <span className="inline-block h-4 w-4 rounded-full bg-primary"></span>
          <span className="inline-block h-4 w-4 rounded-full bg-secondary"></span>
          <span className="inline-block h-4 w-4 rounded-full bg-foreground"></span>
        </div>
      </div>
      <div className="-space-y-1">
        <span className="block text-third">{title}.tsx</span>
        <span className="block text-sm font-light tracking-wide text-foreground">
          {text}
        </span>
      </div>
    </div>
  );
};
