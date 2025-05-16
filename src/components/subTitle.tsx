import React from "react";

interface ISubTitle {
  title: string;
}

export const SubTitle = ({ title }: ISubTitle) => {
  return (
    <div className="flex flex-col justify-start gap-1">
      <span className="block text-2xl font-semibold">{title}</span>
    </div>
  );
};
