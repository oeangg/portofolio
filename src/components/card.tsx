import React from "react";

import { FaCss3Alt, FaGithub, FaHtml5 } from "react-icons/fa";
import { FiChrome } from "react-icons/fi";
import Link from "next/link";
import { RiNextjsFill } from "react-icons/ri";
import { SiPrisma, SiTailwindcss } from "react-icons/si";
import { cn } from "../utils/cn";
import Image from "next/image";
import { IoLogoJavascript } from "react-icons/io";

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
        "flex flex-col items-center justify-between gap-5 rounded-lg border p-5 hover:shadow-md",
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
      )}
    >
      {linkVideo && (
        <iframe
          height="200"
          src={linkVideo}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full basis-1/3 overflow-hidden rounded-lg"
        ></iframe>
      )}
      {linkImage && (
        <div
          className="relative w-full basis-1/3 overflow-hidden rounded-lg"
          style={{ height: "auto" }}
        >
          <Image
            src={linkImage}
            alt={titleVideo}
            width={500}
            height={230}
            style={{ width: "100%", height: "auto", objectFit: "cover" }} //
          />
        </div>
      )}
      <div className="basis-2/3 space-y-5">
        <h3 className="text-xl font-semibold tracking-tight">{titleVideo}</h3>
        <p className="text-sm text-secondary-foreground">{description}</p>
        <div className="flex flex-row gap-2 text-xs font-light tracking-tight">
          <div className="flex w-fit flex-row items-center gap-2 rounded-full bg-foreground px-3 py-2 text-primary-foreground/80 shadow-md">
            <div className="flex flex-row gap-1">
              {techIcon.map((icon, index) => {
                if (icon.includes("next"))
                  return (
                    <RiNextjsFill
                      size={15}
                      key={index}
                      className="inline-block"
                    />
                  );
                if (icon.includes("tailwind"))
                  return (
                    <SiTailwindcss
                      size={15}
                      key={index}
                      className="inline-block"
                    />
                  );
                if (icon.includes("prisma"))
                  return (
                    <SiPrisma size={15} key={index} className="inline-block" />
                  );

                if (icon.includes("html"))
                  return (
                    <FaHtml5 size={15} key={index} className="inline-block" />
                  );

                if (icon.includes("javascripts"))
                  return (
                    <IoLogoJavascript
                      size={15}
                      key={index}
                      className="inline-block"
                    />
                  );
                if (icon.includes("css"))
                  return (
                    <FaCss3Alt size={15} key={index} className="inline-block" />
                  );
                return null;
              })}
            </div>
          </div>

          <Link
            href={linkRepo}
            target="_blank"
            className="flex w-fit flex-row items-center gap-1 rounded-full bg-foreground px-3 py-2 tracking-tight text-primary-foreground/80 shadow-md duration-300 hover:bg-primary/90 hover:text-primary-foreground"
          >
            <FaGithub size={14} />
            <h4>Repository</h4>
          </Link>

          {liveSite ? (
            <Link
              href={liveSite}
              target="_blank"
              className="flex w-fit flex-row items-center gap-1 rounded-full bg-primary px-3 py-2 tracking-tight text-primary-foreground/80 shadow-md duration-300 hover:bg-primary/90 hover:text-primary-foreground"
            >
              <FiChrome size={14} />
              <h4>Live Site</h4>
            </Link>
          ) : (
            <div className="flex w-fit cursor-not-allowed flex-row items-center gap-1 rounded-full border px-4 py-2 shadow-md">
              <FiChrome size={14} />
              <h4 className="text-foreground">Live Site</h4>
            </div>
          )}
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
