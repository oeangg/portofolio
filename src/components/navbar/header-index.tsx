import React from "react";
import { ListMenu } from "./list-menu";

export const NavbarMenu = () => {
  return (
    <header className="fixed bottom-10 left-1/2 z-30 -translate-x-1/2 transform overflow-hidden rounded-full bg-opacity-45 shadow-sm shadow-foreground backdrop-blur-2xl backdrop-filter">
      <nav className="">
        <ListMenu />
      </nav>
    </header>
  );
};
