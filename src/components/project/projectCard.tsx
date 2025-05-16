import React from "react";

import { FaCss3Alt, FaGithub, FaHtml5 } from "react-icons/fa";
import { FiChrome } from "react-icons/fi";
import Link from "next/link";
import { RiNextjsFill } from "react-icons/ri";
import { SiPrisma, SiTailwindcss } from "react-icons/si";
import { cn } from "@/src/utils/cn";
import Image from "next/image";
import { IoLogoJavascript } from "react-icons/io";
import { TechItem } from "../skills/techItem";

interface IProjectItem {
  linkVideo?: string | null;
  linkImage?: string | null;
  titleVideo: string;
  description: string;
  techIcon: string[];
  linkRepo: string;
  liveSite?: string;
  index: number;
}

export const CardProject = ({
  linkVideo,
  titleVideo,
  linkImage,
  description,
  techIcon,
  linkRepo,
  liveSite,
  index,
}: IProjectItem) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-between gap-4 transition-shadow duration-300 md:h-[280px]",
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
      )}
    >
      {linkVideo && (
        <div className="relative h-full w-full basis-[330px]">
          <iframe
            style={{ height: "100%", width: "100%" }}
            src={linkVideo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="overflow-hidden rounded-xl shadow-lg"
          ></iframe>
        </div>
      )}
      {linkImage && (
        <div className="relative h-full w-full basis-[330px]">
          <Image
            src={linkImage}
            alt={titleVideo}
            fill
            sizes="330px"
            style={{ objectFit: "cover" }} //
            className="overflow-hidden rounded-xl shadow-lg"
          />
        </div>
      )}
      <div className="flex-1 space-y-4 p-4">
        <h3 className="text-xl font-semibold tracking-tight">{titleVideo}</h3>
        <p className="text-sm tracking-tighter text-secondary-foreground">
          {description}
        </p>
        <div className="md:tems-center flex w-full flex-col gap-2 md:flex-row md:justify-between">
          <div className="flex flex-row items-center gap-1">
            {techIcon.map((icon, index) => {
              if (icon.includes("next"))
                return (
                  <TechItem
                    key={index}
                    text="Next JS"
                    Icon={RiNextjsFill}
                    iconSize={22}
                    size="sm"
                  />
                );
              if (icon.includes("tailwind"))
                return (
                  <TechItem
                    key={index}
                    text="Tailwind CSS"
                    Icon={SiTailwindcss}
                    iconSize={22}
                    size="sm"
                  />
                );
              if (icon.includes("prisma"))
                return (
                  <TechItem
                    key={index}
                    text="Prisma ORM"
                    Icon={SiPrisma}
                    iconSize={22}
                    size="sm"
                  />
                );

              if (icon.includes("html"))
                return (
                  <TechItem
                    key={index}
                    text="HTML"
                    Icon={FaHtml5}
                    iconSize={22}
                    size="sm"
                  />
                );

              if (icon.includes("javascript"))
                return (
                  <TechItem
                    key={index}
                    text="Javascipt"
                    Icon={IoLogoJavascript}
                    iconSize={22}
                    size="sm"
                  />
                );
              if (icon.includes("css"))
                return (
                  <TechItem
                    key={index}
                    text="CSS"
                    Icon={FaCss3Alt}
                    iconSize={22}
                    size="sm"
                  />
                );
              return null;
            })}
          </div>
          <div className="flex flex-row gap-2">
            <Link
              href={linkRepo}
              target="_blank"
              className="flex h-7 flex-row items-center gap-1 rounded-full bg-foreground px-2 text-xs font-normal tracking-tighter text-primary-foreground/90 shadow-md duration-300 hover:bg-primary/90 hover:text-primary-foreground"
            >
              <FaGithub size={14} />
              <h4>Repository</h4>
            </Link>

            {liveSite ? (
              <Link
                href={liveSite}
                target="_blank"
                className="flex h-7 flex-row items-center gap-1 rounded-full bg-primary px-2 text-xs font-normal tracking-tighter text-primary-foreground/90 shadow-md duration-300 hover:bg-primary/90 hover:text-primary-foreground"
              >
                <FiChrome size={14} />
                <h4>Live Site</h4>
              </Link>
            ) : (
              <div className="flex h-7 cursor-not-allowed flex-row items-center gap-1 rounded-full border px-2 text-xs font-normal tracking-tighter">
                <FiChrome size={14} />
                <h4 className="text-foreground">Live Site</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
