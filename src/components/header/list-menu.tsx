"use client";

import React from "react";
import { usePathname } from "next/navigation";

import {
  FaHouseUser,
  FaFolderOpen,
  FaBookReader,
  FaUser,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { LinkMenu } from "./link-menu";

export const ListMenu = () => {
  const pathname = usePathname();

  return (
    <ul className="hidden flex-row gap-10 bg-transparent px-6 py-4 lg:flex">
      <li className={pathname === "/" ? "text-secondary" : ""}>
        <LinkMenu href="/">
          <FaHouseUser size={15} /> Home
        </LinkMenu>
      </li>
      <li className={pathname === "/projects" ? "text-secondary" : ""}>
        <LinkMenu href="/projects">
          <FaFolderOpen size={15} /> Projects
        </LinkMenu>
      </li>
      <li className={pathname === "/blog" ? "text-secondary" : ""}>
        <LinkMenu href="/blog">
          <FaBookReader size={15} /> Blog
        </LinkMenu>
      </li>
      <li className={pathname === "/contact" ? "text-secondary" : ""}>
        <LinkMenu href="/contact">
          <MdOutlineEmail size={16} />
          Contact
        </LinkMenu>
      </li>
      <li className={pathname === "/about" ? "text-secondary" : ""}>
        <LinkMenu href="/about">
          <FaUser size={15} />
          About
        </LinkMenu>
      </li>
    </ul>
  );
};
