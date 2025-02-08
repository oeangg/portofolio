import React from "react";

import { BookOpen, ContactRound, FileCode2, House, User } from "lucide-react";
import { LinkMenu } from "./link-menu";

export const ListMenu = () => {
  return (
    <ul className="flex flex-row gap-10 rounded-2xl bg-transparent px-6 py-4 shadow-sm shadow-foreground">
      <li>
        <LinkMenu href="/">
          <House size={16} /> Home
        </LinkMenu>
      </li>
      <li>
        <LinkMenu href="/project">
          <FileCode2 size={16} /> Project
        </LinkMenu>
      </li>
      <li>
        <LinkMenu href="/blog">
          <BookOpen size={16} /> Blog
        </LinkMenu>
      </li>
      <li>
        <LinkMenu href="/contact">
          <ContactRound size={16} />
          Contact
        </LinkMenu>
      </li>
      <li>
        <LinkMenu href="/about">
          <User size={16} />
          About
        </LinkMenu>
      </li>
    </ul>
  );
};
