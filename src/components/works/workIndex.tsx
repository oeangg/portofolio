import React from "react";

import { SubTitle } from "../subTitle";
import { workExperiences as works } from "@/src/data/workExperience";
import { CardExperience } from "./workCard";

export const WorkExperienceSection = () => {
  return (
    <section className="flex flex-col gap-10">
      <SubTitle title="Work Experience" />
      <div className="space-y-3">
        {works.map((work, index) => (
          <CardExperience key={index} {...work} />
        ))}
      </div>
    </section>
  );
};
