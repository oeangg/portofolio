import React from "react";

interface IPageTitle {
  title: string;
  text: string;
}

export const PageTitle = ({ text, title }: IPageTitle) => {
  return (
    <div className="md:mb-15 mb-10 flex flex-col items-center justify-center gap-0 md:text-lg lg:mb-20">
      <h1 className="tracking-wide text-primary">{title}</h1>

      <p className="text-base font-normal tracking-wide text-secondary">
        {text}
      </p>
    </div>
  );
};
