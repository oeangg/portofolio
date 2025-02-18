import React from "react";
import { SubTitle } from "../../ui/sub-title";

import { TechList } from "./tech-list";

export const TechStackSection = () => {
  return (
    <div className="">
      <SubTitle
        title="TechStack"
        text="Here are my current favorite tech stack:"
        mb="lg"
      />
      <TechList />
    </div>
  );
};
