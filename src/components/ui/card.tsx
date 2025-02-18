import React from "react";

import { FaGithub } from "react-icons/fa";
import { FiChrome } from "react-icons/fi";
import Link from "next/link";
import { RiNextjsFill } from "react-icons/ri";
import { SiPrisma, SiTailwindcss } from "react-icons/si";

interface IProjectItem {
  linkVideo: string;
  titleVideo: string;
  description: string;
  techIcon: string[];
  linkRepo: string;
  liveSite?: string;
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
  description,
  techIcon,
  linkRepo,
  liveSite,
}: IProjectItem) => {
  return (
    <div className="flex flex-col items-center justify-between gap-5 md:flex-row lg:gap-10">
      <iframe
        height="200"
        src={linkVideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full basis-1/3 rounded-lg p-2 shadow-sm shadow-foreground"
      ></iframe>
      <div className="basis-2/3 space-y-5">
        <h3 className="bg-gradient-to-r from-secondary to-foreground bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
          {titleVideo}
        </h3>
        <p>{description}</p>
        <div className="flex flex-row gap-4">
          <div className="flex w-fit flex-row items-center gap-3 rounded-md p-2 shadow-sm shadow-foreground">
            <h4 className="text-xs font-light text-secondary">Tech Stack</h4>
            <div className="flex flex-row gap-1 text-secondary">
              {techIcon.map((icon, index) => {
                if (icon.includes("next"))
                  return (
                    <RiNextjsFill
                      size={18}
                      key={index}
                      className="inline-block"
                    />
                  );
                if (icon.includes("tailwind"))
                  return (
                    <SiTailwindcss
                      size={18}
                      key={index}
                      className="inline-block"
                    />
                  );
                if (icon.includes("prisma"))
                  return (
                    <SiPrisma size={18} key={index} className="inline-block" />
                  );
                return null;
              })}
            </div>
          </div>

          <Link
            href={linkRepo}
            target="_blank"
            className="flex w-fit flex-row items-center gap-2 rounded-md p-2 text-secondary shadow-sm shadow-foreground duration-300 hover:text-primary"
          >
            <FaGithub size={18} />
            <h4 className="text-xs font-light text-secondary">Repository</h4>
          </Link>

          {liveSite ? (
            <Link
              href={liveSite}
              target="_blank"
              className="flex w-fit flex-row items-center gap-2 rounded-md p-2 text-secondary shadow-sm shadow-foreground duration-300 hover:text-primary"
            >
              <FiChrome size={18} />
              <h4 className="text-xs font-light text-secondary">Live Site</h4>
            </Link>
          ) : (
            <div className="flex w-fit cursor-not-allowed flex-row items-center gap-2 rounded-md p-2 text-foreground shadow-sm shadow-foreground duration-300">
              <FiChrome size={18} />
              <h4 className="text-xs font-light text-foreground">Live Site</h4>
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
