import React from "react";
import { ListMenu } from "./list-menu";

export const HeaderMenu = () => {
  return (
    <header className="fixed left-1/2 top-0 z-[9999] -translate-x-1/2 transform overflow-hidden rounded-b-2xl bg-opacity-45 pt-10 shadow-sm shadow-foreground backdrop-blur-2xl backdrop-filter">
      <nav className="">
        <ListMenu />
      </nav>
    </header>
  );
};
