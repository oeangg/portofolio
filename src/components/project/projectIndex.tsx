import React from "react";

import { projectItems as projects } from "@/src/data/projects";
import { CardProject } from "./projectCard";

export const ProjectSection = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="-space-y-1 text-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-xl font-light tracking-wide">Featured Portofolios</p>
      </div>
      {projects.map((pro, index) => (
        <CardProject
          key={index}
          index={index}
          {...pro}
          techIcon={pro.tech.map((x) => x)}
        />
      ))}
    </section>
  );
};
