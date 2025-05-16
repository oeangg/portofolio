import React from "react";

import { FaCss3Alt, FaGithub, FaHtml5 } from "react-icons/fa";
import { FiChrome } from "react-icons/fi";
import Link from "next/link";
import { RiNextjsFill } from "react-icons/ri";
import { SiPrisma, SiTailwindcss } from "react-icons/si";
import { cn } from "../utils/cn";
import Image from "next/image";
import { IoLogoJavascript } from "react-icons/io";
import { TechItem } from "./skills/techItem";

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

interface IExperience {
  time: string;
  position: string;
  company: string;
  jobdesc: string[];
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
        "flex w-full flex-col items-center justify-between gap-4 transition-shadow duration-300 hover:shadow-md md:h-[270px]",
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
      )}
    >
      {linkVideo && (
        <div className="relative h-full w-full basis-[200px] overflow-hidden">
          <iframe
            style={{ height: "100%", width: "100%" }}
            src={linkVideo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {linkImage && (
        <div className="relative h-full w-full basis-[200px] overflow-hidden">
          <Image
            src={linkImage}
            alt={titleVideo}
            fill
            sizes="200px"
            style={{ objectFit: "cover" }} //
            className="scale-100 transition-all duration-300 hover:scale-110"
          />
        </div>
      )}
      <div className="flex-1 space-y-4 p-4">
        <h3 className="text-xl font-semibold tracking-tight">{titleVideo}</h3>
        <p className="text-sm text-secondary-foreground">{description}</p>
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex w-fit flex-row items-center gap-2">
            {techIcon.map((icon, index) => {
              if (icon.includes("next"))
                return (
                  <TechItem
                    key={index}
                    text="Next JS"
                    Icon={RiNextjsFill}
                    iconSize={20}
                    size="sm"
                  />
                );
              if (icon.includes("tailwind"))
                return (
                  <TechItem
                    key={index}
                    text="Tailwind CSS"
                    Icon={SiTailwindcss}
                    iconSize={20}
                    size="sm"
                  />
                );
              if (icon.includes("prisma"))
                return (
                  <TechItem
                    key={index}
                    text="Prisma ORM"
                    Icon={SiPrisma}
                    iconSize={20}
                    size="sm"
                  />
                );

              if (icon.includes("html"))
                return (
                  <TechItem
                    key={index}
                    text="HTML"
                    Icon={FaHtml5}
                    iconSize={20}
                    size="sm"
                  />
                );

              if (icon.includes("javascript"))
                return (
                  <TechItem
                    key={index}
                    text="Javascipt"
                    Icon={IoLogoJavascript}
                    iconSize={20}
                    size="sm"
                  />
                );
              if (icon.includes("css"))
                return (
                  <TechItem
                    key={index}
                    text="CSS"
                    Icon={FaCss3Alt}
                    iconSize={20}
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
              className="flex h-7 w-fit flex-row items-center gap-1 rounded-full bg-foreground px-2 text-xs font-light tracking-tight text-primary-foreground/80 shadow-md duration-300 hover:bg-primary/90 hover:text-primary-foreground"
            >
              <FaGithub size={14} />
              <h4>Repository</h4>
            </Link>

            {liveSite ? (
              <Link
                href={liveSite}
                target="_blank"
                className="flex h-7 w-fit flex-row items-center gap-1 rounded-full bg-primary px-2 text-xs font-light tracking-tight text-primary-foreground/80 shadow-md duration-300 hover:bg-primary/90 hover:text-primary-foreground"
              >
                <FiChrome size={14} />
                <h4>Live Site</h4>
              </Link>
            ) : (
              <div className="flex h-7 w-fit cursor-not-allowed flex-row items-center gap-1 rounded-full border px-2 text-xs font-light tracking-tight shadow-md">
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

export const CardExperience = ({
  time,
  position,
  company,
  jobdesc,
}: IExperience) => {
  return (
    <div className="flex flex-col justify-between gap-5 pb-5 shadow-sm shadow-foreground hover:shadow-md hover:shadow-third md:flex-row md:gap-10 lg:gap-14">
      <h2 className="w-full basis-1/3 p-4 text-secondary">{time}</h2>
      <div className="flex w-full basis-2/3 flex-col space-y-4 p-4">
        <div className="text-secondary">
          <h2>{position}</h2>
          <h3>{company}</h3>
        </div>
        {jobdesc.map((job, index) => (
          <ul
            className="list-inside list-disc space-y-3 font-light"
            key={index}
          >
            <li>{job}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
