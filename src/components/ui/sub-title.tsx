import React from "react";

interface ITitle {
  title: string;
  text?: string;
  children: React.ReactNode;
}

export const SubTitle = ({ text, title, children }: ITitle) => {
  return (
    <div className="mb-5 flex flex-col justify-start gap-0 text-base font-bold text-secondary md:mb-8 md:text-lg lg:mb-14">
      <div className="flex w-full flex-row items-center justify-start gap-2">
        {children}
        <span className="uppercase text-secondary">{title}</span>
      </div>
      <span className="text-sm font-normal tracking-wider text-foreground">
        {text}
      </span>
    </div>
  );
};
