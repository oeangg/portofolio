import React from "react";
import { FaFolderOpen } from "react-icons/fa";
import { SubTitle } from "@/components/ui/sub-title";
import Link from "next/link";

import { SiTailwindcss, SiPrisma } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FiChrome } from "react-icons/fi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const ProjectSection = () => {
  return (
    <div className="flex flex-col gap-10">
      <SubTitle
        title="My Projects"
        text="Following are the projects I have worked on"
      >
        <FaFolderOpen size={17} />
      </SubTitle>
      <div className="flex flex-col items-center justify-between gap-5 md:flex-row lg:gap-10">
        <iframe
          height="200"
          src="https://www.youtube.com/embed/Yjq-pF5bfYI?si=WFVM9Whp3Kt2z15Y"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full basis-1/3 rounded-lg p-2 shadow-sm shadow-foreground"
        ></iframe>
        <div className="basis-2/3 space-y-5">
          <h3 className="bg-gradient-to-r from-secondary to-foreground bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
            SiContact App
          </h3>
          <p>
            Application for organizing your contacts. This application was
            created with Next JS version 15.0 Canary. The database uses
            PostgreSQL with a Prisma ORM connection. The application is still
            standard, one day I will add more features. Hopefully!
          </p>
          <div className="flex flex-row gap-4">
            <div className="flex w-fit flex-row items-center gap-3 rounded-md p-2 shadow-sm shadow-foreground">
              <h4 className="text-xs font-light text-secondary">Tech Stack</h4>
              <div className="flex flex-row gap-1 text-secondary">
                <RiNextjsFill size={18} />
                <SiTailwindcss size={18} />
                <SiPrisma size={18} />
              </div>
            </div>

            <Link
              href="https://github.com/oeangg/sicontact-v2"
              target="_blank"
              className="flex w-fit flex-row items-center gap-2 rounded-md p-2 text-secondary shadow-sm shadow-foreground duration-300 hover:text-primary"
            >
              <FaGithub size={18} />
              <h4 className="text-xs font-light text-secondary">Repository</h4>
            </Link>

            <div className="flex w-fit cursor-not-allowed flex-row items-center gap-2 rounded-md p-2 text-foreground shadow-sm shadow-foreground duration-300">
              <FiChrome size={18} />
              <h4 className="text-xs font-light text-foreground">Live Site</h4>
            </div>
          </div>
        </div>
      </div>
      <Link
        href="/projects"
        className="flex items-center justify-center gap-1 text-sm font-light tracking-tight text-secondary duration-300 hover:underline"
      >
        See more project <MdKeyboardDoubleArrowRight size={14} />
      </Link>
    </div>
  );
};
