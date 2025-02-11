import React from "react";

export const Footer = () => {
  return (
    <div className="mt-40 border-t-[1px] border-foreground">
      <h3 className="w-full py-12 text-center text-xs font-light tracking-wider">
        Copyright &#169; {new Date().getFullYear()} Mohammad Subhan. All rights
        reserved.
      </h3>
    </div>
  );
};
