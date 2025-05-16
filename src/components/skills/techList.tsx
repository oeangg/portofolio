import React from "react";
import { TechItem } from "./techItem";
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
      <TechItem text="HTML" Icon={FaHtml5} iconSize={32} />
      <TechItem text="CSS" Icon={FaCss3Alt} iconSize={32} />
      <TechItem text="Javascipt" Icon={IoLogoJavascript} iconSize={32} />
      <TechItem text="Typescript" Icon={SiTypescript} iconSize={32} />
      <TechItem text="Tailwind CSS" Icon={SiTailwindcss} iconSize={32} />
      <TechItem text="React" Icon={FaReact} iconSize={32} />
      <TechItem text="Next JS" Icon={RiNextjsFill} iconSize={32} />
      <TechItem text="Prisma ORM" Icon={SiPrisma} iconSize={32} />
      <TechItem text="Adobe Premier" Icon={SiAdobepremierepro} iconSize={32} />
    </div>
  );
};
