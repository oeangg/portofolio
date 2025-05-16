import React from "react";
import { ListMenu } from "./listMenu";

export const NavbarMenu = () => {
  return (
    <header className="fixed bottom-6 left-1/2 z-30 -translate-x-1/2 transform overflow-hidden rounded-full bg-opacity-45 shadow-sm shadow-foreground backdrop-blur-2xl backdrop-filter">
      <nav className="">
        <ListMenu />
      </nav>
    </header>
  );
};
