import React from "react";

interface ITitle {
  title: string;
  text: string;
}

export const PageTitle = ({ text, title }: ITitle) => {
  return (
    <div className="md:mb-15 mb-10 flex flex-col items-center justify-center gap-0 md:text-lg lg:mb-20">
      <h1 className="text-center tracking-wide text-primary">{title}</h1>

      <span className="text-base font-normal tracking-wide text-secondary">
        {text}
      </span>
    </div>
  );
};
