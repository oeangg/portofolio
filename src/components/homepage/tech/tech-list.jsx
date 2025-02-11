import React from "react";
import { TechItem } from "./tech-item";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTailwindcss,
  SiPrisma,
  SiTypescript,
  SiAdobepremierepro,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export const TechList = () => {
  return (
    <div className="grid w-2/3 grid-cols-2 gap-4 sm:gap-2 md:grid-cols-4 lg:grid-cols-5 lg:gap-8">
      <TechItem>
        <FaHtml5 size={48} />
        <span>HTML</span>
      </TechItem>
      <TechItem>
        <FaCss3Alt size={48} />
        <span>CSS</span>
      </TechItem>
      <TechItem>
        <IoLogoJavascript size={48} />
        <span>Javascipt</span>
      </TechItem>
      <TechItem>
        <SiTypescript size={48} />
        <span>Typescript</span>
      </TechItem>
      <TechItem>
        <SiTailwindcss size={48} />
        <span>Tailwind CSS</span>
      </TechItem>
      <TechItem>
        <FaBootstrap size={48} />
        <span>Bootstrap CSS</span>
      </TechItem>
      <TechItem>
        <FaReact size={48} />
        <span>React JS</span>
      </TechItem>
      <TechItem>
        <RiNextjsFill size={48} />
        <span>Next JS</span>
      </TechItem>
      <TechItem>
        <SiPrisma size={48} />
        <span>Prisma ORM</span>
      </TechItem>
      <TechItem>
        <SiAdobepremierepro size={48} />
        <span>Adobe Premier</span>
      </TechItem>
    </div>
  );
};
