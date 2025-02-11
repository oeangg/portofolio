import React from "react";

export const TechItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-md bg-transparent p-2 text-xs font-thin shadow-sm shadow-foreground transition-colors duration-300 hover:text-secondary hover:shadow-md hover:shadow-primary">
      {children}
    </div>
  );
};
