import React from "react";
// import Link from "next/link";
// import { SiTailwindcss, SiPrisma } from "react-icons/si";
// import { RiNextjsFill } from "react-icons/ri";
// import { FaGithub } from "react-icons/fa";
// import { FiChrome } from "react-icons/fi";
import { projectItems } from "../../data/project.item";

import { PageTitle } from "@/components/ui/page-title";
import { CardProject } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex w-full flex-col justify-between">
      <PageTitle
        title="Projects"
        text="Following are the projects I have worked on"
      />

      <div className="space-y-20">
        {projectItems.map((item, index) => (
          <CardProject
            key={index}
            {...item}
            techIcon={item.tech.map((x) => x)}
          />
        ))}
      </div>
    </div>
  );
}
