"use client";

import React from "react";
import { House, MessageSquareText } from "lucide-react";
import { LinkIcon } from "../linkIcon";
import { LinkSosmed } from "../hero/linkSosmed";

export const ListMenu = () => {
  return (
    <ul className="flex flex-row gap-4 bg-transparent px-4 py-3">
      <li className="border-r pr-2">
        <LinkIcon href="/" text="Home">
          <House size={22} />
        </LinkIcon>
      </li>
      <LinkSosmed />

      <li className="border-l pl-2">
        <LinkIcon href="/#contact" text="Contact Me">
          <MessageSquareText size={22} />
        </LinkIcon>
      </li>
    </ul>
  );
};
