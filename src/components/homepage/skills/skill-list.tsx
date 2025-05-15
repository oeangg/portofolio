import React from "react";
import { TechItem } from "./skill-item";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa6";
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
    <div className="flex flex-wrap gap-4">
      <TechItem text="HTML" Icon={FaHtml5} />
      <TechItem text="CSS" Icon={FaCss3Alt} />
      <TechItem text="Javascipt" Icon={IoLogoJavascript} />
      <TechItem text="Typescript" Icon={SiTypescript} />
      <TechItem text="Tailwind CSS" Icon={SiTailwindcss} />
      <TechItem text="React JS" Icon={FaReact} />
      <TechItem text="Next JS" Icon={RiNextjsFill} />
      <TechItem text="Prisma ORM" Icon={SiPrisma} />
      <TechItem text="Adobe Premier" Icon={SiAdobepremierepro} />
    </div>
  );
};
