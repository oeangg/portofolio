import React from "react";

interface ITitle {
  title: string;
  text?: string;
  children: React.ReactNode;
}

export const SubTitle = ({ text, title, children }: ITitle) => {
  return (
    <div className="mb-5 flex flex-col justify-start gap-0 text-base font-semibold text-secondary md:mb-8 md:text-lg lg:mb-20">
      <div className="flex w-full flex-row items-center justify-start gap-1">
        {children}
        <span className="text-secondary">{title}</span>
      </div>
      <span className="text-sm font-normal tracking-wider text-foreground">
        {text}
      </span>
    </div>
  );
};
