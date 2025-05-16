import React from "react";

import { SubTitle } from "../subTitle";
import { CardProject } from "../card";
import { projectItems } from "@/src/data/project.item";

export const ProjectSection = () => {
  return (
    <div className="flex flex-col gap-10">
      <SubTitle title="Projects" />
      {projectItems.map((pro, index) => (
        <CardProject
          key={index}
          index={index}
          {...pro}
          techIcon={pro.tech.map((x) => x)}
        />
      ))}
    </div>
  );
};
